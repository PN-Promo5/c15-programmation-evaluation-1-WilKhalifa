/*-------------EXERCICE 1------------*/

let container = document.createElement("div");
let form = document.createElement("form");
let labelFirstName = document.createElement("label");
let textInputFirstName = document.createElement("input");
let labelName = document.createElement("label");
let textInputName = document.createElement("input");
let btnOK = docuement.createElement("button");
let message = document.createElement("p");

document.body.appendChild(container);
container.appendChild(form);
container.appendChild(message);
form.appendChild(labelFirstName);
form.appendChild(textInputFirstName);
form.appendChild(labelName);
form.appendChild(textInputName);
form.appendChild(btnOK);

labelFirstName.innerHTML = "Quel est votre prénom ?";
labelName.innerHTML = "Quel est votre nom ?";
textInputFirstName.setAttribute("type", "text");
textInputName.setAttribute("type", "text");
btnOK.value = "OK";

function letStart () {
  container.style.display = "inline";
  message.style.display = "none";
}



btnOK.addEventListener("click", function welcomeMessage(){
  if (textInputFirstName.setAttribute(disabled, "") || textInputName.setAttribute(disabled, "")) {
    message.style.display = "inline"
    message.innerHTML = "Please fill in the field above",
  } else {
    form.style.display = "none";
    message = "Hello" + textInputFirstName + textInputName "! good to see you."
  }
}, false)



/*-------------EXERCICE 2------------*/

let container = document.createElement("div");
let form = document.createElement("form");
let labelGrossMonthlySalary = document.createElement("label");
let numberInputgrossMonthlySalary = document.createElement("input");
let labelNetMonthlySalary = document.createElement("label");
let numberInputNetMonthlySalary = document.createElement("input");
let labelGrossYearlySalary = document.createElement("label");
let numberInputGrossYearlySalary = document.createElement("input");
let labelNetYearlySalary = document.createElement("label");
let numberInputNetYearlySalary = document.createElement("input");

document.body.appendChild(container);
container.appendChild(form);
form.appendChild(labelGrossMonthlySalary);
form.appendChild(numberInputgrossMonthlySalary);
form.appendChild(labelNetMonthlySalary);
form.appendChild(numberInputNetMonthlySalary);
form.appendChild(labelGrossYearlySalary);
form.appendChild(numberInputGrossYearlySalary);
form.appendChild(labelNetYearlySalary);
form.appendChild(numberInputNetYearlySalary);

labelGrossMonthlySalary.innerHTML = "Salaire mensuel brut";
labelNetMonthlySalary.innerHTML = "Salaire mensuel net";
labelGrossYearlySalary.innerHTML = "Salaire annuel brut";
labelNetYearlySalary.innerHTML = "Salaire annuel net";
numberInputNetMonthlySalary.setAttribute("type", "number");
numberInputNetMonthlySalary.setAttribute("type", "number");
numberInputGrossYearlySalary.setAttribute("type", "number");
numberInputNetYearlySalary.setAttribute("type", "number");

function letStart () {
  container.style.display = "inline";
}

function salaryCalculation() {
if (numberInputNetMonthlySalary) {
  numberInputgrossMonthlySalary = numberInputNetMonthlySalary * 1.298;
  numberInputNetYearlySalary = numberInputNetMonthlySalary * 12;
  numberInputGrossYearlySalary = numberInputgrossMonthlySalary * 12;
} else if (numberInputgrossMonthlySalary) {
  numberInputNetMonthlySalary = numberInputgrossMonthlySalary / 1.298;
  numberInputGrossYearlySalary = numberInputgrossMonthlySalary * 12;
  numberInputNetYearlySalary = numberInputNetMonthlySalary * 12;
} else if (numberInputNetYearlySalary) {
  numberInputGrossYearlySalary = numberInputNetYearlySalary * 1.298;
  numberInputNetMonthlySalary = numberInputNetYearlySalary / 12;
  numberInputgrossMonthlySalary = numberInputGrossYearlySalary / 12;
} else {
  numberInputNetYearlySalary = numberInputGrossYearlySalary / 1.298;
  numberInputgrossMonthlySalary = numberInputGrossYearlySalary / 12;
  numberInputNetMonthlySalary = numberInputNetYearlySalary / 12;
}
}

/*-------------EXERCICE 3------------*/

let arrayOffNumber = [2, 4, 5, 7, 9, 6]

function oddOrEven (array){
  let i = 0; //intermediate variable used during sequential processing
  let elementCurrent;//intermediate variable used when enumerating
  let odd = "Odd";
  let even = "Even";
  let copyOfArray = [];//variable that represents the copied table
  while (i < array.length) { //continuation condition
    elementCurrent = array[i];//recovery of the current element
    i++;//update of the intermediate variable i
    if ((elementCurrent % 2) = 0) { //conditional test
      copyOfArray = elementCurrent;
    }
  }
}

console.log(copyOfArray);

/*-------------EXERCICE 4------------*/

let arrayOffString = ["et", "avoir", "mais", "ballon", "donc"]

function  coordinationConjunction(array) {
  let i = 0; //intermediate variable used during sequential processing
  let elementCurrent;//intermediate variable used when enumerating
  let copyOffArray = [];//variable that represents the copied table
  while (i < array.length) { //continuation condition
    elementCurrent = array[i]; //recovery of the current element
    i++;//update of the intermediate variable i
    if (elementCurrent = "mais" || elementCurrent = "ou" || elementCurrent = "donc" || elementCurrent = "et" || elementCurrent = "or" || elementCurrent = "ni" || elementCurrent = "car") { //conditional test
      copyOffArray = elementCurrent;
    }//if elementCurrent is worth one of the coordination conjunctions then copyOffArray takes the elementCurrent value
  }
}

console.log(copyOffArray);

/*-------------EXERCICE 5------------*/

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


let randomArray = []
randomArray.length = 128;

function randomNumber (array){
  let i = 0; //intermediate variable used during sequential processing
  let elementCurrent; //intermediate variable used when enumerating
  while (i < array.length) { 
    array[i] = getRandomInt(100);
    i++;
 }
 return array;
 console.log(array);
}

randomNumber(randomArray);
