import { useContext, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import PerformanceSection from "./components/PerformanceSection";
import Platforms from "./components/Platforms";
import SalesTrend from "./components/SalesTrend";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { DarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.documentElement;
    if (DarkMode) {
      root.style.setProperty(
        "--background_color",
        "var(--body_background_dark)"
      );
    } else {
      root.style.setProperty(
        "--background_color",
        "var(--body_background_light)"
      );
    }
  }, [DarkMode]);

  return (
    <div className={DarkMode ? "dark_mode App" : "App"}>
      <Navbar />
      <Sidebar />
      <div className="section-wrapper">
        <section className="top-section">
          <SalesTrend />

          <PerformanceSection />
        </section>
        <section className="bottom-section">
          <Orders />
          <Platforms />
        </section>
      </div>
    </div>
  );
}

export default App;
