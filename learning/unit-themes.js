// Each curriculum Unit has an explicitly reviewed topic. Lessons and Extension share their Unit theme.
const UNIT_THEMES={"1": ["school", "food", "market", "home", "food", "school", "garden", "park", "market", "animals", "transport", "countryside", "food", "toys", "sports", "home"], "2": ["birthday", "garden", "beach", "countryside", "school", "farm", "food", "countryside", "market", "animals", "park", "food", "subjects", "family", "clothes", "camp"], "3": ["friends", "friends", "friends", "body", "hobbies", "school", "school", "school", "colours", "sports", "family", "jobs", "home", "home", "food", "animals", "toys", "hobbies", "sports", "animals"], "4": ["friends", "time", "time", "birthday", "hobbies", "school", "subjects", "subjects", "sports", "travel", "home", "jobs", "body", "time", "family", "weather", "city", "market", "animals", "camp"], "5": ["friends", "home", "friends", "hobbies", "jobs", "school", "school", "school", "sports", "travel", "family", "tet", "birthday", "health", "health", "weather", "stories", "transport", "city", "travel"]};
const THEME_COLOURS={"school": ["#1688ce", "#76d5e5"], "home": ["#db7634", "#f9d489"], "market": ["#188653", "#a5df64"], "food": ["#e37b31", "#ffcf77"], "garden": ["#288646", "#b2df67"], "park": ["#199d8d", "#a7e7a0"], "animals": ["#229779", "#93d865"], "transport": ["#2571be", "#91cdeb"], "birthday": ["#bc3c8e", "#f4a7b9"], "beach": ["#168fbc", "#90e6ed"], "countryside": ["#2a9364", "#aedf72"], "farm": ["#729b28", "#e3dc78"], "clothes": ["#a54a9b", "#eab6e9"], "camp": ["#257c66", "#9cce87"], "friends": ["#7051be", "#c4b2f3"], "body": ["#3e88bf", "#a1dbed"], "hobbies": ["#a246a6", "#f2b2d8"], "toys": ["#bd4c7c", "#ffca99"], "jobs": ["#436ab5", "#b3d4f0"], "time": ["#c47a21", "#f6d781"], "sports": ["#228464", "#b2df80"], "weather": ["#187ead", "#a8d9ef"], "tet": ["#c83248", "#f7bc54"], "stories": ["#7a49af", "#d0b8ee"], "health": ["#279c91", "#bcf0d2"], "colours": ["#8d4bb4", "#ffc390"], "subjects": ["#4b68b7", "#baaff2"], "city": ["#397d9a", "#a4d6e4"], "family": ["#c76273", "#f5c0a6"], "travel": ["#168ba7", "#a1e7d7"], "music": ["#ac4499", "#e9b0ec"], "art": ["#bd5b82", "#f1bc89"]};
function renderUnitTheme(grade,unitNumber){
 const topic=UNIT_THEMES[grade]?.[unitNumber-1]||'school';
 const banner=document.getElementById('unitBanner'),art=document.getElementById('unitThemeArt');
 if(!banner||!art)return;
 const colours=THEME_COLOURS[topic];
 banner.setAttribute('data-theme',topic);
 banner.style.setProperty('--theme-strong',colours[0]);
 banner.style.setProperty('--theme-light',colours[1]);
 art.src='assets/unit-themes/'+topic+'.webp';
 // The illustration is decorative; the live Unit heading describes the topic.
 art.alt='';
}
