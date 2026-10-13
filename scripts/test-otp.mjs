import assert from 'node:assert/strict';import fs from 'node:fs';const src=fs.readFileSync('worker/index.js','utf8');const w=(await import('data:text/javascript;base64,'+Buffer.from(src).toString('base64'))).default;
const origin='https://englishwithmrphu.livelyhero.chatgpt.site';let calls=0;globalThis.fetch=async(url,opts)=>{calls++;const b=JSON.parse(opts.body);if(url.includes('/otp?')){assert.equal(b.create_user,false);return Response.json({})}if(url.endsWith('/verify')){assert.equal(b.type,'email');return b.token==='123456'?Response.json({access_token:'test-token',refresh_token:'test-refresh'}):Response.json({error:'expired'},{status:403})}throw Error('unexpected')};
const req=(path,body)=>w.fetch(new Request(origin+path,{method:'POST',headers:{origin,'Content-Type':'application/json'},body:JSON.stringify(body)}));
assert.equal((await req('/auth/code',{email:'student@example.com'})).status,200);let r=await req('/auth/verify-code',{email:'student@example.com',code:'123456'});assert.equal(r.status,200);assert(r.headers.get('set-cookie').includes('HttpOnly'));assert(!JSON.stringify(await r.json()).includes('test-token'));assert.equal((await req('/auth/verify-code',{email:'student@example.com',code:'000000'})).status,400);const before=calls;assert.equal((await req('/auth/verify-code',{email:'student@example.com',code:'123'})).status,400);assert.equal(calls,before);
const login=await w.fetch(new Request(origin+'/login'));const html=await login.text();const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];new Function(script);assert(html.includes('autocomplete="one-time-code"'));console.log('PASS: OTP request, verification, invalid/expired code rejection, secure session cookies, login script syntax.');
// Provider failures must never be reported as a successful email delivery.
for(const path of ['/auth/code','/auth/signup','/auth/resend-signup']){
 globalThis.fetch=async()=>Response.json({code:'over_email_send_rate_limit'},{status:429,headers:{'Retry-After':'120'}});
 const r=await req(path,{email:'student@example.com',password:'valid-password',full_name:'Student',grade:'1'}),d=await r.json();
 assert.equal(r.status,429);assert.equal(d.retry_after,120);assert.equal(r.headers.get('retry-after'),'120');assert.equal(d.sent,undefined);assert(d.error.includes('No code was sent'));
}
globalThis.fetch=async()=>Response.json({code:'email_address_not_authorized'},{status:400});
r=await req('/auth/code',{email:'student@example.com'});assert((await r.json()).error.includes('not configured'));
globalThis.fetch=async(url,opts)=>{const b=JSON.parse(opts.body);if(url.includes('/signup?')){assert(url.includes(encodeURIComponent(origin+'/login')));return Response.json({user:{id:'mock'}})}if(url.includes('/resend?')){assert.equal(b.type,'signup');assert(url.includes(encodeURIComponent(origin+'/login')));return Response.json({})}if(url.endsWith('/verify')){assert.equal(b.type,'signup');return Response.json({access_token:'test-token',refresh_token:'test-refresh'})}throw Error('unexpected')};
r=await req('/auth/signup',{email:'student@example.com',password:'valid-password',full_name:'Student',grade:'1'});assert.equal((await r.json()).flow,'signup');
assert.equal((await req('/auth/resend-signup',{email:'student@example.com'})).status,200);
assert.equal((await req('/auth/verify-code',{email:'student@example.com',code:'123456',flow:'signup'})).status,200);
assert(html.includes('Resend verification code'));assert(html.includes('recordWait(d)'));
console.log('PASS: signup/resend verification, upstream 429 and Retry-After, code error formats, unauthorized sender, no false success.');
