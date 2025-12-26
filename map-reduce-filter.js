


let classObj = {
  "name" : "class A",
  "teacherName" : "Mary",
  "students" : [
    {
      "name" : "Ravi",
      "id" : "101",
      "marks" : [
        {"subject" : "English", "mark" : 25},
        {"subject" : "Maths", "mark" : 48},
        {"subject" : "Physics", "mark" : 40},
        {"subject" : "Chemistry", "mark" : 30},
        {"subject" : "Computer", "mark" : 20}
      ]
    },
    {
      "name" : "Aju",
      "id" : "102",
      "marks" : [
        {"subject" : "English", "mark" : 35},
        {"subject" : "Maths", "mark" : 38},
        {"subject" : "Physics", "mark" : 33},
        {"subject" : "Chemistry", "mark" : 34},
        {"subject" : "Computer", "mark" : 30}
      ]
    },
    {
      "name" : "Binu",
      "id" : "104",
      "marks" : [
        {"subject" : "English", "mark" : 49},
        {"subject" : "Maths", "mark" : 49},
        {"subject" : "Physics", "mark" : 47},
        {"subject" : "Chemistry", "mark" : 46},
        {"subject" : "Computer", "mark" : 50}
      ]
    }
  ]
}


// Copy of JS Problems

// 1 Write a function to print the name of the class: "class A".

// const oclass=[classObj]
// oclass.map(n=>{
//     console.log(n.name)
// })

// 2 Write a function to print the teacher’s name: "Mary".
// oclass.map(n=>{
//     console.log(n.teacherName)
// })

// 3 Write a function to print the names of all the students in the class.

//  classObj.students.map(s => console.log(s.name));

// 4 Write a function to print the IDs of all the students in the class.


// classObj.students.map(s=> console.log(s.id))



// 5 Write a function to print the subject names for a specific student.



//   const subjects= classObj.students.find(s=>s.name==='Binu')
//  subjects.marks.map(s=>console.log(s.subject))


// 6  Write a function to print the marks of a specific student in all subjects.


// const subjects= classObj.students.find(s=>s.name==='Binu')
// .marks.map(s=>
//     console.log(`${s.subject} :${s.mark}`

//     ))

// 7 Write a function to calculate and print the average marks for a specific student.



// const student = classObj.students.find(s => s.name === 'Binu');

// const totalMarks = student.marks
//   .map(m => m.mark)     
//   .reduce((sum, mark) => sum + mark, 0); 
//   const average=totalMarks/student.marks.length
//   console.log(average)



//8  Write a function to calculate and print the total marks for a specific student.

// const student = classObj.students.find(s => s.name === 'Binu');
// const totalMarks = student.marks
//     .reduce((sum, m) => sum + m.mark, 0);

// console.log(`Total mark ${totalMarks}`);



//9 Write a function to calculate and print the average marks for all students in a specific subject.





// function averageMarksInSubject(subjectName) {
//  let total =0
//  let count=0
//  classObj.students.forEach(student=>{
//   const subjectMark=student.marks.find(m=> m.subject=== subjectName)
//   if(subjectMark){
//     total+=subjectMark.mark
//     count++
//   }
//  })
//  if(count>0){
// const average=total/count
// console.log(`Average marks in ${subjectName }:${average}`)
//  }
//  else{
//   console.log(`${subjectName} is Not Found`)
//  }
// }

// // // Example usage:
// averageMarksInSubject('Maths');
// averageMarksInSubject('English');
// averageMarksInSubject('Physics');
// averageMarksInSubject('hysics');



// 10 Write a function to calculate and print the total marks for all students in a specific subject.



// function TotalMarksStudent(subjectName){
//   let total=0
//   classObj.students.forEach(student=>{
//     const subjectMark=student.marks.find(m=>m.subject===subjectName)
//     if(subjectMark){
//       total+=subjectMark.mark
//     }
//   })
//   console.log(`Total mark of ${subjectName} is: ${total}`)

// }
// TotalMarksStudent('Maths')

// 11 Write a function to find and print the student with the highest marks in a specific subject.


// function HighestMark(subjectName){
//   let topStudent=null
//   let highestMark=0
//   classObj.students.forEach(student=>{
//     const subjectMark=student.marks.find(m=> m.subject===subjectName)
//     if(subjectMark.mark>highestMark){
//       highestMark=subjectMark.mark
//       topStudent=student
//     }
//   })
//   if(topStudent){
//     console.log(`Topper in ${subjectName}: ${topStudent.name} with ${highestMark} marks`)
//   }
//   else{
//     console.log(`${subjectName} is not found`)
    
//   }
  
// }


