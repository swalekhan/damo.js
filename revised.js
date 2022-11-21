// console.log("hello");
// let arr = [1,2,3,4,5]
// for(let i = 0; i<5;i++){
//    let s = "";
//    for(let j = i; j<5; j++){
//        s+=" "
//     }
//     for(let j = i; j>=0;j--){
//         s+="*"
//     }
//     for(let j = i; j>0;j--){
//         s+="*"
//     }
//     for(let j = i; j<5; j++){
//         s+=" "
//      }
// console.log(s)
// }

// find ocurence...?
// let arr = [1,2,3,4,5,6,2,3];
// let map = new Map();
// for(let i =0; i<arr.length; i++){
//     if(map.has(arr[i])){
//         console.log(arr[i])
//     }else{
//         map.set(arr[i],arr[i]);
//     }
// }

let arr = [1,1,2,3];
let k = 56;
let a = [];
let j = 0
let c = 0
for(let i = arr.length-1; i>=0; i--){
     while(arr.length ){
        let a = (arr[i]+56);
        let t = (a+c)%10;
        c = Math.floor(a/10)
        console.log(t)
        // k = Math.floor(k/10)
        

    }
}
console.log(a)
console.log(1123+56)