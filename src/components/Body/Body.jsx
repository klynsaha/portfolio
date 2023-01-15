import BodyCss from "./Body.css";
import {
  Flex,
  Divider,
  Heading,
  Breadcrumbs,
  Item,
} from "@adobe/react-spectrum";
import data from "../../data/data.json";
import WorkCard from "./WorkCard";
import EducationCard from "./EducationCard";

const CardHeader = ({ heading }) => {
  return (
    <>
      <Heading level={2} marginBottom="0" UNSAFE_style={{ color: "lightblue" }}>
        {heading}
      </Heading>
      <Divider size="S" />
    </>
  );
};

const Body = () => {
  return (
    <Flex
      margin={{ base: "1rem", S: "1rem 4rem 1rem 4rem" }}
      direction="column"
      gap="size-100"
    >
      <section id="experience">
        <CardHeader heading="Experience" />
        {data.work.map((work) => (
          <WorkCard work={work} />
        ))}
      </section>

      <section id="education">
        <CardHeader heading="Education" />
        {data.education.map((education) => (
          <EducationCard education={education} />
        ))}
      </section>

      <section id="projects">
        <CardHeader heading="Projects" />
      </section>

      <section id="skills">
        <CardHeader heading="Skills" />
      </section>
    </Flex>
  );
};

export default Body;
