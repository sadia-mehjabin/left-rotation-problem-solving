// let arr = [3, 4, 5, 6, 7, 1, 2];
// const input = 2;
// let temporary = [];
// let num = 0 ;
// for(let i = 0; i < arr.length; i++){
//     // 
//     if(i >= input){
//         temporary.push(arr[i])  
//     }  
// }
// for(let i = 0; i < arr.length; i++){
//     if(i < input){
//         temporary.push(arr[i])  
//     }  
// }
// arr = [...temporary]
// console.log(arr)

let temporary = [];
function rotateLeft(array, number){
    for(let i = 0; i < array.length; i++){
            if(i >= number){
                temporary.push(array[i])  
            }  
        }
        for(let i = 0; i < array.length; i++){
            if(i < number){
                temporary.push(array[i])  
            }  
        }
        array = [...temporary];
        console.log(array)
}
rotateLeft([1, 2, 3, 4, 5], 4)