import { TagWrapper, Emoji, Name, GoToGithub } from "./styles";

const InstructorTag = ({ name,emoji,github } ) => {
  // Create the InstructorTag component here
   
  return (

    <TagWrapper
        onClick={() => window.open(`https://github.com/${github}`)}
      >
        <Emoji >{emoji}</Emoji>
        <Name>{name}</Name>
        <GoToGithub>Go to GitHub</GoToGithub>
      </TagWrapper>
  
  
  
  );
};

export default InstructorTag;
