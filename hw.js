// bai 1
// function kiem_tra_snt(n)
// {
//     let flag = true;
//     if (n < 2){
//         flag = false;
//     }
//     else{
//         // lặp từ 2 tới n-1
//         for (var i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if (flag == true){
//         document.write(n + " là số nguyên tố <br/>");
//     }
//     else{
//         document.write(n + " không phải là số nguyên tố <br/>");
//     }
// }
// bai 2
// function findLongestWord (str) {
//     // let words =["Black", "Pink", "Green", "Blue", "Yellow"]
//     let words = str.split("");
//     let maxLength = 0;
//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       }
//     }
//     return maxLength;
//   }
//   findLongestWord("Black", "Pink", "Green", "Blue", "Yellow");
// bai 3
// function tong_cac_so_chan (sum){
// let inputNum = [1,2,2,3,4,5,6,6,7]
// let sum = 0
// for (let i = 0; i < inputNum.length; i++) {
//     if(inputNum(i)%2==0){
//         sum+=inputNum(i);
//         break;
//     }
    
// }
// }
//console.log(sum)
// bai 4
// function arr(n){
// let arr = [3,5,7,6,4,8,20,55];
// arr.sort((a, b) => b - a);

// console.log(arr);

// console.log(arr[1])}
// bai 5
// function average (p){
// let arr = +prompt["nhap so de tinh trung binh cong"]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     sum+=arr(i)

// }
// const averg = sum / arr.length
// console.log(sum)

//     console.log(averg)}