// HighestMark('Maths')
// HighestMark('English')


// 12 Write a function to find and print the student with the lowest marks in a specific subject.

// function LowestMark(subjectName){
//   let topStudent=null
//   let lowestMark=Infinity
//   classObj.students.forEach(student=>{
//     const studentMark=student.marks.find(m=>m.subject==subjectName)
//     if(studentMark.mark<lowestMark)
//       lowestMark=studentMark.mark
//     topStudent =student

//   })
//   if(topStudent){
//      console.log(`lowest mark in ${subjectName}: ${topStudent.name} with ${lowestMark} marks`)



//   }
//   else {
//     console.log(`${subjectName} is not found`)
//   }
// }
// LowestMark('Maths')


// 13 Write a function to find and print the student with the highest total marks.


// function HighestTotalMark(){
//   let highest=0
//   let topStudent=null
//   classObj.students.forEach(student=>{
//     const totalMark=student.marks.reduce((sum,m)=>sum+m.mark,0)
//       if(totalMark>highest){
//     highest=totalMark
//     topStudent=student

//   }
//   })
//   if(topStudent){
//     console.log(`Student with highest total marks: ${topStudent.name} with ${highest} marks `)
//   }
//   else{
//     console.log(`student is Not Found`)
//   }


// }
// HighestTotalMark()



// 14 Write a function to find and print the student with the lowest total marks.

// function LowestMark(){
//   let lowest=Infinity
//   let topStudent=null
//   classObj.students.forEach(student=>{
//     const totalMark=student.marks.reduce((sum,m)=>sum+m.mark,0)
   
//     if(totalMark<lowest){
//       lowest=totalMark
//       topStudent=student
//     }
    
   
//   })
//    if(topStudent){
//       console.log(`Student have lowest total mark: ${topStudent.name} with ${lowest}`)
//     }
//     else{
//       console.log('Student is not found')
//     }
// }
// LowestMark()



// 15  Write a function to find and print the subject with the highest average marks.





// function subjectWithHighestAverage() {

//   const subjectTotals = {}; 
//   const subjectCounts = {}; 
//   classObj.students.forEach(student => {
//     student.marks.forEach(({subject,mark})=>{
//       if(!subjectTotals[subject]){
//         subjectTotals[subject]=0
//         subjectCounts[subject]=0
//       }
//       subjectTotals[subject]+=mark
//       subjectCounts[subject]+=1
//     })
    
//   });
//   let topSubject=null
//   let highestAverage=-1
//   for(const subject in subjectTotals){
//     const avg=subjectTotals[subject]/ subjectCounts[subject] 
   

//     if(avg > highestAverage){
//       highestAverage= avg
//       topSubject=subject
//     }
//   }
//     console.log(
//     `Subject with highest average marks: ${topSubject} (${highestAverage.toFixed(2)})`
//     )
// }
// subjectWithHighestAverage();







// 16 Write a function to find and print the subject with the lowest average marks.



// function subjectWithLowestAverage(){
//   const subjectTotal={}
//   const subjectCounts={}
//   classObj.students.forEach(student=>{
//     student.marks.forEach(({subject,mark})=>{
//       if(!subjectTotal[subject]){
//         subjectTotal[subject]=0
//         subjectCounts[subject]=0
//       }
//       subjectTotal[subject]+=mark
//       subjectCounts[subject]+=1
//     })
//   })
//   let lowestavg=Infinity
//   let lowsubject=-1
//   for(const subject in subjectTotal){
//     const avg=subjectTotal[subject]/subjectCounts[subject]
//     if(avg<lowestavg){
//       lowestavg=avg
//       lowsubject=subject
//       }
//   }
//   console.log(`Subject with lowest average marks: ${lowsubject} :${lowestavg}`)
// }

// subjectWithLowestAverage()


//  17 Write a function to calculate and print the overall average marks for the class.

// function overallClassAverage(classObj) {

//   const allmarks=classObj.students.flatMap(student=>
//     student.marks.map(m=>m.mark)
//  );
//  const totalMarks=allmarks.reduce((sum,mark)=>sum+mark,0)
// const average=totalMarks/allmarks.length;
//  console.log(`Overall class average marks: ${average.toFixed(2)}`)
// }


// // Run the function
// overallClassAverage(classObj);


//  18  Write a function to calculate and print the overall total marks for the class.

  // function overallClassTotal(classObj)
  // {
  //   const allmarks=classObj.students.flatMap(student=>
  //     student.marks.map(m=>m.mark)
  //   )
  //   const totalMark=allmarks.reduce((sum,mark)=>sum+mark,0)
  //   console.log(`Overall total mark of student is ${totalMark}`)
  // }
  // overallClassTotal(classObj)

