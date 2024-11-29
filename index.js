//Tast 1 done
var command = "my name is razu, i am from bangladesh A ";
var singleLater = command.split("")
var count = 0;
for (var i = 0; i < command.length; i++) {
    var latter = singleLater[i];
    if (latter === "a") {
        count++
    }
}
// console.log(count);

//tast = 2


var command2 = "Bangladesh is a very beautiful country that is situated in south asia A"
var singleLater2 = command2.split("");
var count2 = 0;
for (var i = 0; i < command2.length; i++) {
    var latter = singleLater2[i];
    if (latter.toLowerCase() === "a") {
        count2++;
    }
}
// console.log(count2);

var command3 = "i am working at Robi axiata limited as IT";
var singleWord = command3.split(" ");
for(var i = 0; i < singleWord.length; i++){
    var words = singleWord[i];
    var finalWork = words[0].toUpperCase()+words.substr(1)
    console.log(finalWork)
}


