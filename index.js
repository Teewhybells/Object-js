// Ques 1
function InstagramPost(author , content ,imagelink , no_of_views , no_of_likes)
{
 this.author  = author ;
this.content   = content ;
this.imagelink  = imagelink;
this.no_of_views  = no_of_views ;
this.no_of_likes  = no_of_likes;
}


//Ques 2
const remmyPost = new InstagramPost("@remmy","My latest Post is on Nigeria",
"http://remmy1.com/mypics.jpg","3000","200");

const armibellsPost = new InstagramPost("@armibells","World of an enterprenur",
"http://armibells07.com/mypics.jpg","5000","1200");

 



  
  
  // Ques 3a  
    function createPerson( firstName, lastName, age, sex, street, city ) {
    return {
      firstName: firstName,
      lastName: lastName,
      age: age,
      sex: sex,
     street: lekki,
     city:lagos
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
  
  
  
  
  
  
  
  
  
  