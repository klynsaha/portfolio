import { Content } from "@react-spectrum/view";

const Hobby = ({ hobbies }) => {
    return (
        <Content marginX="1rem" marginY=".5rem">
            {hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
          ))}
        </Content>
    );
};

export default Hobby;
