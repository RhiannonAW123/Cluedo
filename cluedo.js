// Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Answer the murderer is miss Scarlet.
//  when The declareMurderer function is called it asks for 'scenario' and then the 'murderer' which is Miss Scarlet.

// // // Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Answer is a type error.
// because there is a const variable that has then tried to be reassigned.


// // Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// the murderer is Professor Plum.
// a local variable is created with the delareMurderer function, this has the value of miss peacock.
// as this is a local varible it only exists within the function. so when the firstVerdict and second Verdict are called the answer is still professer plum.

// // Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// This declares three suspects 'Miss Scarlett', 'Professer Plum' and 'Colonel Mustard' but suspect three is Mrs.Peacock.
// The suspect variables are declared. Then the the function declareAllSuspects creates a new local variable
// which declares 'Colonel Mustard' as suspect three but this doesn't effect Mrs peacock because it is inside the local variable.

// // Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// answer weapon is revolver.
// the changeWeapon function is called which changes the weapon in the scenario to a relvolver.
// then the declareWeapon function is called giving a string which contains the weapon inside the scenario.
// because the scenario variable is a const the weapon cant be reassigned
// Although we cant reassign it, the objects properties can still be changed.

// // Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// The murderer is Mrs.White
//murderer is first assigned to 'Colonel Mustard'.
// Then the function changeMurderer is called which reassigns the murderer to be 'Mr.Green'
// Then the function plotTwist is called which reassigns the murderer to be 'Mrs. White'
// declareMurderer function is then called which returns a string containing the murderer.


// // Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mr.Green
// murderer is first assigned to Professer Plum
// the changeMurderer function is then called changing the murderer to Mrs.Green.
// colonel mustard is called within a local variable so this will not effect the first variable.
// then the unexpecctedOutcome function changes the mruderer again to Miss scarlet but this is also within the loal varable.
// the declareMurderer function is then called which returns a string containing the murderer.



// // Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// answer the weapon is the candle stick
// changeScenario is called which changes the murderer to Mrs.Peacock and the room to the dining room.
// plotTwist is then called which changes the murderer to Colonel Mustard and checks if the room property is eual to dining room.
//unexpectedOutcomes is then called checking if the murderer property is equal to  Colonel Mustard.
// because it is it then changes the weapon to candle stick.
// finally declareWeapon is called returning a string declaring the updated weapon in the scenario.


// // Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// answer THE MURDERER IS PROFESSOR PLUM!!
// murderer is assigned to Professor Plum.
// the if statement checks if the murderer property is equal to Professor Plum.
// it is so it then declares the murderer to Mrs.Peacock.
//the declareMurderer function is then called returning a string containing the murderer