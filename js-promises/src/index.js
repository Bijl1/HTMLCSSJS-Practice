//Invoking functions individually
function func1() {
    console.log("Hi");
  }
  
  function func2() {
    console.log("Goodbye!");
  }
  
  func1();
  func2();
  

  //Invoking a function as a callback
  function func3 (callback) {   // The `callback` parameter represents a function 
    console.log("Hallo");
    
    callback();
  }
   
  function func4() {  
    console.log("Tot ziens!");
  }
   
  func3(func4);


  const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
  ];
  
  //Too many callbacks - Callback Hell
  function getDirections(step, callback, errorCallback) {
    // setTimeout(() => {
      console.log( directions[step] );
      
      if (!directions[step]) errorCallback("Instructions not found.");
      else callback();
    // }, 2000); 
  }
  
  // Single callback
  getDirections(0, ()=> {
    getDirections(1, () => {});
  });
  