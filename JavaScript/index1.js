/*
var nextLine =' ';
for( let i = 1; i <= 10; i++){
    if( i % 2 == 0){
        nextLine += '/n';
        continue;    
    }
    for( let j = 1; j <= i; j++){
        console.log(j);
    }
    nextLine += "/n";
}
*/

let n = 5
let right = " "

for (let i = 1; i <= n; i++){
  // console.log(i)
  // i + 1,2,3,4,5
  for (let j = 1; j <= i; j++){
     right += "*"
    // right = *
  }
   right += "\n"
   // * += 5
}

console.log(right) 