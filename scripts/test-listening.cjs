const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync('learning/app.js','utf8'),elements={speechVoice:{value:''},speechRate:{value:'0.75'},audioNote:{textContent:''}};
let voices=[],spoken=[],cancels=0;
const synth={getVoices:()=>voices,cancel:()=>cancels++,resume(){},speak:u=>spoken.push(u)};
const c={window:{speechSynthesis:synth},SpeechSynthesisUtterance:class{constructor(text){this.text=text}},el:id=>elements[id]};vm.createContext(c);vm.runInContext('let activeUtterance=null;'+app.slice(app.indexOf('function voiceScore'),app.indexOf('function listenButton')),c);
const run=code=>vm.runInContext(code,c);
voices=[{name:'Tiếng Việt',lang:'vi-VN',voiceURI:'vi'},{name:'Daniel',lang:'en-GB',voiceURI:'uk'},{name:'Sonia Natural',lang:'en-GB',voiceURI:'natural'},{name:'Samantha',lang:'en-US',voiceURI:'us'}];
assert.equal(run("speak('Wednesday').available"),true);let u=spoken.at(-1);assert.equal(u.voice.voiceURI,'natural');assert.equal(u.lang,'en-GB');assert.equal(u.rate,.75);assert.equal(u.pitch,1);assert.equal(u.text,'Wednesday');
elements.speechRate.value='0.75';elements.speechVoice.value='us';run("speak('I go to school on Monday.')");u=spoken.at(-1);assert.equal(u.rate,.75);assert.equal(u.voice.voiceURI,'us');assert.equal(u.lang,'en-US');assert.equal(cancels,1);
const old=spoken[0];old.onend();u.onstart();assert(elements.audioNote.textContent.includes('I go to school'));u.onend();assert(elements.audioNote.textContent.includes('Say it again'));
for(const rate of [.75,1,1.25,1.5,2]){elements.speechRate.value=String(rate);run("speak('Monday')");assert.equal(spoken.at(-1).rate,rate)}
elements.speechRate.value='999';elements.speechVoice.value='vi';run("speak('cat')");assert.equal(spoken.at(-1).rate,.75);assert.equal(spoken.at(-1).voice.voiceURI,'natural');
voices=[voices[0]];const count=spoken.length;assert.equal(run("speak('cat').available"),true);assert.equal(spoken.length,count+1);assert.equal(spoken.at(-1).lang,'en-GB');
voices=[];assert.equal(run("speak('dog').available"),true);assert.equal(spoken.at(-1).lang,'en-GB');
synth.speak=()=>{throw Error('device failure')};assert.equal(run("speak('dog').available"),false);
// The embedded button speaks in its own window, using shared rate/voice preferences.
const html=fs.readFileSync('learning/practice-zone.html','utf8'),speech=html.slice(html.indexOf('let practiceUtterance='),html.indexOf('let windowExpanded='));
const localSpoken=[],p={window:{parent:{listeningSettings:()=>({rate:1.25,voiceURI:'us'}),speak:()=>{throw Error('must not delegate playback')}}},SpeechSynthesisUtterance:class{constructor(text){this.text=text}}};
p.window.speechSynthesis={getVoices:()=>[{name:'Samantha',lang:'en-US',voiceURI:'us'}],cancel(){},speak:u=>localSpoken.push(u)};vm.createContext(p);vm.runInContext('let audioOn=true;'+speech,p);assert.equal(vm.runInContext("speak('Tuesday')",p),true);assert.equal(localSpoken[0].text,'Tuesday');assert.equal(localSpoken[0].rate,1.25);assert.equal(localSpoken[0].voice.voiceURI,'us');vm.runInContext('audioOn=false',p);assert.equal(vm.runInContext("speak('Monday')",p),false);assert.equal(localSpoken.length,1);vm.runInContext('audioOn=true;let failures=0;speak("cat",()=>failures++)',p);localSpoken.at(-1).onerror({error:'not-allowed'});assert.equal(vm.runInContext('failures',p),1);localSpoken[0].onerror({error:'interrupted'});assert.equal(vm.runInContext('failures',p),1);
console.log('PASS: direct gesture playback in the embedded document, shared speed/voice, visible async failure callback, delayed voice list and fresh utterance retention.');
// Rapid game taps reuse one audio context rather than allocating one per click.
let contexts=0,tones=0;const parameter={setValueAtTime(){},exponentialRampToValueAtTime(){}};
class MockAudioContext{constructor(){contexts++;this.state='running';this.currentTime=0;this.destination={}}createOscillator(){tones++;return{frequency:parameter,connect(){},disconnect(){},start(){},stop(){}}}createGain(){return{gain:parameter,connect(){},disconnect(){}}}close(){this.state='closed';return Promise.resolve()}}
const audio={window:{AudioContext:MockAudioContext,addEventListener(){}},console};vm.createContext(audio);vm.runInContext('let audioOn=true;'+html.slice(html.indexOf('let soundContext='),html.indexOf('let practiceUtterance=')),audio);for(let n=0;n<25;n++)vm.runInContext('beep()',audio);assert.equal(contexts,1);assert.equal(tones,25);vm.runInContext('audioOn=false;beep()',audio);assert.equal(tones,25);console.log('PASS: 25 rapid effects share one audio context; mute stops effects.');
// The phone-compatible mode asks iOS for its own English voice and media playback session.
synth.speak=u=>spoken.push(u);c.window.navigator={audioSession:{type:'auto'}};elements.speechVoice.value='device-default';run("speak('Wednesday')");assert.equal(spoken.at(-1).voice,undefined);assert.equal(spoken.at(-1).lang,'en-GB');assert.equal(c.window.navigator.audioSession.type,'playback');
p.window.parent.listeningSettings=()=>({rate:1.5,voiceURI:'device-default'});vm.runInContext("speak('Sunday')",p);assert.equal(localSpoken.at(-1).voice,undefined);assert.equal(localSpoken.at(-1).rate,1.5);console.log('PASS: system-voice compatibility mode and explicit playback session.');
