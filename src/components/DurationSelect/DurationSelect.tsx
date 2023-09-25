import React, { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';

import SlidingTabs from '../SlidingTabs';
import Title from '../Title';

import {
    TabContainer
} from './styled';

interface DurationSelectProps {
    selected?: number;
    setSelected: Dispatch<SetStateAction<number>>;
};

const DurationSelect:FC<DurationSelectProps> = ({
    selected,
    setSelected
}) => {

    const [optionId, setOptionId] = useState<number>(0);
    
    const options = useMemo(() => ([
        {
            title: ".5",
            label: "6 months"
        },
        {
            title: "1",
            label: "1 year"
        },
        {
            title: "2",
            label: "2 years"
        }
    ]),[]);

    const setIds = (idx:number) => {
        setSelected(idx);
        setOptionId(idx);
    };

    const renderSubText = useCallback(() => (
        <Title secondary>{`Own username for ${options[optionId].label}!`}</Title>
    ), [optionId, options]);

    return (
        <TabContainer>
            <SlidingTabs
                tabs={options}
                selected={selected}
                onSelect={(idx) => setIds(idx as number)}
            />
            {renderSubText()}
        </TabContainer>
    );
}

export default DurationSelect;