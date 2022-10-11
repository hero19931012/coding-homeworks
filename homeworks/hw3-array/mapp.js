const arr1 = [2,4,5,6,7] //data
let arr2 = []
function cb1 (num){
     num *2
} //map要執行的function
function map(array, callback){
    for (let key in array){
        arr2[key] = callback(arr1[key])
    }
} // map主程式

map (arr1,cb1); //call map function
console.log(arr2)
