/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
    'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
    'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
    'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
  ];
  
  function result(sentences) {
    // your code here
    let findOne = sentences[0].length;
    let findTwo = sentences[1].length;
    let findThree = sentences[2].length;

    let indexOne = sentences[0].slice(0,23);
    let indexTwo = sentences[1].slice(0,23);
    let indexThree = sentences[2].slice(0,23);

    return "index 0 value is : \'" + indexOne + "\' than number of words: " + findOne + ". And then index 1 value: \'" + indexTwo + "\' than number of words: " + findTwo + ". And index 2 Value: \'" + indexThree + "\' than number of words: " + findThree;
  }
  
  console.log(result(sentences));