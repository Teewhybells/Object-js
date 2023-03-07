// QUES 5

const presidentialCandidate = {
    AAC: "Omoyele Sowore",
    ACCORD: "Christopher Imumolen",
    APC: "Bola Ahmed Tinubu",
    LP: "Peter Obi",
    NNPP: "Rabiu Kwankwaso",
    PDP: "Atiku Abubakar",
  };
  for (const property in presidentialCandidate) {
    console.log(`${presidentialCandidate[property]} is the presidential candidate of ${property}`);
  }
  /*
  Omoyele Sowore is the presidential candidate of AAC
  Christopher Imumolen is the presidential candidate of ACCORD
  Bola Ahmed Tinubu is the presidential candidate of APC
  Peter Obi is the presidential candidate of LP
  Rabiu Kwankwaso is the presidential candidate of NNPP
  Atiku Abubakar is the presidential candidate of PDP
  */
  
  