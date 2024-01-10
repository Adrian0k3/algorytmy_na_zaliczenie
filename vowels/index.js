// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    
    const strArray = str.toLowerCase().split('');
    
    
    const vowelCount = strArray.reduce((count, char) => {
      if (vowelsArray.includes(char)) {
        count++;
      }
      return count;
    }, 0);
  
    return vowelCount;
  }

console.log(vowels('Hi There!'));
console.log(vowels('Why do you ask?'));
console.log(vowels('Why?'));

module.exports = vowels;
