const runButton = document.getElementById("run-method");
const showOutput = document.getElementById("output");

const testArrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testArrayTwo = ['dog', 'cat', 'bat', 'mouse', 'rabbit', 'panda', 'mouse'];

//Array.Find & Array.Filter Methods:
////callback function is conditional, and pushes match into new array which is stringified for display in HTML textarea:
const checkMouse = (animal) => {
  let resultArray = []
  if (animal ==='mouse') {
    resultArray.push(animal);
  }
  return resultArray.toString();
}

//Array.Map Method:
const mapMammals = (animal) => {
  let resultArray = [];
  resultArray.push(`The ${animal} is a type of mammal.`);
  return resultArray.toString();
}


////array.FIND, FILTER or MAP is called with the callback function -- 
//////stops running after first 'mouse' match when using FIND:
//////loops through whole array for all mice when using FILTER:
//////maps thru whole array and incorporates indices into sentence when using MAP:
const runCheck = () => {
  //const newArr = testArrayTwo.find(checkMouse);
  const newArr = testArrayTwo.filter(checkMouse);
  //const newArr = testArrayTwo.map(mapMammals);
  showOutput.textContent = newArr;
  console.log("AAA:", newArr);
}







//Event Listener for the button to run method on array:
runButton.addEventListener('click', () => {
  runCheck();
  console.log('Button man!');
})