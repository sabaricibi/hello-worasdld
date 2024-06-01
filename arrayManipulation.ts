let arr: number[] = [31,2,3,4,15];
let oArr: number[] = [];

//reverse Array
for(let i=arr.length-1;i > -1;i--){
       oArr.push(arr[i]);
       }
    
      console.log(arr);
     console.log(oArr);

//Sum of Array
let sum: number = 0;
for(let i of  arr){
    sum = sum +  arr[i];
}
 console.log("sum: " +sum);


//find largest number
let largest: number = arr[0];

for(let i of arr){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

console.log("largest:" + largest);
  
