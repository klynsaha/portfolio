import BodyCss from "./Body.css";
import {
  Flex,
  Divider,
  Heading,
} from "@adobe/react-spectrum";
import data from "../../data/data.json";
import WorkCard from "./WorkCard";
import EducationCard from "./EducationCard";
import Briefcase from "@spectrum-icons/workflow/Briefcase";
import Education from "@spectrum-icons/workflow/Education";

const CardHeader = ({ heading, logo }) => {
  return (
    <div>
      <Heading level={2} marginBottom="0" marginX="10px">
        {logo} {heading}
      </Heading>
      <Divider size="S" />
    </div>
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
        <CardHeader
          heading="Experience"
          logo={<Briefcase size="M" UNSAFE_style={{ display: "inline" }} />}
        />
        {data.work.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </section>

      <section id="education">
        <CardHeader heading="Education" logo={<Education size="M" />} />
        {data.education.map((education, index) => (
          <EducationCard key={index} education={education} />
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
