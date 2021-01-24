import "./App.css";
import { ThemeProvider } from "styled-components";
import data from "./data";
import { AppWrapper } from "./components/styles";
import InstructorTag from "./components/InstructorTag";

const theme = {
  
  backgroundColor: "#282c34", 
  
};
const App = () => {

  const Instructors = data.map((instructor) => (
    <InstructorTag
      key={instructor.id}
      name={instructor.name}
      github={instructor.github}
      emoji={instructor.emoji}
    />
  ));






  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>

      {Instructors}
    </AppWrapper>
  );
};

export default App;
