# Student id: 11293368

## Task 1
This task required creating a function called 'processArray' with an array parameter.
The function returns squared even numbers and tripled odd numbers by iterating or searching 
through the array argument passed and uses the ternary operator to identify odd and even numbers 
with subsequent actions to be carried out.

## Task 2
I created a function with two array arguments (first argument with strings and second argument
with numbers modified using the 'processArray' function). Checked whether the two arguments have the same 
length using an if statement together with the `.length` in-built function.
I used the `map` method on `stringArray` to iterate over each element 
(string) in the array. The `map` method creates a new array with the 
results of calling a provided function on every element in the calling array.
A `formattedStrings` variable is created to store the formatted string at the end. For each string in the string array,
a check is made on the processed array to see if the number is even or odd in order to capitalize or 
change the corresponding string to lowercase. Finally, the function returns the `formattedStrings` array based on the 
conditions provided.

## Task 3
First imported the 'formatArrayStrings' from a file named arrayManipulation. 
I created a function with two array parameters. Initialize an integer value `id` with a value of 1, a `modifiedNamesArray` variable which makes use of the `formatArrayStrings` function, and an empty array called `name`. It then utilizes the `map` method to iterate over the `names` array, creating a new array of objects with three properties:
- `originalName`: the name from the `names` array at the current index.
- `modifiedName`: the corresponding modified name from the `modifiedNamesArray`.
- `id`: a unique identifier starting from 1 and incremented for each object.
Finally, it exports the `createUserProfiles` function. 
But the variable modifiedNamesArray doesn't affect the modifiedName field because it requires an array with numbers and another with strings but here has two arrays with strings.
