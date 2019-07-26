// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])


// function everyOther(strings) {
//   var result = [];
//   var i = 0;
//   while (i < strings.length) {
//     if (i % 2 === 0) {
//       result.push(strings[i]);
//     }
//     (i += 1);
//   }
//   return result;
// }



// console.log(everyOther(["a", "b", "c", "d", "e"]));

// function everyOther(strings) {
//   var result = [];
//   var i = 0;
//   while (i < strings.length) {
//     result.push(strings[i]);
//     i += 2;
//   }
//   return result;
// }



// console.log(everyOther(["a", "b", "c", "d", "e"]));


// 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

// function reverse(string) {
//   var newString = [];
//   string.split("");
//   for (var i = (string.length - 1); i >= 0; i--) {
//     newString.push(string[i]);
//   }
//   return newString.join();
// }

// console.log(reverse("hi"));


// 2. Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

// function aCounter(string) {
//   var count = 0;
//   for (var i = 0; i < string.length; i++) {
//     string.split("");
//     if (string[i].toLowerCase() === "a") {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(aCounter("Africa"));

// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

function searcher(ascendingArray, number) {
  var counter = 0;
  var correctNumber = null;
  ascendingArray.forEach(function(movingNumber) {
    // console.log("firstcounter:");
    // console.log(counter);
    if (movingNumber === number) {
      // console.log("secondcounter:");
      // console.log(counter);
      correctNumber = counter;
    } else {
      counter += 1;
    }
  });
  // console.log("thirdcounter:");
  // console.log(counter);
  return console.log(correctNumber);
}

console.log(searcher([1, 2, 3, 4, 5], 8));
