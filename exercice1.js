function chuckNorris(msg) {
  if(msg.length > 0 && msg.length < 100){
    let binaryCode = "";
    let unaryCode = "";
    for(i in msg){
    binaryCode += msg[i].charCodeAt(0).toString([2]).padStart(7,"0");
    }
    let tableau = binaryCode.split("");
    if (tableau[0] === '1'){
      unaryCode += "0 0";
    }
    else{
      unaryCode += "00 0"
    }
    for(let a = 1; a < tableau.length; a++){
      if(tableau[a] === tableau[(a-1)]){
        unaryCode += "0";
      }
      else{
        if(tableau[a] === '1'){
          unaryCode += " 0 0";
        }
        else{
          unaryCode += " 00 0";
        }
      }
    }
    return unaryCode;
  }
  else{
    return "Votre message est incorrect, veuillez réécrire un message entre 0 et 100 caractères.";
  }
}

console.log(chuckNorris("C"));
console.log(chuckNorris("CC"));



