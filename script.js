let groups;
let indexNum;

function displayAllMatches(text, matches){
  let temp = 0;
  let results = [];
  console.log("All Matches(" + matches.length +  "): ");
  for (let i = 0; i < matches.length; i++){

    let prev = "";
    let selected = matches[i].toString();
    let after = "";
    let temp2 = text.indexOf(matches[i], temp);
    
    if (temp2 - 15 >= 0)
      prev = "..." + text.substring(temp2-15, temp2);
    else
      prev = text.substring(0, temp2);

    if (temp2 + matches[i].toString().length + 15 <= text.length)
      after = text.substring(temp2 + matches[i].toString().length, temp2 + matches[i].toString().length + 15) + "...";
    else
      after = text.substring(temp2 + matches[i].toString().length, text.length);
    temp = temp2 + 1;

    const group = [prev, selected, after];
    
    results.push(group);
    
  } //END FOR
  groups = results;
  return results;
  
} //END FUNCTION

function displayInHTML(){
  if (groups.length != 0){
    const selected = groups[indexNum-1];
    document.getElementById("before").innerHTML = selected[0];
    document.getElementById("highlighted").innerHTML = selected[1];
    document.getElementById("after").innerHTML = selected[2];
    document.getElementById("number").innerHTML = indexNum + "";
  } //END IF
  else{
    document.getElementById("before").innerHTML = "..";
    document.getElementById("highlighted").innerHTML = "";
    document.getElementById("after").innerHTML = ".";
  }
} //END FUNCTION

function doSomething(){  
  let input = document.getElementById("input").value;
  console.log("Input " + input);
  const text = document.getElementById("text").innerHTML; 

  const regex = new RegExp((input), "g");
  const matches = displayAllMatches(text, [...text.matchAll(regex)]);

  for (let i = 0; i < matches.length; i++){
    console.log(matches[i]);
  } //END FOR

  if (matches.length != 0){
    document.getElementById("indicator").innerHTML = "Number of Matches: " + matches.length;
    indexNum = 1;
    document.getElementById("number").innerHTML = "1";
  } //END IF
  else{
    document.getElementById("indicator").innerHTML = "No Results";
    document.getElementById("number").innerHTML = "0";
  } //END ELSE

  displayInHTML();
} //END FUNCTION

function goBack(){
  if (groups != undefined){
    if (indexNum == 1)
      indexNum = groups.length;
    else
      indexNum--;
    displayInHTML();
  } //END IF
} //END FUNCTION

function goForward(){
  if (groups != undefined){
    if (indexNum == groups.length)
      indexNum = 1;
    else
      indexNum++;
    displayInHTML();
  } //END IF
} //END FUNCTION
