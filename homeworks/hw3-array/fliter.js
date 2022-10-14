const arr1 = [2 ,5,3,6,7]

function cb1(num){
    return num >= 5
}
function filter1(array,cbfilter){
    const ans =[]
    for (let key in array){
        if (cbfilter(array[key])){
            ans.push(array[key])
        }
    }
    return ans
}
console.log(filter1(arr1,cb1))
// 請設計一個 function `filter`
// - 接受 2 個參數，一個陣列與一個
// - 回傳一個新的陣列
// - 回傳陣列的每個元素皆符合 callback 裡面條
// - 答案寫在 filter.js