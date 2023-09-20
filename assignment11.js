const hospital=
{
      fullName:"wellbeing hospital",
      patient:
     [
          {id:"123",fullName:"JACK",dateOfBirth:"08/03/1997",symptoms:
                  ["AHA","FIF","WJW","DOD"]
          },

          {id:"456",fullName:"ROSE",dateOfBirth:"08/03/1997",symptoms:
                  ["AHA","FIF","WJW","DOD"]
          },
 
          {id:"789",fullName:"JJERRY",dateOfBirth:"08/03/1997",symptoms:
                  ["AHA","FIF","WJW","DOD"]
          }
      ]      
};

function showMe(someData){
	let str = "<h1>"+hospital.fullName + "</h1>";
	return str;
}

console.log(showMe("someData"));





console.log(hospital);
console.log(hospital.fullName);
console.log(hospital.patient);
console.log(hospital.patient.id);
console.log(hospital.patient.id[0]);
console.log(hospital.patient.id[1]);
console.log(hospital.patient.id[2]);
console.log(hospital.patient.fullName);
console.log(hospital.patient.fullName[0]);
console.log(hospital.patient.fullName[1]);
console.log(hospital.patient.fullName[2]);
console.log(hospital.patient.dateOfBirth);
console.log(hospital.patient.dateOfBirth[0]);
console.log(hospital.patient.dateOfBirth[1]);
console.log(hospital.patient.dateOfBirth[2]);
console.log(hospital.patient.symptoms);
console.log(hospital.patient.symptoms[0]);
console.log(hospital.patient.symptoms[1]);
console.log(hospital.patient.symptoms[2]);
console.log(hospital.patient.symptoms[0][0]);
console.log(hospital.patient.symptoms[0][1]);
console.log(hospital.patient.symptoms[0][2]);
console.log(hospital.patient.symptoms[1][0]);
console.log(hospital.patient.symptoms[1][1]);
console.log(hospital.patient.symptoms[1][2]);
console.log(hospital.patient.symptoms[2][0]);
console.log(hospital.patient.symptoms[2][1]);
console.log(hospital.patient.symptoms[2][2]);



for(let i=0;i<hospital.length;i++){
        console.log(i);
        console.log(hospital.patient.fullName[i]);
        console.log(hospital.patient.dateOfBirth[i]);
        console.log(hospital.patient.symptoms[i]);
        console.log(hospital.patient.symptoms[i][i]);
  }
  


function sum (a, b){
	let result = a + b;
	return result;
}

let sumReturn = sum(10,50);
console.log (sumReturn);

let anotherSum = sum(100,100);
console.log (anotherSum);


let fullNamedNumber = Math.fullName(40);
let randomNumber = Math.random();

//console.log(Math.fullName(randomNumber*5));

console.log(hospital[Math.fullName(randomNumber*5)]);
