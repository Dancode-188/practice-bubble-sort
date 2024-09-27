
function bubbleSort(arr) {

    // Iterate through the array

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        // console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
    let hasSwap = true;
    while(hasSwap){
        hasSwap = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                hasSwap = true;
                console.log(arr.join(","));
            }
        }
    }
    return arr;

}

module.exports = bubbleSort;