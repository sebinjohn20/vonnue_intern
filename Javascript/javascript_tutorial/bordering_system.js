function boardingSystem(commands){
    let queue=[];
    let result=[];
for(let command of commands){
    let section=command.trim().split(" ");
    switch(section[0]){
        case "ADD_NORMAL":
        if(section.length === 2){
            queue.push(section[1])

        }
        else{
            result.push("Invalid command");
        }
        break;
        case "ADD_PRIORITY":
            if (section.length===2){
                queue.unshift(section[1])
            }
            else{
                result.push("invalid command")
            }
            break;
        case "BOARD":
            if(queue.length >0){
                result.push(queue.shift());
            }
            else{
                result.push("No passengers in queue")
            }
            break;
        default:
            result.push("Invalid command")
        
}
}
return result;
}
let commands = [
    "ADD_NORMAL Alice",
    "ADD_NORMAL Bob",
    "ADD_PRIORITY Carol",
    "BOARD",
    "BOARD",
    "ADD_NORMAL Dave",
    "BOARD",
    "BOARD"

];
console.log(boardingSystem(commands));
