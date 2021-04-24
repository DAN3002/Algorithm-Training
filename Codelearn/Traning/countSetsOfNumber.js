const countSetsOfNumber = (function countSetsOfNumber (number) {

  const findLargestOccurrence = (numSet) => {
    let occurrences = {};

    numSet.forEach((item, index, array) => {
      if (+item === 6 || +item === 9) {
        occurrences['6or9'] = (occurrences['6or9'] || 0) + 1;
      } else {
        occurrences[item] = (occurrences[item] || 0) + 1;
      }
    });

    return occurrences;
  }

  const transformedInput = findLargestOccurrence(
    number
      .split("")
      .sort((a, b) => a - b)
  );

  // console.log('occurrences', occurrences);
  return Math.max(
    ...Object
      .keys(transformedInput)
      .map(key => {
        if (key === '6or9') {
          return Math.ceil(transformedInput[key] / 2);
        }
        return transformedInput[key];
      })
  );
});