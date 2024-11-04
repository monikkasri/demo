array=[1,2,3,,4,5,6,7,8,9,10];
let oddCount= 0;
let evenSum= 0;
for (num of array) {
    if (num % 2 ==0) {
        evenSum += num;
    } else {
        oddCount++;
    }
 }
console.log("Count of odd numbers:",oddCount);
console.log("Sum of even numbers:",evenSum);
    

