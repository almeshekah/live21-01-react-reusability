import { TagWrapper,Emoji,Name ,GoToGithub}from "../Styles";
const InstructorTag = (props) => {
  // Create the InstructorTag component here

  return <>

    <TagWrapper
        onClick={() => window.open({props.instructor.Github})}
      >
        <Emoji >{props.instructor.Emoji}</Emoji>
        <Name>{props.instructor.Name}</Name>
        <GoToGithub>Go to GitHub</GoToGithub>
      </TagWrapper>
  
  
  
  </>;
};

export default InstructorTag;
