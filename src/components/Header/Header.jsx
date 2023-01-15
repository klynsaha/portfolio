import HeaderCss from "./Header.css";
import {
  Heading,
  Flex,
  ToggleButton,
} from "@adobe/react-spectrum";
import data from "../../data/data.json";
import Moon from "@spectrum-icons/workflow/Moon";
import Light from "@spectrum-icons/workflow/Light";

const header = ({ themeSetter, colorScheme }) => {
  return (
    <>
      <Flex
        UNSAFE_style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Heading level={2} UNSAFE_style={{ marginBottom: "0", fontWeight: "normal" }}>{data.profile.name}</Heading>
        <Heading level={4} UNSAFE_style={{ marginTop: "0", fontWeight: "normal", fontStyle: "italic" }}>Software Developer</Heading>
      </Flex>

      <ToggleButton
        aria-label="Icon only"
        isSelected={false}
        onChange={themeSetter}
        UNSAFE_style={{ position: "absolute", right: "2rem", top: "1.5rem" }}
      >
        {colorScheme === "light" ? <Moon /> : <Light />}
      </ToggleButton>
    </>
  );
};

export default header;
