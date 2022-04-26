import React from 'react';
import { Activity } from '../app/interfaces/Interfaces';
import ActivityList from '../features/activities/ActivityList';

interface Props {
    activites: Activity[];
}

const RandomPage = ({ activites }: Props) => {
    const randomIntList = GenerateIntList(0, activites.length - 1, 6);
    const categories: (keyof Activity)[] = ['targetGroup', 'challenges', 'needs', 'keySuccessFactors', 'indicators', 'stakeholders'];
    const randomActivities = randomIntList.map(i => activites[i]);
    return (<ActivityList categories={categories} activities={randomActivities} />);
};

const GenerateIntList = (min: number, max: number, numOfElement: number) => {

    const RandomInteger = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomIntList: number[] = [];
    for (let i = 0; i < numOfElement; i++) {
        const randomInt = RandomInteger(min, max);
        if (!randomIntList.includes(randomInt)) randomIntList.push(randomInt);
        else i--;
    }
    return randomIntList;
};

export default RandomPage;
