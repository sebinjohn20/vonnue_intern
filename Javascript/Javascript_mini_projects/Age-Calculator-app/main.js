let userInput=document.getElementById('date')
// Get today's date and set it as the maximum allowed date in the input
userInput.max = new Date()               // Create a new Date object (current date & time)
  .toISOString()                         // Convert it to ISO format: "YYYY-MM-DDTHH:mm:ss.sssZ"
  .split("T")[0];                        // Split at "T" and take the first part → "YYYY-MM-DD"
let result=document.getElementById("result")
  function calculateAge(){
    let birthDate= new Date(userInput.value);
    
    let today=new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
   
if (days < 0) {
    months--;
    // borrow days from previous month
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Adjust months
  if (months < 0) {
    years--;
    months += 12;
  }
   result.innerHTML=` You are <span> ${years} </span> years, <span> ${months} </span> months and <span> ${days} </span> days old`;

  }
 
