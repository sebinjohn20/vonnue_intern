// function task1(callback){
//     setTimeout(()=>{
//         console.log("Task one completed")
//         callback(null);
//     },3000)
// }
// function task2(callback){
//     setTimeout(() => {
//         console.log("Task Two completed")
//         callback(null)
//     }, 1000);

// }
// function task3(callback){
//     setTimeout(()=>{
//         console.log("Task Three completed")
//     })
//     callback(null);
// }
// function task4(callback){
//     setTimeout(() => {
//         console.log("Task four completed")
//     }, 1200);
//     callback(null)
// }
// task1((err)=>{
//     if(err)return console.error(err);
//     task2((err)=>{
//         if(err) return console.error(err)
//     task3((err)=>{
//         if(err) return console.error(err)
//     task4((err)=>{
//     if(err)return console.error(err)
//     console.log("All tasks done successfully");
    
    
//     })

// })
 
 
 
//         })

// })







function task1()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Task one completed");
            resolve();
        }, 1000);
    })
}


function task2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("task Two endcountered an error")
            reject("Error in Task Two")
        }, 3000);
    })
}

function task3(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Task Three completed")
            resolve()
        }, 1200);
    })
}
// task1()
// .then(task2)
// .then(task3)
// .then(()=>{
//     console.log("All tasks done sucessfully");
    
// })
// .catch((err)=>{
//     console.error("Caught Error:",err)
// })
async function runTasks() {
    try{
        await task2()
                await task3()
                        await task4()


    }
    catch(err){
        console.error("Caught Error",err)
    }
    
}
runTasks()