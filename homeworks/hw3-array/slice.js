const arr1 = [1,2,4,5,7,9,11]
const start = 0 //陣列第一位為0
const end = arr1.length-1 //最後兩位
const ans =[]


function slice(array, start ,end){
  for (let i = start ; i<=end-1 ; i++){
          ans.push(array[i])
  }
}
slice(arr1,start,end)
console.log(ans)
// console.log(end)