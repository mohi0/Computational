
convolute1D(arr, karr){
  let outputArray = new Array(arr.length + karr.length - 1).fill(0);
  for(let i = 0; i < outputArray.length; i++){
     for (let j = 0; j < karr.length; j++) {
       const seqIndex = i - j;
       if (seqIndex >= 0 && seqIndex < arr.length) {
          outputArray[i] += arr[seqIndex] * karr[j];
       }else {
          outputArray[i] += 0; // Explicit zero-padding
        }
     }
  }
}


convolute2D(arr, karr){
}

convolute3D(arr, karr){
}

