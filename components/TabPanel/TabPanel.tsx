import { createContext, useContext, useState } from "react";

const TabContext = createContext({ activeTab: "", setActiveTab: () => {} });

export const TabContainer = ({ children, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      <div>{children.map((e) => e)}</div>
    </TabContext.Provider>
  );
};

export const TabNav = ({ children }) => {
  return <nav className="nav nav-tabs">{children.map((e) => e)}</nav>;
};

export const TabNavItem = ({ children, id }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <a
      id={id}
      onClick={(e) => setActiveTab(e.target.id)}
      className={`${activeTab === id && "active"}`}
    >
      {children}
    </a>
  );
};

export const TabContent = ({ children }) => {
  return <div className="tab-content">{children.map((e) => e)}</div>;
};

export const TabContentItem = ({ children, id }) => {
  const { activeTab } = useContext(TabContext);

  return (
    <div id={id} className={`tab-content-item ${activeTab === id && "active"}`}>
      {children}
    </div>
  );
};

export default Object.assign(
  {},
  {
    Container: TabContainer,
    Nav: TabNav,
    NavItem: TabNavItem,
    Content: TabContent,
    ContentItem: TabContentItem,
  }
);
