var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length);
for( var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
console.log(i);
console.log(enemyNames[i] + "is at" + i + "index");

}
var enemyHealth = 50;
var enemyAttack = 12;

//create function
 var fight = function(enemyName) {
     window.alert("Welcome to Robot Gladiators!");
     var promptFight = window.prompt("Would you like to FIGHT or SKIPT this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 
     if ( promptFight === "fight" || promptFight === "FIGHT"){
     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

  //check enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + "has died!");
  }  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  //check players health 
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  //if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm(" Are you sure you'd like to quit?");
    

// if yes (true), leave fight
if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
//subtract money from playerMoney for skipping
playerMoney = playerMoney - 2;
}

//if no (false), ask question again by running fight()again

else {
    fight ();
}
}
 };
//fight loop
var startGame = function(){
  // reset player stats
  playerHealth =100;
  playerAttack =10;
  playerMoney = 10;

 for(var i = 0; i < enemyNames.length; i++) {
 if (playerHealth > 0) {
  window.alert( "Welcome to Robot Gladiators! Round " + (i + 1));
 
var pickedEnemyName =enemyNames[i];

enemyHealth = 50;

fight(pickedEnemyName);
}

 else {
  window.alert("you have lose your robot in battle! Game over");
  break;
}
 }
 //plAY AGAIN
 endGame();
}

var endGame = function(){
if (playerHealth > 0) {
  window.alert("The game has no ended.Lets see how you did!");
}
else {
  window.alert("you've lost your robot in battle.");
}
}
var playAgainConfirm = window.confirm("Would you like to play again");

if (playAgainConfirm) {
  //restart
  startGame();
}
else{
  window.alert( "thank you for playing robot gladiators! Come back soon!");
}