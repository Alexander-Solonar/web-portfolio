import { useParams } from "react-router-dom";

const SectionProject = () => {
  const { projectId } = useParams();
  console.log(projectId);
  return <></>;
};

export default SectionProject;