// 19  Write a function to calculate and print the average marks for each subject.


// function averageMarksInSubject(){
//   const subjectTotal={}
//   const subjectCounts={}
//   classObj.students.forEach(student=>{
//     student.marks.forEach(({subject,mark})=>{
//       if(!subjectTotal[subject]){
//         subjectTotal[subject]=0
//         subjectCounts[subject]=0
//       }
//       subjectTotal[subject]+=mark
//       subjectCounts[subject]+=1
//     })

//   })
//   for(const subject in subjectTotal){
//     const avg=subjectTotal[subject]/subjectCounts[subject]
//     console.log(`${subject}: ${avg.toFixed(2)}`);
//   }
// }
// averageMarksInSubject()

// 20  Write a function to calculate and print the total marks for each subject.


// function TotalMarkEachSubject(){
//   const subjectTotal={}
//   const subjectCounts={}
//   classObj.students.forEach(student=>{
//     student.marks.forEach(({subject,mark})=>{
//       if(!subjectTotal[subject]){
//         subjectTotal[subject]=0
//         subjectCounts[subject]=0
//       }
//       subjectTotal[subject]+=mark
//       subjectCounts[subject]+=1
//     })

//   })
//   for(const subject in subjectTotal){
//     console.log(`Total mark of ${subject} is :${subjectTotal[subject]}`)
//   }
// }

// TotalMarkEachSubject()
  
 
// 21 write a function to find and print the subject with the highest total marks.

// function HighestTotalMark(){
//   const subjectTotals={}
//   const subjectCounts={}
//   classObj.students.forEach(student=>{
//     student.marks.forEach(({subject,mark})=>{
//       if(!subjectTotals[subject]){
//         subjectTotals[subject]=0
//         subjectCounts[subject]=0
//       }
//       subjectTotals[subject]+=mark
//       subjectCounts[subject]+=1
//     })
//   })
//   let highestMark=-Infinity
//   let topmark=-1
//   for(const subject in subjectTotals){
//     if(subjectTotals[subject]>highestMark){
//       highestMark=subjectTotals[subject]
//       topmark=subject
//     }
//   }
//   console.log(`Highest avearge mark in ${topmark} is ${highestMark}`)
// }

// HighestTotalMark()
// 22  Write a function to find and print the subject with the lowest total marks.


// function LowestTotalMark(){
//   const subjectTotals={}
//   const subjectCounts={}
//   classObj.students.forEach(student=>{
//     student.marks.forEach(({subject,mark})=>{
//       if(!subjectTotals[subject]){
//         subjectTotals[subject]=0
//         subjectCounts[subject]=0
//       }
//       subjectTotals[subject]+=mark
//       subjectCounts[subject]+=1
//     })
//   })
//   let LowestMark=Infinity
//   let topmark=-1
//   for(const subject in subjectTotals){
//     if(subjectTotals[subject]<LowestMark){
//       LowestMark=subjectTotals[subject]
//       topmark=subject
//     }
//   }
//   console.log(`Highest avearge mark in ${topmark} is ${LowestMark}`)
// }

// LowestTotalMark()






// 23 Write a function to find and print the student(s) with the highest average marks.



// function HighestTotalMark(){
//   let highest=0
//   let topStudent=null
//   classObj.students.forEach(student=>{
//  const totalMark=   student.marks.reduce((sum,m)=>sum+m.mark,0)
//  const avg=totalMark/student.marks.length
//  if(avg>highest){
//   highest=avg
//   topStudent=student
//  }
//   })
//   console.log(` Highest average mark of student is ${topStudent.name} is ${highest}`)
// }
// HighestTotalMark()


//24  Write a function to find and print the student(s) with the lowest average marks.


// function LowestAverageMarks(){
//   let lowest=Infinity
//   let topStudent=null
//   classObj.students.forEach(student=>{
//     const totalMark=student.marks.reduce((sum,m)=>sum+m.mark,0)
//  const avg=totalMark/student.marks.length
//  if(avg<lowest){
//   lowest=avg
//   topStudent=student
//  }

//   })
// console.log(` Lowest average mark of student is ${topStudent.name} is ${lowest}`)
// }

// LowestAverageMarks()

//25  Write a function to find and print the student(s) with the highest total marks.

// function HighestTotalMark(){
//   let highest=-Infinity
//   let topStudent=0
//   classObj.students.forEach(student=>{
//     const totalmark=student.marks.reduce((sum,m)=>sum+m.mark,0)
//     if(totalmark>highest)
//     {
//       highest=totalmark
//       topStudent=student
//     }
//   })
//   console.log(`Highest total mark ${topStudent.name} is ${highest}`)
// }

