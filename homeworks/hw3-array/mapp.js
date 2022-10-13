const arr1 = [2,4,5,6,7] //data
let arr2 = []
function cb1 (num){
     arr2.push(num *2)
} //map要執行的function
function map(array, callback){
    for (let key in array){
        callback(arr1[key])
    } //let in  array每個元素進去
} // map主程式

map (arr1,cb1); //call map function
console.log(arr2)
