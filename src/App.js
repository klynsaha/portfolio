import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import { Grid, Provider, Divider } from "@adobe/react-spectrum";
import { defaultTheme } from "@adobe/react-spectrum";
import { useState } from "react";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");

  const themeSetter = () => {
    if (colorScheme === "light") setColorScheme("dark");
    else setColorScheme("light");
  };

  return (
    <Provider theme={defaultTheme} colorScheme={colorScheme}>
      <Grid rows={["5rem", "2px", "3fr", "3rem"]}>
        <Header themeSetter={themeSetter} colorScheme={colorScheme} position="sticky" /> 
        <Divider size="S" />
        <Body />
        <Footer />
      </Grid>
    </Provider>
  );
}

export default App;
