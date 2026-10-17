// The embedded practice uses the selected Lesson/Unit, never the uploaded demo pack.
function practiceCategory(en,vi=''){const w=en.toLowerCase().trim(),meaning=vi.toLowerCase();if(w==='orange'&&!/màu/.test(meaning)&&meaning)return 'fruit';if(['fish','chicken'].includes(w)&&/con cá|cá vàng|con gà/.test(meaning))return 'animals';const groups={
 'fruit':['apple','banana','grape','grapes','mango','pear','watermelon'],
 'weekdays':['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
 'months':['january','february','march','april','may','june','july','august','september','october','november','december'],
 'colours':['red','blue','green','yellow','pink','purple','orange','black','white','brown','grey','gray'],
 'jobs':['doctor','teacher','nurse','worker','farmer','driver','singer','cook','pupil'],
 'animals':['dog','cat','bird','rabbit','parrot','goldfish','tiger','monkey','elephant','peacock','horse','lion','zebra','giraffe'],
 'school things':['pen','pencil','ruler','eraser','rubber','book','notebook','pencil case','school bag'],
 'food':['rice','bread','fish','chicken','meat','chips','beans','egg','noodles','pizza'],
 'drinks':['water','milk','juice','orange juice','lemonade','tea'],
 'activities':['study','study at school','do housework','play football','play badminton','play chess','go to school','sing','dance','run','swim','draw']};return Object.entries(groups).find(([,a])=>a.includes(w))?.[0]||''}
// Reuse reviewed, context-specific frames; do not substitute arbitrary vocabulary.
function practiceSentenceBank(selected){
 const rows=[...(selected.examples||[])];
 const fill=(template,values)=>{let n=0;return template.replace(/__/g,()=>values[n++]||'__')};
 for(const [en] of selected.patterns||[]){const spec=patternPracticeSpec(en);if(!spec)continue;
  for(const option of spec.options||[]){rows.push([fill(spec.en,option.fill),fill(spec.vi,option.mean)]);
   for(const answer of spec.answers||[])rows.push([fill(answer.en,option.fill),fill(answer.vi,option.mean)]);
  }
 }
 const seen=new Set();return rows.filter(([en,vi])=>en&&vi&&!/__|…|\.\.\./.test(en+vi)&&!seen.has(en.toLowerCase())&&seen.add(en.toLowerCase()));
}
function syncPractice(){const frame=document.getElementById('practiceFrame');if(!frame?.contentWindow)return;const selected=lesson();const seen=new Set();const words=selected.words.filter(([en,vi])=>en&&vi&&!seen.has(en.toLowerCase())&&seen.add(en.toLowerCase())).map(([en,vi],i)=>({id:String(i),en,vi,art:vocabularyPicture(en,vi)||null,category:practiceCategory(en,vi)}));frame.contentWindow.postMessage({type:'mrphu-practice-data',key:grade+'-'+current+'-'+activeLesson,label:'Grade '+grade+' · Unit '+(current+1)+' · '+lessonLabel(),words,sentences:practiceSentenceBank(selected)},location.origin)}
const practiceFrame=document.getElementById('practiceFrame');
practiceFrame.addEventListener('load',syncPractice);
window.addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==practiceFrame.contentWindow)return;if(event.data?.type==='mrphu-practice-ready')syncPractice();if(event.data?.type==='mrphu-practice-height'&&Number.isFinite(event.data.height))practiceFrame.style.height=Math.max(450,Math.min(7000,event.data.height+12))+'px';if(event.data?.type==='mrphu-practice-open')document.getElementById('practice').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})});
syncPractice();

// Window-filling fallback for browsers that do not expose the Fullscreen API.
let practiceWindowExpanded=false,practicePreviousOverflow='';
function setPracticeWindowExpanded(on){if(on===practiceWindowExpanded)return;practiceWindowExpanded=on;if(on){practicePreviousOverflow=document.body.style.overflow;document.body.style.overflow='hidden'}else document.body.style.overflow=practicePreviousOverflow;practiceFrame.classList.toggle('practice-window-expanded',on);practiceFrame.setAttribute('scrolling',on?'auto':'no')}
window.addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==practiceFrame.contentWindow||event.data?.type!=='mrphu-practice-fullscreen'||typeof event.data.expanded!=='boolean')return;setPracticeWindowExpanded(event.data.expanded)});
practiceFrame.addEventListener('load',()=>setPracticeWindowExpanded(false));
