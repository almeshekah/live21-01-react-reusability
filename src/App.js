import "./App.css";
import { ThemeProvider } from "styled-components";
import {GlobalStyle }from "src/components/styles.js";

const theme = {
  
  backgroundColor: "#282c34", 
  
};
const App = () => {
  return (
    <GlobalStyle>
      <h2>When in doubt, ask for help!</h2>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/DarthHamza`)}
      >
        <span className="Emoji">🌚</span>
        <span className="Name">Hamza</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/Lailz`)}
      >
        <span className="Emoji">🐥</span>
        <span className="Name">Laila</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/thehasanas`)}
      >
        <span className="Emoji">🦍</span>
        <span className="Name">Hasan</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>
    </GlobalStyle>
  );
};

export default App;
