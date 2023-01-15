import { Heading, Content, Text, Image } from "@adobe/react-spectrum";

const WorkCard = ({ work }) => {
  return (
    <Content margin="1rem">
      <Heading level={3} UNSAFE_style={{ display: "inline" }}>
        {work.logo && (
          <Image
            src={process.env.PUBLIC_URL + work.logo}
            width="55px"
            UNSAFE_style={{ display: "inline-block", marginRight: "5px" }}
            alt={work.organization}
          />
        )}
        {work.organization}
      </Heading>
      {", "}

      <Heading
        level={4}
        UNSAFE_style={{
          fontStyle: "italic",
          fontWeight: "normal",
          display: "inline",
        }}
      >
        {work.location}
      </Heading>
      {" - "}

      <Heading
        level={4}
        UNSAFE_style={{
          fontStyle: "italic",
          fontWeight: "normal",
          display: "inline",
        }}
      >
        {work.role}
      </Heading>

      <Text UNSAFE_style={{ display: "block" }} isMuted>
        {work.start} - {work.end ? work.end : "Present"}
      </Text>

      <Content marginX="1rem" marginY=".5rem">
        {work.descriptions.map((desp, index) => (
          <li key={index}>{desp}</li>
        ))}
      </Content>
    </Content>
  );
};

export default WorkCard;
