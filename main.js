// Challenge 7:  The longest word 
// Return the longest, having the most character, word of a given string
// ex: "Hello, my name is Chau" ==> "Hello"

function longestWord(strInput) {
    const wordArr = strInput.toLowerCase().match(/[a-z0-9]+/g);
    const sorted = wordArr.sort((a, b) => {
        return b.length - a.length;
    });
    const longestWordArray = sorted.filter((words) => {
        return words.length === sorted[0].length;
    });

    return longestWordArray.join(' ');
}
console.log(longestWord("Hello there, my name is Chau"));

//Challenge 8: Array Chunking
// Split an array into chunked arrays of a specific length.
// ex: [1,2,3,4,5,6,7] = [[1,2,3],[4,5,6],[7]] (length = 3)

// Solution 1
function chunkArray(arr, len) {
    const chunkArr = [];
    let i = 0;
    while(i < arr.length) {
        chunkArr.push(arr.slice(i, i + len));
        i += len;
    }
    return chunkArr;
}
console.log(chunkArray([1,2,3,4,5,6,7],3));

//Challenge 9: Flatten Array 
// Take an array of arrays and flatten to a single array
// ex: [[1,2],[3,4]] = [1,2,3,4]

//Solution 1
function flattenArr(arrs) {
    return arrs.reduce((a, b) => {
        return a.concat(b);
    });
}
console.log(flattenArr([[1,2],[3,4],[7,8,9]]));

//Solution 2
function flattenArr2(arrs) {
    return [].concat.apply([], arrs);
}
console.log(flattenArr2([[1,2],[3,4,5],[6,7]]));

//Solution 3
function flattenArr3(arrs) {
    return [].concat(...arrs);
}
console.log(flattenArr3([[1,2],[3,4,5],[6,7]]));

//Challenge 10: Anagram
// Return true if anagram, false if not
//ex: "elbow" === "below" => true
function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2) ? true : false;
}
//Helper function
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}
console.log(isAnagram("Dormitory", "dirty room###"));

//Challenge 11: Letter changes
// Change every letter of the given string to one that follows and capitalize the vowels
// ex: "hello there" === "Ifmmp Uifsf"
// Note: Z should return to A
function letterChanges(strInput) {
    let newStr = strInput.toLowerCase().replace(/[a-z]/gi, (char) => {
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    newStr = newStr.replace(/a|e|u|i|o/gi, (vowels) => {
        return vowels.toUpperCase();
    });
    return newStr;
}
console.log(letterChanges("Hello TherezZ"));