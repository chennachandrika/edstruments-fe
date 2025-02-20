import { InView } from "react-intersection-observer";

const TabSection = ({ id, setActiveTab, children, tabRefs }) => (
  <InView
    as="div"
    onChange={(inView) => inView && setActiveTab(id)}
    triggerOnce={false}
    id={id}
    threshold={0.5} 
    className="relative  flex items-center justify-center m-4"
  >
    <div
      ref={(el) => (tabRefs.current[id] = el)}
      className="h-full w-full flex "
    >
      {children}
    </div>
  </InView>
);

export default TabSection;
