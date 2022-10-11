arr1 = []; //空陣列(x)
for (i = 0 ;i<10 ; i++){
   arr1.push(Math.floor(Math.random()*100))
} //10次 1到100隨機亂數迴圈

function foreach(array,func){
    for(i= 0;i<array.length;i++){
        func(array[i])
    }
}
function func(num) {
    console.log(num);
    console.log(`第${i+1}次`)
   
} // print
// function forEach(array, fuc){
    // array.forEach(element =>fuc(element));
// } //for each函數
foreach(arr1,func);
// 