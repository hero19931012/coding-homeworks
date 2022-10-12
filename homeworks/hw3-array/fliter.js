const arr1 = [2 ,5,3,6,7]
let ans =[]
function cb1(num){
    if (num >= 5){
        ans.push(num)
    }
}
function filter1(array,cbfilter){
    for (let key in array){
        cb1(array[key])
        console.log(array[key])
    }
}
filter1(arr1,cb1)

// 請設計一個 function `filter`
// - 接受 2 個參數，一個陣列與一個
// - 回傳一個新的陣列
// - 回傳陣列的每個元素皆符合 callback 裡面條
// - 答案寫在 filter.js