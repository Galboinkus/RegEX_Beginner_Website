function what_Is_Regex(){
  document.getElementById("info").innerHTML = "What is RegEX?";
  document.getElementById("description").innerHTML = "A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern. RegEx can be used to check if a string contains the specified search pattern.";
  document.getElementById("example").innerHTML = "No Example";
  document.getElementById("regex").innerHTML = "No RegEX";
  document.getElementById("match").style.color = "#243037";
  document.getElementById("no-match").style.color = "#243037";
} //END FUNCTION

function displayInfo(title, desc){
  document.getElementById("info").innerHTML = title;
  document.getElementById("description").innerHTML = desc;
} //END FUNCTION
