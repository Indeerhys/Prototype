
function loadData() {
  var nipple = new Array;
  var nipple_str = localStorage.getItem('user');
  if (nipple_str != null) {
    nipple = JSON.parse(nipple_str);
  }
  console.log(localStorage.getItem("user"));
}


var itemsIndex = [];
itemsIndex["Sword"] = 2;
itemsIndex["Shield"] = 2;
itemsIndex["Rope"] = 1;

//console.log("The Sword's value is = " + itemsIndex["Sword"]);



//build an array of location variables to hold possible location rolls
var locationsIndex = ["Forrest", "Town", "Field", "Dessert", "Cave"];
var locationRollHandler = Math.floor(Math.random() * locationsIndex.length);
console.log("The location roll handler rolled = " + locationRollHandler);
console.log("This location is = " + locationsIndex[locationRollHandler]);
var locationHandler = locationsIndex[locationHandler];

var timeIndex = ["Dusk", "Dawn", "Morning", "Evening", "Night"];
var timeRollHandler = Math.floor(Math.random() * timeIndex.length);
console.log("The time roll handler rolled = " +timeRollHandler);
console.log("The time is = " + timeIndex[timeRollHandler]);
var timeHandler = timeIndex[timeRollHandler];

var enemyCountRollHandler = Math.floor(Math.random() * 15);
console.log("The amount of enemies is = " + enemyCountRollHandler);

var enemyRaceIndex = ["Zombie", "Vampire", "Troll", "Orc", "Ogre", "Goblin", "Giant", "Dragon"];
var enemyRaceRollHandler = Math.floor(Math.random() * enemyRaceIndex.length);
console.log("The enemy race roll handler rolled = " + enemyRaceRollHandler);
console.log("The enemy race is = " + enemyRaceIndex[enemyRaceRollHandler]);

var enemyAlertStatusIndex  = ["Alert", "Asleep", "Patrol", "Point Guard"];
var enemyAlertStatusRollHandler = Math.floor(Math.random() * enemyAlertStatusIndex.length);
console.log("The enemy alert status roll handler rolled = " + enemyAlertStatusRollHandler);
console.log("The enemy is = " + enemyAlertStatusIndex[enemyAlertStatusRollHandler]);

var characterClassIndex = ["Fighter", "Thief", "Magic-User", "Healer"];

//var playerName = prompt("Hello! My name is DungeonBOT, what is yours Traveler?");
//console.log(playerName);




// var greeting;
// var playerGreeting = prompt("Hello! My name is DungeonBOT, what is yours?");
// switch(playerGreeting) {
//     case "Rhys":
//         greeting = "Greetings, based Creator!";
//         break;
//     case "Jonjoe":
//         greeting = "Oh no! Not you! I've heard any tales....";
//         break;
//     case "Mark":
//         greeting = "I'm going to enjoy killing.....I mean HELPING you on your quest Mark";
//         break;
//     default:
//         greeting = "A new explorer, welcome!";
//         break;
// };
// console.log(greeting);
// alert("Greetings " + playerGreeting + "!  Welcome to your journey!");




function randomData() {
  return Math.floor(Math.random() * 8 + 1);
}

// save data array

var player;

function createPlayer() {
  player = {
    name: 'Please Enter A Name',
    race: 'Human',
    hp: 20,
    mp: 10,
    attackSpeed: 1.5,
    strength: randomData(),
    dex: randomData(),
    const: randomData(),
    intel: randomData(),
    wisdom: randomData(),
    charisma: randomData(),
    perception: randomData()
  }

  $('#STR').val(player.strength);
  $('#DEX').val(player.dex);
  $('#CON').val(player.const);
  $('#INT').val(player.intel);
  $('#PER').val(player.perception);
  $('#WIS').val(player.wisdom);
  $('#CHA').val(player.charisma);
}


function saveData() {
  player.strength = $('#STR').val();
  player.dex = $('#DEX').val();
  player.const = $('#CON').val();
  player.intel = $('#INT').val();
  player.perception = $('#PER').val();
  player.wisdom = $('#WIS').val();
  player.charisma = $('#CHA').val();

  player.charactername = $('#name').val();
  player.alignment = $('#alignment').val();
  player.race = $('#race').val();

  localStorage.setItem("user", JSON.stringify(player));
}










  //create option for random sheet or player selected
    //store sheet information in a variable and combine wth save data
      //create and link graphic that updates on damage

//create inventory
  //combine with saved data
    //create graphic to show inventory and items
      //have the bot be able to list back items to player

// scrap CSS

$("#trigger").click(function() {
  $(".left-side").toggleClass("hidden");
});
