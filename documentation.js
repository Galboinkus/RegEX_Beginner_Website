function what_Is_Regex(){
  document.getElementById("info").innerHTML = "What is RegEX?";
  document.getElementById("description").innerHTML = "A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern. RegEx can be used to check if a string contains the specified search pattern.";
  document.getElementById("example").innerHTML = "No Example";
  document.getElementById("regex").innerHTML = "No RegEX";
  document.getElementById("match").style.color = "#243037";
  document.getElementById("no-match").style.color = "#243037";
} //END FUNCTION

function displayInfo(title, desc, reg, match, noMatch){
  document.getElementById("info").innerHTML = title;
  document.getElementById("description").innerHTML = desc;
  document.getElementById("example").innerHTML = "Example";

  document.getElementById("regex").innerHTML = "Regex: " + reg;
  document.getElementById("match").innerHTML = "Things that Match: " + match;
  document.getElementById("match").style.color = "#bfd7ea";
  document.getElementById("no-match").innerHTML = "Things that Don't Match: " + noMatch;
  document.getElementById("no-match").style.color = "#ff6663";
} //END FUNCTION
