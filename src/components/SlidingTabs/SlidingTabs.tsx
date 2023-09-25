import React, {
    FunctionComponent,
    HTMLAttributes,
    ReactElement,
    useEffect,
    useState,
  } from 'react';
  import { NewBadge, Tab, Tabs, Slider, Wrapper } from './styled';
  
  interface Props {
    /** Tab titles and content */
    tabs: {
      title: string;
      label: ReactElement | string;
      isNew?: boolean;
    }[];
    /** Default selected tab (index of tabs array) */
    selected?: number;
    onSelect?: (idx: number) => void;
  }
  
  /**
   * Displays tabs and content of selected tab
   */
  const SlidingTabs: FunctionComponent<
    Props & HTMLAttributes<HTMLDivElement>
  > = ({ tabs, selected = 0, onSelect, ...rest }) => {
    const [tabIndex, setTabIndex] = useState(selected);
  
    useEffect(() => {
      setTabIndex(selected);
    }, [selected]);
  
    return (
      <>
        <Wrapper {...rest}>
          <Tabs>
            {tabs.map((tab, idx) => (
              <Tab
                key={tab.title}
                idx={idx}
                count={tabs.length}
                selected={idx === tabIndex}
                className={idx === tabIndex ? 'selected' : ''}
                onClick={() => {
                  setTabIndex(idx);
                  if (onSelect) onSelect(idx);
                }}
              >
                <span>{tab.label}</span>
                {tab.isNew && <NewBadge>New</NewBadge>}
              </Tab>
            ))}
            <Slider className="slider" count={tabs.length} />
          </Tabs>
        </Wrapper>
      </>
    );
  };
  
  export default SlidingTabs;
  