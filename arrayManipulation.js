//Task 1
function processArray(arrayElement) {
    return arrayElement.map(value => 
        (value % 2 === 0 ?  value * value : value * 3)
    );
  }

export const processArray = processArray;