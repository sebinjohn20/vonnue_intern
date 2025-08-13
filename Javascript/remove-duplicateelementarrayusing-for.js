let array=[1,2,3,4,4,5,5]
let unique=[]
for(let i=0;i<array.length;i++){
    let dublicate=false;
    for( let j=0; j<unique.length;j++){
        if(array[i]===unique[j]){
            dublicate=true;
            break
        }
    }
    if(!dublicate){
        unique.push(array[i])
    }
}
console.log(unique)