import Student from "./Student";

const App = () => {
  return (
    <div id="app">
      <Student
        age={27}
        indexNo="26289"
        firstName="Ljubomir"
        lastName={"Jakimovski"}
        examsPassed={5}
        hasFinished={false}
      />
    </div>
  );

  /* Homework 04
    1. Create multiple variables (at least six) that represent some student information. 
    2. Create Student component that will show the student information.
    3. Pass the variables as parameters of the Student component.
    4. Implement typechecking for the parameters in the Student component.  
    5. Missmatch some of the types and see what happens.
    * Practice excercises from previous classes and homeworks.
  */

  //I missmatched all possible cases in the above examples. A the moment indexNo is the only missmatch we have.
};

export default App;
