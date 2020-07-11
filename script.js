//Hello Yaakov
//Good Bye John
//Good Bye Jen
//Good Bye Jason
//Hello Paul
//Hello Frank
//Hello Larry
//Hello Paula
//Hello Laura
//Good Bye Jim

(function(window){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(function () {
var helloSpeaker ={};
var speakWord = "Hello";
helloSpeaker.speak = function (){
console.log(speakWord + " " + names[i]);
}
window.helloSpeaker= helloSpeaker;
})();
(function(window){

var byeSpeaker ={};
var speakWord = "Good Bye";
byeSpeaker.speak=function() {
console.log(speakWord + " " + names[i]);
}
window.byeSpeaker= byeSpeaker;
})(window);
for (var i = 0; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase();
if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})(window);
