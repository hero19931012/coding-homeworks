arr1 = []; //空陣列
function push1(x){
    return arr1.push(x)
}  //Push進arr1
for (i = 0 ;i<10 ; i++){
   push1(Math.floor(Math.random()*100))
} //10次 1到100隨機亂數迴圈
// console.log(arr1)





var n = 0; //計次
function run1(num) {
    console.log(num);
    n ++ ; 
    console.log(`第${n}次`)
} // print
function forEach(array, fuc){
    array.forEach(element =>fuc(element));
} //for each函數
forEach(arr1,run1);
// 