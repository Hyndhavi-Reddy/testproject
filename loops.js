//for in
console.log("FOR IN");
const a = [1,2,3,4,5,6,7];
for(i in a){
    console.log(a[i])
}
console.log("FOR EACH");
//for each
a.forEach(function (number) {
    console.log(number); 
  });
  
  console.log("FOR OF");
  for(const i of a){
    console.log(i);
  }