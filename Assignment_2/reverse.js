function revArray(array){
    const revArray=[];

for(let i = array.length - 1; i>=0; i--){
    revArray.push(array[i]);
}
return revArray;
}

const numbers = [10,20,30,40,50,60,70,80,90,100];
const revNumbers = revArray(numbers);
console.log(revNumbers);