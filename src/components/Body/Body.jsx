import BodyCss from "./Body.css";
import { Grid, Divider, Heading, View } from "@adobe/react-spectrum";
import BriefcaseIcon from "@spectrum-icons/workflow/Briefcase";
import EducationIcon from "@spectrum-icons/workflow/Education";
import ActionIcon from "@spectrum-icons/workflow/Actions";
import AnnotatePenIcon from "@spectrum-icons/workflow/AnnotatePen";
import ReplayIcon from "@spectrum-icons/workflow/Replay";
import GlobeIcon from "@spectrum-icons/workflow/Globe";
import data from "../../data/data.json";
import WorkCard from "./Work";
import EducationCard from "./Education";
import SkillCard from "./Skill";
import HobbyCard from "./Hobby";
import AwardCard from "./Award";
import OnlineProfiles from "./OnlineProfiles";
import Project from "./Project";

const CardHeader = ({ heading, logo }) => {
  return (
    <div>
      <Heading level={2} marginBottom="0" marginX="10px">
        {logo} <div style={{ color: "#73C2FB", fontWeight: "normal", display: "inline", textTransform: "uppercase" }}>{heading}</div>
      </Heading>
      <Divider size="S" />
    </div>
  );
};

const Body = () => {
  return (
    <Grid
      margin={{ base: "1rem", S: "1rem 4rem 1rem 4rem" }}
      gap="size-300"
      columns={{
        S: ["1fr"],
        M: ["3fr", "2px", "1fr"],
        L: ["2.5fr", "2px", "1fr"],
      }}
    >
      <View>
        <View>
          <CardHeader heading="Experience" logo={<BriefcaseIcon size="S" />} />
          {data.work.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </View>

        <View>
          <CardHeader heading="Education" logo={<EducationIcon size="S" />} />
          {data.education.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </View>

        <View>
          <CardHeader heading="Projects" logo={<ActionIcon size="S" />} />
          <Project projects={data.projects}/>
        </View>
      </View>

      <Divider size="S" orientation="vertical" />

      <View  UNSAFE_style={{ display: "flex", rowGap: "15px", flexDirection: "column"}}>
        <View>
          <CardHeader heading="Skills" logo={<AnnotatePenIcon size="S" />} />
          <SkillCard skills={data.skills} />
        </View>

        <View>
          <CardHeader heading="Hobbies" logo={<ReplayIcon size="S" />} />
          <HobbyCard hobbies={data.hobbies} />
        </View>

        <View>
          <CardHeader heading="Online Profiles" logo={<GlobeIcon size="S" />} />
          <OnlineProfiles profiles={data.profiles} />
        </View>

        <View>
          <CardHeader
            heading="Recognitions"
            logo={<AnnotatePenIcon size="S" />}
          />
          <AwardCard awards={data.awards} />
        </View>
      </View>
    </Grid>
  );
};

export default Body;
