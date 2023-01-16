import { Content } from "@react-spectrum/view";
import { Well, Link, Heading } from "@adobe/react-spectrum";

const Project = ({ projects }) => {
  return (
    <Content marginTop=".5rem">
      {projects.map((project, index) => (
        <Well role="region" aria-labelledby="wellLabel" marginBottom="10px">
          <Heading UNSAFE_style={{ marginBottom: "0" }}>{project.name}</Heading>
          {project.start} - {project.end ? project.end : "Ongoing"}
          <p>
            {project.description}{" "}

            {project.linkName && (
              <Link UNSAFE_style={{ textDecoration: "none" }}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.linkName}
                </a>
              </Link>
            )}
          </p>
        </Well>
      ))}
    </Content>
  );
};

export default Project;
