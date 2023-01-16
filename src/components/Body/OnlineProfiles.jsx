import { Content } from "@react-spectrum/view";
import { Link } from "@adobe/react-spectrum";

const OnlineProfiles = ({ profiles }) => {
    return (
        <Content marginX="1rem" marginY=".5rem">
            {profiles.map((profile) => (
                <Link UNSAFE_style={{ textDecoration: "none", display: "block" }}>
                    <a href={profile.link}>{profile.name}</a>
                </Link>
          ))}
        </Content>
    );
};

export default OnlineProfiles;
