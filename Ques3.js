// Ques 3a  
function createPerson( firstName, lastName, age, sex, street, city ) {
    return {
      firstName: firstName,
      lastName: lastName,
      age: age,
      sex: sex,
    street: street,
     city: city
    };
  }
  const person1 = createPerson("musa", "dawoda", 19, "male", "lekki", "lagos");
  console.log(person1); 
  
  
  
  // Ques 3b 
  function createjambscore( ENG, GOVT, LIT, CRK ) {
    return {
      ENG: ENG,
      GOVT: MTH,
      LIT: LIT,
     CRK: CRK,
     
    };
  }
  
  const jambscores = createjambscores( 70, 85, 82, 94 );
  
  console.log(jambScores); 
  
  
  
  // Adding object
  Object.assign(personInfo, jambScores);
  
  console.log({ person1});
  
  /*
  
  {
    person1: {
      firstName: "musa",
      lastName: "dawoda"
      age: 19,
     street: "lekki"
     city : "Lagos",
      ENG: 70,
    GOVT: 85,
      LIT: 82,
      CRK: 94
    }
  }
  */
  
  

