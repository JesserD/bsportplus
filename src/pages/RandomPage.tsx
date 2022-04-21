import React from 'react';
import CardList from '../app/layout/CardList';
import data from '../data/BsportPlus.json';

const RandomPage = () => {
    const { Activites } = data.ExampleOfActivites;
    const cards: object[] = [];
    const randomIntList: number[] = GenerateIntList(0, Activites.length - 1, 4);

    cards.push({
        partner: Activites[randomIntList[0]].partner,
        content: Activites[randomIntList[0]].targetGroup,
        link: Activites[randomIntList[0]].link,
        logo: Activites[randomIntList[0]].logo
    });
    cards.push({
        partner: Activites[randomIntList[1]].partner,
        content: Activites[randomIntList[1]].challenges,
        link: Activites[randomIntList[1]].link,
        logo: Activites[randomIntList[1]].logo
    });
    cards.push({
        partner: Activites[randomIntList[2]].partner,
        content: Activites[randomIntList[2]].needs,
        link: Activites[randomIntList[2]].link,
        logo: Activites[randomIntList[2]].logo
    });
    cards.push({
        partner: Activites[randomIntList[3]].partner,
        content: Activites[randomIntList[3]].KeySuccessFactors,
        link: Activites[randomIntList[3]].link,
        logo: Activites[randomIntList[3]].logo
    });
    return (<CardList {...cards} />);
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
