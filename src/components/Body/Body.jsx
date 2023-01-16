import BodyCss from "./Body.css";
import { Grid, Divider, Heading, View } from "@adobe/react-spectrum";
import data from "../../data/data.json";
import WorkCard from "./Work";
import EducationCard from "./Education";
import SkillCard from "./Skill";
import HobbyCard from "./Hobby";
import AwardCard from "./Award";
import OnlineProfiles from "./OnlineProfiles";
import BriefcaseIcon from "@spectrum-icons/workflow/Briefcase";
import EducationIcon from "@spectrum-icons/workflow/Education";
import ActionIcon from "@spectrum-icons/workflow/Actions";
import AnnotatePenIcon from "@spectrum-icons/workflow/AnnotatePen";
import ReplayIcon from "@spectrum-icons/workflow/Replay";
import GlobeIcon from "@spectrum-icons/workflow/Globe";
import RealTimeCustomerProfileIcon from "@spectrum-icons/workflow/RealTimeCustomerProfile";


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
    <Grid
      margin={{ base: "1rem", S: "1rem 4rem 1rem 4rem" }}
      gap="size-300"
      columns={{
        S: ["1fr"],
        L: ["3fr", "1fr"],
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
        </View>
      </View>
      <View>
        <View>
          <CardHeader heading="Skills" logo={<AnnotatePenIcon size="S" />} />
            <SkillCard skills={data.skills} />
        </View>

        <View>
          <CardHeader heading="Hobbies" logo={<ReplayIcon size="S" />} />
          <HobbyCard hobbies={data.hobbies}/>
        </View>

        <View>
          <CardHeader heading="Online Profiles" logo={<GlobeIcon size="S" />} />
          <OnlineProfiles profiles={data.profiles}/>
        </View>

        <View>
          <CardHeader
            heading="Recognitions"
            logo={<AnnotatePenIcon size="S" />}
          />
          <AwardCard awards={data.awards}/>
        </View>
      </View>
    </Grid>
  );
};

export default Body;
