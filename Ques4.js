 // QUES 4

//  Using Object.assign();
const drinks = {
    yogurt: "hollandia",
    soft: "fanta",
    juice: "fiveAlive",
    water: "mrviju",
  };
  const typesOfjuice = Object.assign({}, drinkss);
  typesOfjuice.juice = "fiveAlive";
  console.log(drinks);
  /*
  {
    yogurt: "hollandia",
    soft: "fanta",
    juice: "fiveAlive",
    water: "mrviju",
  }
  */
  console.log({ typesOfdrinks });
  /*
  {
    typesOfjuice: {
     yogurt: "hollandia",
    soft: "fanta",
    juice: "fiveAlive",
    water: "mrviju",
    }
  }
  */
    
    
    // Using JSON.parse
  
  const typesOfsoft = JSON.parse(JSON.stringify(drinks));
  typesOfsoft.soft = "fanta";
  console.log({ typesOffanta });
  /*
  {
    typesOfsoft: {
      
   yogurt: "hollandia",
      soft: "fanta",
      juice: "fiveAlive",
      water: "mrviju",
    }
  }
  */
  
    
    
  //  Using Spread Syntax
  
  //const typesOfjuice = { ...drinks };
  //typesOfjuice.juice = "fiveAlive";//
  //console.log({ typesOfjuice });
  /*
  {
    typesOfjuice: {
      yogurt: "hollandia",
      soft: "fanta",
      juice: "fiveAlive",
      water: "mrviju",
    }
  */
    
    
  
    