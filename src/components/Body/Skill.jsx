import { Content } from "@react-spectrum/view";

const Skill = ({ skills }) => {
    return (
        <Content marginX="1rem" marginY=".5rem">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
          ))}
        </Content>
    );
};

export default Skill;
