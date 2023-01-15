import { Heading, Content, Text } from "@adobe/react-spectrum";

const EducationCard = ({ education }) => {
  return (
    <Content margin="1rem">
      <Heading level={3} UNSAFE_style={{ display: "inline" }}>
        {education.organization}
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
        {education.location}
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
        {education.course}
      </Heading>

      <Text UNSAFE_style={{ display: "block" }} isMuted>
        {education.start} - {education.end ? education.end : "Present"}
      </Text>

      <Content marginX="1rem" marginY=".5rem">
        {education.descriptions.map((desp, index) => (
          <li key={index}>{desp}</li>
        ))}
      </Content>
    </Content>
  );
};

export default EducationCard;
