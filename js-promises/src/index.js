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