const arrayAnalysis = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let avg = 0;
    let length = arr.length;
    for(let i=0; i<length; i++){
        if(typeof arr[i] !== 'number') return "Error: not a number";
        if(min>arr[i]) min = arr[i];
        if(max < arr[i]) max = arr[i];
        avg += arr[i];
    }
    avg = avg/length;
    const a = [min,max,length,avg];
    return a;
}

module.exports = arrayAnalysis
