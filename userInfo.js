//Task 3
import { formatArrayStrings } from './arrayManipulation';

function createUserProfiles(names, modifiedNames) {  
   
    let name = [];
    let modifiedNamesArray = formatArrayStrings(name, modifiedNames);
    let id = 1;
   
   return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNamesArray[index],
            id: id++
        };
    });
}

export const createUserProfiles = createUserProfiles;