/**
 * Shuffles an array using the Fisher-Yates Shuffle
 * @param {Array<any>} array
 */
const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;
  let temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

/**
 * Removes spaces from a string and replaces them with a given character
 * @param {string} string Original string
 * @param {string} replacement Replacement character
 */
const removeSpaces = (string, replacement) => string.replace(' ', replacement);

export {
  shuffle,
  removeSpaces,
};