// HighestTotalMark()

//26 Write a function to find and print the student(s) with the lowest total marks.

// function Lowest_Total_Mark() {
//   let lowest = Infinity;
//   let lowStudent = null;

//   classObj.students.map(student => {
//     const totalMark = student.marks.reduce((sum, m) => sum + m.mark, 0);
//     if (totalMark < lowest) {
//       lowest = totalMark;
//       lowStudent = student;
//     }
//   });

//   console.log(`Lowest total mark: ${lowStudent.name} with ${lowest}`);
// }
// Lowest_Total_Mark()

// 28 Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.


// function CountStudentsAboveMark(subject, mark) {
//  const aboveMark=classObj.students.filter(student=>{
//   const subjectMark=student.marks.find(m=>m.subject===subject)
//   return subjectMark && subjectMark.mark>mark
 

// })
// console.log(`Number of students who scored above ${mark} in ${subject}: ${aboveMark.length}`);
//  console.log("Students:", aboveMark.map(s => s.name).join(","))
// }
// CountStudentsAboveMark("Maths", 40);



//29 Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.

// function CountStudentsBelowMark(subject,mark){
//   const belowMark=classObj.students.filter(student=>{
//     const subjectMark=student.marks.find(m=>m.subject===subject)
//       return subjectMark && subjectMark.mark<mark
    
//   })
//   console.log(`Number of students who scored above ${mark} in ${subject}: ${belowMark.length}`);
//   console.log("Students:", belowMark.map(m=>m.name).join(","))



// }

// CountStudentsBelowMark('Maths',40)


//30 Write a function to calculate and print the number of students who scored above a certain mark in all subjects.

// function CountStudentAboveAllSubjets(mark){
//   const aboveAll=classObj.students.filter(student=>
//     student.marks.every(m=>m.mark>mark)
//   )
//   console.log(`Number of students who scored above ${mark} in all subjects: ${aboveAll.length}`);
//   console.log('Students:',aboveAll.map(s=>s.name).join(" ,"))
// }
// CountStudentAboveAllSubjets(40);


//31  Write a function to calculate and print the number of students who scored below a certain mark in all subjects.

// function CountStudentBelowAllSubjets(mark){
//   const bellowAll=classObj.students.filter(student=> student.marks.every(m=>m.mark<mark))
//    console.log(`Number of students who scored below ${mark} in all subjects: ${bellowAll.length}`);
//      console.log('Students:',bellowAll.map(s=>s.name).join(" ,"))

// }
// CountStudentBelowAllSubjets(30)


//32 Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.

// function PercentageStudentsAboveMark(subject,mark)
// {
//   const totalStudent=classObj.students.length
//   const aboveCount=classObj.students.filter(student=>{
//     const subjectMark=student.marks.find(m=>m.subject===subject)
//     return subjectMark && subjectMark.mark>mark

//   }).length
//   console.log(aboveCount)
//   const percentage=(aboveCount/ totalStudent)*100
//   console.log(`Percentage of students who scored above ${mark} in ${subject}: ${percentage.toFixed(2)}%`);
// }
// PercentageStudentsAboveMark("Maths", 30);

// 33 Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.

// function PercentageStudentsBelowMark(subject,mark){
//   const totalStudent=classObj.students.length
//   const belowMark=classObj.students.filter(student=>{
//    const subjectMark= student.marks.find(m=>m.subject===subject)
//     return subjectMark && subjectMark.mark<mark
//   }).length
//   const percentage=(belowMark/totalStudent)*100
//    console.log(`Percentage of students who scored above ${mark} in ${subject}: ${percentage.toFixed(2)}%`);
// }
// PercentageStudentsBelowMark('Computer', 30)


//  35 Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.

// function PercentageStudentsAboveAllSubjects(mark) {
//   const totalStudent=classObj.students.length
//   const aboveCount=classObj.students.filter(student=>
//     student.marks.every(m=>m.mark>mark)
    
//   ).length
//   const percentage=(aboveCount/totalStudent)*100
//     console.log(`Percentage of students who scored above ${mark} in all subjects: ${percentage.toFixed(2)}%`);
// }

// PercentageStudentsAboveAllSubjects(10)

// 36 Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.

function PercentageStudentBelowAllSubject(mark){
  const totalStudent=classObj.students.length
  const belowCount=classObj.students.filter(student=>
    student.marks.every(m=>m.mark<mark)
  ).length
  const percentage=(belowCount/totalStudent)*100
   console.log(`Percentage of students who scored bellow ${mark} in all subjects: ${percentage.toFixed(2)}%`);
}
PercentageStudentBelowAllSubject(40)


