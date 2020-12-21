let studentsByudget = [];
let studentsKontrakt = [];

class Student{
    constructor(enrollee){
        this.id = Student.id++;
        Object.assign(this, enrollee);

        if(this.ratingPoint < 800){
            this.isSelfPayment = true;
            }
            
       this.isSelfPayment = false;
       studentsByudget.push(this);
       
       studentsByudget.sort(function(a, b){          
           if (a.ratingPoint === b.ratingPoint){
               return a.schoolPoint - b.schoolPoint;
            }
            return a.ratingPoint > b.ratingPoint ? 1 : -1;
             });
        
             if (studentsByudget.length > 5){
                 studentsByudget[0].isSelfPayment = true;
                 studentsKontrakt.push(studentsByudget[0]);
                 studentsByudget.splice(0,1);
             }         
        } 

         static id = 1

         static listOfStudentsByudget(){
         return(studentsByudget)
         }
         static listOfStudentsKontrakt(){
         return(studentsKontrakt)
         }

    }
    
let offList1 = new Student({name: 'Анна', surname: 'Кугир', ratingPoint: 2000, schoolPoint: 200, });
let offList2 = new Student({name: 'Татьяна', surname: 'Капустник', ratingPoint: 2000, schoolPoint: 130});
let offList3 = new Student({name: 'Иван', surname: 'Петров', ratingPoint: 1000, schoolPoint: 160});
let offList4 = new Student({name: 'Петр', surname: 'Веник', ratingPoint: 800, schoolPoint: 150});
let offList5 = new Student({name: 'Игорь', surname: 'Смирнов', ratingPoint: 600, schoolPoint: 180});
let offList6 = new Student({name: 'Анна', surname: 'Кугир', ratingPoint: 2000, schoolPoint: 100, });
let offList7 = new Student({name: 'Татьяна', surname: 'Капник', ratingPoint: 2000, schoolPoint: 96});
let offList11 = new Student({name: 'Татьяна', surname: 'Капустник', ratingPoint: 2000, schoolPoint: 196});
let offList8 = new Student({name: 'Иван', surname: 'Иванов', ratingPoint: 500, schoolPoint: 145});
let offList9 = new Student({name: 'Петр', surname: 'Вестник', ratingPoint: 3000, schoolPoint: 190});
let offList10 = new Student({name: 'Игорь', surname: 'Смирновский', ratingPoint: 2500, schoolPoint: 160});

console.log(Student.listOfStudentsByudget())
console.log(Student.listOfStudentsKontrakt())


//---------------------Task 2---------------------------------

class CustomString{
    constructor(){} 

    reverse (inString){
        return inString.split("").reverse().join("");
        
    }

    ucFirst (inString){       
        return  inString[0].toUpperCase()+inString.slice(1).toLowerCase();
    }
    
    ucWords (inString){    
    return inString.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    }
    
    }

const myString = new CustomString();
console.log(myString.reverse('qwerty')); //выведет 'ytrewq'
console.log(myString.ucFirst('qwerty')); //выведет 'Qwerty'
console.log(myString.ucWords('qwerty qwerty qwerty')); //выведет 'Qwerty Qwerty Qwerty
    
