const arr1 = [2,4,5,6,7] //data
function cb1 (num){
    return num *2
} //map要執行的function
function map(array, callback){
    const arr2 = []
    for (let key of array){
        arr2.push(callback(key))
    } //let of  array每個元素進去
    console.log(arr2)
} // map主程式

map (arr1,cb1); //call map function
