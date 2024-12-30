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
    <div className="max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <Heading />
        <Plan />
        <RecapSection />
        {/* Hide on mobile (< 640px), show on sm and above */}
        <div className="hidden sm:block">
          <Compare />
        </div>
        <FAQs />
        <SecuritySection />
        <TrustSection />
      </div>
    </div>
  );
}

export default App;