import {
  createContext,
  useContext,
  useState,
  HTMLAttributes,
  Dispatch,
  SetStateAction,
} from "react";

export interface TabContextType {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export interface TabContainerProps extends HTMLAttributes<HTMLElement> {
  defaultActiveTab: string;
}

const TabContext = createContext<TabContextType>({
  activeTab: "",
  setActiveTab: () => {},
});

export const TabContainer = ({
  children,
  defaultActiveTab,
}: TabContainerProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      <div className="tab-container">{children}</div>
    </TabContext.Provider>
  );
};

export const TabNav = ({ children }: HTMLAttributes<HTMLElement>) => {
  return <nav className="nav nav-tabs">{children}</nav>;
};

export const TabNavItem = ({ children, id }: HTMLAttributes<HTMLElement>) => {
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

export const TabContent = ({ children }: HTMLAttributes<HTMLElement>) => {
  return <div className="tab-content">{children}</div>;
};

export const TabContentItem = ({
  children,
  id,
}: HTMLAttributes<HTMLElement>) => {
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
