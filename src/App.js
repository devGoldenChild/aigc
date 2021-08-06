import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Banner from "./components/Banner";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <>
      <AppHeader />
      <Banner />
      <Mission />
      <Services />
      <Team />
    </>
  );
}

export default App;
