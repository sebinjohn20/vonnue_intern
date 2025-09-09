function task1(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("Task one completed")
            resolve();
        },1000)
    })

}
function task2(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Task Two completed")
            resolve();
        })
    },3000)
}
// function task3(){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             console.log("Task Three completed")
//             resolve();
//         })
//     },1200);
// }


function task3(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task Three failed")
            reject("error in Task 3")
        },1200)
    })
}
function task4(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Task Three completed")
            resolve();
        })
    },600);
}
function task5(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("Task five completed");
            resolve();
        },700)
    })
}



// Chain Promises


// task1()
// .then(()=> task2())
// .then(()=> task3())
// .then(()=>task4())
// .then(()=> task5())
// .then(()=>{
//     console.log("All tasks done")
// })




// async function runTasks() {
//     await task1();
//     await task2();
//     await task3();
//     await task4();
//     await task5();
//     console.log("All tasks done");
// }

// runTasks();



async function runTasks() {
    try{
        await task1();
        await task2();
        await task3();
        await task4();
        await task5();
        console.log("All tasks done")
    }catch (err){
        console.error("Caught error:",err)
    }
    
}
runTasks()