import { Content } from "@react-spectrum/view";

const Award = ({ awards }) => {
    return (
        <Content marginX="1rem" marginY=".5rem">
            {awards.map((award, index) => (
                <li key={index}>{award.name}</li>
          ))}
        </Content>
    );
};

export default Award;
