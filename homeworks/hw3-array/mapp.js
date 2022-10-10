const arr1 = [2,4,5,6,7] //data
let arr2 = [] //新陣列
function cb1 (num){
    return num *3
} //map要執行的function
function map(array, callback){
    return arr2 = array.map(callback)
} // map主程式

map (arr1,cb1); //call map function
console.log(arr2)