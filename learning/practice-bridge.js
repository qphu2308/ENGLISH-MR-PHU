// The embedded practice uses the selected Lesson/Unit, never the uploaded demo pack.
function practiceCategory(en,vi=''){const w=en.toLowerCase().trim(),meaning=vi.toLowerCase();if(w==='orange'&&!/màu/.test(meaning)&&meaning)return 'trái cây';if(['fish','chicken'].includes(w)&&/con cá|cá vàng|con gà/.test(meaning))return 'động vật';const groups={
 'trái cây':['apple','banana','grape','grapes','mango','pear','watermelon'],
 'ngày trong tuần':['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
 'tháng':['january','february','march','april','may','june','july','august','september','october','november','december'],
 'màu sắc':['red','blue','green','yellow','pink','purple','orange','black','white','brown','grey','gray'],
 'nghề nghiệp':['doctor','teacher','nurse','worker','farmer','driver','singer','cook','pupil'],
 'động vật':['dog','cat','bird','rabbit','parrot','goldfish','tiger','monkey','elephant','peacock','horse','lion','zebra','giraffe'],
 'đồ dùng học tập':['pen','pencil','ruler','eraser','rubber','book','notebook','pencil case','school bag'],
 'thức ăn':['rice','bread','fish','chicken','meat','chips','beans','egg','noodles','pizza'],
 'đồ uống':['water','milk','juice','orange juice','lemonade','tea'],
 'hoạt động':['study','study at school','do housework','play football','play badminton','play chess','go to school','sing','dance','run','swim','draw']};return Object.entries(groups).find(([,a])=>a.includes(w))?.[0]||''}
function syncPractice(){const frame=document.getElementById('practiceFrame');if(!frame?.contentWindow)return;const selected=lesson();const seen=new Set();const words=selected.words.filter(([en,vi])=>en&&vi&&!seen.has(en.toLowerCase())&&seen.add(en.toLowerCase())).map(([en,vi],i)=>({id:String(i),en,vi,art:vocabularyPicture(en,vi)||null,category:practiceCategory(en,vi)}));frame.contentWindow.postMessage({type:'mrphu-practice-data',key:grade+'-'+current+'-'+activeLesson,label:'Grade '+grade+' · Unit '+(current+1)+' · '+lessonLabel(),words,sentences:selected.examples||[]},location.origin)}
const practiceFrame=document.getElementById('practiceFrame');
practiceFrame.addEventListener('load',syncPractice);
window.addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==practiceFrame.contentWindow)return;if(event.data?.type==='mrphu-practice-ready')syncPractice();if(event.data?.type==='mrphu-practice-height'&&Number.isFinite(event.data.height))practiceFrame.style.height=Math.max(450,Math.min(7000,event.data.height+12))+'px';if(event.data?.type==='mrphu-practice-open')document.getElementById('practice').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})});
syncPractice();
