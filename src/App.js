import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Navigationbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [currentTab, setTab] = useState("About");

  const renderTab = () => {
    switch (currentTab) {
      case "Contact":
        return <Contact />;

      case "Portfolio":
        return <Portfolio />;

      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <div>
        <Navigationbar currentTab={currentTab} setTab={setTab} />
      </div>
      <div>{renderTab()}</div>
    </div>
  );
}

export default App;
