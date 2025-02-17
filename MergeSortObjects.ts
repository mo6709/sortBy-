type Person = {
    name: string;
    age: number;
}

//sort array of ppl with the merge sort stratedy to get O(n log n) time complexity
const mergeSortObject = (arr: Person[], key: keyof Person): Person[] => {
    if (arr.length <= 1) return arr;

    //split the array to two
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    //the recursive call to mergeSortObject will make sure 
    //all arrays will be sorted when they are compared by the mergeObject;
    return mergeObject(
        mergeSortObject(left, key),
        mergeSortObject(right, key),
        key
    );
};

const mergeObject = (left: Person[], right: Person[], key: keyof Person): Person[] => {
    let result: Person[] = [];
    let leftIndex = left.length;
    let rightIndex = right.length;

    //compared the objects by their keys
    //push onto result an object based on the key comparison 
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex][key] < right[rightIndex][key]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    //return the sorted array and append the rest of elements from the arrays (with the indices)
    //which did not got push into result.
    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
};

//test
const ppl: Person[] = [
    { name: 'Moshe', age: 30 },
    { name: 'Yossi', age: 15 },
    { name: 'Yakov', age: 66 },
];

console.log(mergeSortObject(ppl, 'age'));
