import { useState, useRef } from "react";
import { ScrollArea } from "../common/ScrollArea";
import TabHeader from "./TabHeader";
import TabSection from "./TabSection";
import { inVoiceTabDetails } from "../../constants";

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState(inVoiceTabDetails[0].tabValue);
  const tabRefs = useRef({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    tabRefs.current[tab]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="h-full overflow-hidden w-full">
      <TabHeader activeTab={activeTab} handleTabClick={handleTabClick} />
      <ScrollArea className="space-y-20 p-4 overflow-auto h-[32vh] md:h-full my-2">
        {inVoiceTabDetails.map(({ tabValue, tabContent }) => (
          <TabSection
            key={tabValue}
            id={tabValue}
            setActiveTab={setActiveTab}
            tabRefs={tabRefs}
          >
            {tabContent}
          </TabSection>
        ))}
      </ScrollArea>
    </div>
  );
};

export default FormTabs;
