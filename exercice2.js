function analyzeTemperature(quantity, data) {
  if (quantity === 0){
    return 0;
  }
  else if (quantity > 0 && quantity <= 10000){
    let tempProcheZéro = 10000;
    let newData = data.split(" ");
    for (let i = 0; i < newData.length ; i++){
      if (Number.parseInt(newData[i]) >= -273 && Number.parseInt(newData[i]) <= 5526){
        nombre = Number.parseInt(newData[i]);
        if(nombre < 0 && tempProcheZéro < 0 && nombre > tempProcheZéro){
          tempProcheZéro = nombre;
        }
        else if (nombre < 0 && tempProcheZéro >= 0 && Math.abs(nombre) < tempProcheZéro){
          tempProcheZéro = nombre;
        }
        else if (nombre >= 0 && tempProcheZéro >= 0 && nombre < tempProcheZéro){
          tempProcheZéro = nombre;
        }
        else if (nombre >= 0 && tempProcheZéro < 0 && nombre < Math.abs(tempProcheZéro)){
          tempProcheZéro = nombre;
        }
        else if (nombre > 0 && tempProcheZéro < 0 && nombre === Math.abs(tempProcheZéro)){
          tempProcheZéro = nombre;
        }
      }
    }
    return tempProcheZéro;
  }
  else{
    return "Le nombre de températures est incorrect, veuillez donner un nombre de températures entre 0 et 10000 inclus."
  }
}

console.log(analyzeTemperature(5, "1 -2 -8 4 5"));
