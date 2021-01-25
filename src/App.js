import "./App.css";

import data from "./data";
import { AppWrapper } from "./components/styles";
import InstructorTag from "./components/InstructorTag";


const App = () => {

  const Instructors = data.map((instructor) => (
    <InstructorTag
      key={instructor.id}
      {...instructor}
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
