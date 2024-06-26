function fibs(n) {
    let array = [];
    for (let i = 0; i < n; i++){
        if(i <= 1){
            array.push(i);
        } else {
           let sequence = array[i - 2] + array[i - 1];
           array.push(sequence);
        }
    }
    return array; 
}

function fibsRec(n) {
    // BASE 1: If n is 0 or negative numbers, return empty array
    if(n <= 0) {   
        return []; 
    
    // BASE 2: If n is 1, return 0 in an array
    } else if (n === 1) {
        return [0];

    // BASE 3: If n is 2, return 0 and 1 in an array
    } else if (n === 2) {
        return [0, 1];

    // Use the returned array once the length exceeds 2
    } else {
        let array = fibsRec(n-1);
        
        // Calculate fibonacci using length and add to the end
        array.push(array[array.length - 2] + array[array.length - 1]);
        return array; 
    }   
} 