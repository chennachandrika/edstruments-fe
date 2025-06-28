import { inVoiceTabDetails } from "../../constants";

const TabHeader = ({ activeTab, handleTabClick }) => (
  <div className="md:absolute md:top-[88px] bg-white w-full md:w-[44%] p-3 md:p-4 flex gap-4 z-10">
    {inVoiceTabDetails.map(({ tabValue, tabTitle }) => (
      <button
        type="button"
        key={tabValue}
        className={`p-2 border-b-2 cursor-pointer font-medium text-xs md:text-base ${
          activeTab === tabValue
            ? "border-blue-500 text-blue-500"
            : "border-transparent"
        }`}
        onClick={() => handleTabClick(tabValue)}
      >
        {tabTitle}
      </button>
    ))}
  </div>
);

export default TabHeader;
