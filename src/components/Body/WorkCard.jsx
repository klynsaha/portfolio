import { Heading, Content, Text } from "@adobe/react-spectrum";

const WorkCard = ({ work }) => {
  return (
    <Content margin="1rem">
      <Heading level={3} UNSAFE_style={{ display: "inline" }}>
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
        {work.descriptions.map((desp) => (
          <li>{desp}</li>
        ))}
      </Content>
    </Content>
  );
};

export default WorkCard;
