let row = 6;
let pattern = "";

for (let n = 1; n<=row ; n++){
    for(let num = 1; num<=n; num++){
        pattern +="$";
    }
    pattern +="\n";
}
console.log(pattern)