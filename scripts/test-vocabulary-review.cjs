const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const c=vm.createContext({});for(const f of ['data','curriculum','lesson-map','extensions'])vm.runInContext(fs.readFileSync('learning/'+f+'.js','utf8'),c);
const {courses,maps,ext}=JSON.parse(vm.runInContext('JSON.stringify({courses:COURSES,maps:LESSON_MAP,ext:EXTENSIONS})',c));
const key=s=>s.toLowerCase().trim().replaceAll('’',"'");
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
let checked=0;
for(const [g,course]of Object.entries(courses))for(const [i,u]of course.units.entries()){
 const words=u.words.map(w=>key(w[0]));assert.equal(new Set(words).size,words.length,`Duplicate ${g}/${i+1}`);
 assert(u.words.every(w=>w[0]&&w[1]&&!/[?=+]/.test(w[0])),`Sentence/grammar notation in ${g}/${i+1}`);
 const grouped=u.wordGroups.flatMap(p=>p.words);assert.equal(new Set(grouped).size,u.words.length);assert.equal(grouped.length,u.words.length);
 assert(ext[g][i+1].words.every(w=>!words.includes(key(w[0]))),`Extension overlaps main ${g}/${i+1}`);
 for(const m of Object.values(maps[g][i+1]))for(const ix of m.words)assert(u.words[ix],`Broken lesson index ${g}/${i+1}`);
 checked++;
}
assert.equal(checked,92);
for(const u of [4,9]){
 const unit=courses[4].units[u-1];const monthWords=unit.words.filter(w=>months.includes(w[0])).map(w=>w[0]);assert.deepEqual(monthWords,months);
 for(const map of Object.values(maps[4][u])){
  const words=map.words.map(ix=>unit.words[ix][0]);if(words.some(w=>months.includes(w)))assert(months.every(w=>words.includes(w)),'Partial calendar in Lesson');
 }
 assert(!ext[4][u].words.some(w=>months.includes(w[0])),'Months repeated in Extension');
}
assert.equal(courses[4].units[2].wordGroups[0].words.length,7);
assert.equal(courses[5].units[15].wordGroups[0].words.length,4);
console.log('PASS: 92 rebuilt Units; unique meaningful words; complete groups; 12 months in every applicable Lesson; distinct Extensions; valid lesson and group indices.');
