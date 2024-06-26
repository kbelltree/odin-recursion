function mergeSort(originalArray) {
    // BASE: array.length is less than or equal to 1 the array with the element. 
    if (originalArray.length <= 1) {
        return originalArray; 

    // RECURSIVE: Compare the 0 index elements of left array and right array. 
    } else {

        // Divide the array into half left and right.
        let middleIndex = Math.floor(originalArray.length / 2);   
        let leftArray = mergeSort(originalArray.slice(0, middleIndex));
        let rightArray = mergeSort(originalArray.slice(middleIndex));

        // Until the lengths of left or right arrays are empty keep sorting. 
        let sortedArray = [];
        while (leftArray.length > 0 && rightArray.length > 0) {
        
            // IF left's number is smaller than right's number, move the left element to the sort array.
            if (leftArray[0] <= rightArray[0]) {
                sortedArray.push(leftArray.shift());
                
            // IF the opposite case, move the right element to the sort array. 
            } else {
                sortedArray.push(rightArray.shift());  
            } 
        }

    // The remaining number in either left or right should be the highest, so merge it to sortedArray. 
    return sortedArray.concat(leftArray, rightArray);           
    }  
}
