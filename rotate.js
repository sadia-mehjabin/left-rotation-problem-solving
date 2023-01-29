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