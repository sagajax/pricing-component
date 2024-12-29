import { useState } from "react";
import Heading from "./components/Heading";
import Plan from "./components/Plan";
import RecapSection from "./components/RecapSection";
import Compare from "./components/Compare";
import FAQs from "./components/FAQs";
import SecuritySection from "./components/SecuritySection";
import TrustSection from "./components/TrustSection";

function App() {
  return (
    <>
      <div className="px-4">
        <Heading />
        <Plan />
        <RecapSection />
        <Compare />
        <FAQs />
        <SecuritySection />
        <TrustSection />
      </div>
    </>
  );
}

export default App;
