// Iteration 1: Names and Input

const hacker1 = "Jeff";
console.log(`The driver's name is ` + hacker1);

const hacker2 = "Jeffa";
console.log(`The navigator's name is ` + hacker2);

// Iteration 2: Conditionals

function longerName(name1, name2) {
  if (name1.length > name2.length) {
    console.log(
      "The driver has the longest name, it has " + name1.length + " characters"
    );
  } else if (name1.length < name2.length) {
    console.log(
      "It seems that the navigator has the longest name, it has " +
        name2.length +
        " characters."
    );
  } else {
    console.log(
      "Wow, you both have equally long names, " + name1.length + " characters!."
    );
  }
}
longerName(hacker1, hacker2);

// Iteration 3: Loops

function toUpperAndSpace(name) {
  let upperCaseName = "";
  for (let i = 0; i < name.length; i++) {
    upperCaseName += name[i].toUpperCase() + " ";
  }
  console.log(upperCaseName);
}
toUpperAndSpace(hacker1);

function reverseOrder(name) {
  let reverseOrderName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reverseOrderName += name[i];
  }
  console.log(reverseOrderName);
}
reverseOrder(hacker2);

function lexicographicOrder(name1, name2) {
  let longestNameLength;
  if (name1.length > name2.length) {
    longestNameLength = name1.length;
  } else {
    longestNameLength = name2.length;
  }

  for (let i = 0; i < longestNameLength; i++) {
    if (name1[i] && name2[i]) {
      if (name1[i] < name2[i]) {
        console.log("The driver's name goes first.");
        break;
      } else if (name1[i] > name2[i]) {
        console.log("Yo, the navigator goes first definitely.");
        break;
      }
    } else if (!name1[i]) {
      console.log("The driver's name goes first.");
      break;
    } else if (!name2[i]) {
      console.log("Yo, the navigator goes first definitely.");
      break;
    } else {
      console.log("What?! You both have the same name?");
      break;
    }
  }
}
lexicographicOrder(hacker1, hacker2);

// Bonus 1:

const paragraphString = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt et labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`;

function countCharacter(paragraph, character) {
  let counter = 0;
  for (let i = 0; i < paragraph.length; i++) {
    // if(character.length === 1) {
    // 	if(paragraph[i] === character) {
    // 		counter = counter + 1;
    // 	}
    // } else if (paragraph.slice(i, i + character.length) === character) {
    // 	counter = counter + 1;
    // }
    if (paragraph.slice(i, i + character.length) === character) {
      counter++;
    }
  }
  return counter;
}
// countCharacter(paragraphString, " ");
// let splitted = paragraphString.split(" ");
// console.log(splitted.length);

countCharacter(paragraphString, "et");

// Bonus 2:

// const phraseToCheck = "Amor, Roma";

function checkPalindrome(string) {
  let counter = 0;
  // for(let i = 0; i < string.length; i++) {
  // 	for(let j = string.length - 1; j >= 0; j--) {
  // 		if (string[i] !== string[j]) {
  // 			if (string[i].toLowerCase() === string[j].toLowerCase()) {
  // 				console.log(i, j)
  // 				console.log(string[i], string[j]);
  // 				counter++;
  // 				break;
  // 			}
  // 		}
  // 	}
  // }
  const stringLowerCase = string.toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (i !== string.length - i - 1) {
      if (stringLowerCase[i] === stringLowerCase[string.length - i - 1]) {
        console.log(i, string.length - i - 1);
        console.log(string[i], string[string.length - i - 1]);
        counter++;
      }
    }
  }
  console.log(counter);
  if (counter >= 3) {
    return "It is a Palindrome";
  } else {
    return "It is NOT a Palindrome";
  }
}
checkPalindrome("put it up");

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
