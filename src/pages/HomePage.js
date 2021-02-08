import "../css/App.css";
import NavBar from "../components/Nav";
import Intro from "../components/Intro";
import Divie from "../components/Divie";
import PickUP from "../components/PickUP";
import Demo from "../components/Demo";
import { useMediaQuery } from "react-responsive";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SmallProjects from "../components/SmallProjects";
import Maindash from "../components/Maindash";
import News from "../components/News";
import Stack from "../components/Stack";
import Projectimages from "../components/Projectimages";
import Stripe from "../components/Stripe";
// import Flipcard  from "../components/Flipcard"

const HomePage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Divie />
      <Stripe />
      {/* <Projectimages /> */}
      {/* only show the laptop demo if on computer */}
      {/* {!isTabletOrMobile && <Demo />} */}
      {/* <PickUP />
      <SmallProjects />
      <Maindash/>
      <News/>
      <Stack/> */}
      {/* <Flipcard/> */}

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
