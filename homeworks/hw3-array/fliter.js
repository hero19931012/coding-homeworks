const arr1 = [2 ,5,3,6,7]
let ans =[]
function cb1(num){
    return num >= 5
}
function filter1(array,cbfilter){
    ans = array.filter(cbfilter)
    return ans 
}
filter1(arr1,cb1)
console.log(ans)