import { Content } from "@react-spectrum/view";
import { Link } from "@adobe/react-spectrum";

const OnlineProfiles = ({ profiles }) => {
    return (
        <Content marginX="1.5rem" marginY=".5rem">
            {profiles.map((profile) => (
                <Link UNSAFE_style={{ textDecoration: "none", display: "block" }}>
                    <a href={profile.link} target="_blank" rel="noreferrer">{profile.name}</a>
                </Link>
          ))}
        </Content>
    );
};

export default OnlineProfiles;
