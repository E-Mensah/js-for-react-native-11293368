//Task 1
function processArray(arrayElement) {
    return arrayElement.map(value => 
        (value % 2 === 0 ?  value * value : value * 3)
    );
  }

//Task 2

function formatArrayStrings (stringArray, numbersArray){
    let processedArray = processArray(numbersArray);
    if (stringArray.length !== processedArray.length){
        return "Arrays are not of the same length !!";
    }

    let formattedStrings = stringArray.map((string, index) => {
        if (processedArray[index] % 2 === 0) {
            return string.toUpperCase(); 
        } else {
            return string.toLowerCase(); 
        }
    });

    return formattedStrings;
}

export const formatArrayStrings = formatArrayStrings;
export const processArray = processArray;