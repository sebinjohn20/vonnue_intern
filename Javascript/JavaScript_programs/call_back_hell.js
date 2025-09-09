function task1(callback){
    setTimeout(() => {
        console.log("Task One completed");
        callback();
    },1000);
}
function task2 (callback){
    setTimeout(()=>{
        console.log("Task two completed");
        callback();
    },3000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task Three completed");
        callback()
    },1200)
}
function task4(callback){
    setTimeout(() => {
        console.log("Task Four completed")
        callback();
    },600)
}
function task5(callback){
    setTimeout(()=> {
        console.log("Task Five completed")
        callback();

    },700)
}

// Nested callbacks → callback hell



task1(()=> {
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log("All task done")
                })
            })
        })
    })
})