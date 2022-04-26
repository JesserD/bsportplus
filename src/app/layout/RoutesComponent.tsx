import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../../pages/AboutUsPage';
import AerobicAndStrengthExerciseProgram from '../../pages/Activities/AerobicAndStrengthExerciseProgram/AerobicAndStrengthExerciseProgram';
import ExerciseAndNutriionAtWork from '../../pages/Activities/ExerciseAndNutriionAtWork/ExerciseAndNutriionAtWork';
import ExerciseAtHome from '../../pages/Activities/ExerciseAtHome/ExerciseAtHome';
import ExerciseAtWork from '../../pages/Activities/ExerciseAtWork/ExerciseAtWork';
import WeeklyFitnessProgram from '../../pages/Activities/WeeklyFitnessProgram/WeeklyFitnessProgram';
import HomePage from '../../HomePage';
import { ObjectListPage } from '../../pages/ObjectListPage';
import RandomPage from '../../pages/RandomPage';
import { MenuItem, ActivityKey } from '../interfaces/Interfaces';
import Data from '../../data/BsportPlus.json';

interface Props {
    paths: Partial<MenuItem>[];
}

const RoutesComponent = ({ paths }: Props) => {
    const { ExampleOfActivites: { Activites }, ExampleOfExcerciseProgram: { Exercise } } = Data;

    const ToActivityKey = (input: string | undefined) => {
        if (input === undefined || !(input in ActivityKey))
            return ActivityKey.nonExistentCategory;
        // @ts-expect-error 
        else return ActivityKey[input];
    };
    return (
        <Routes>
            {paths.map((item, index) => {
                if (item.href === undefined) {
                    console.warn('item.href is undefinied!');
                    return <Fragment key={index}>Opps</Fragment>;
                }
                if (item.href === '/')
                    return <Route key={item.href + index} path={item.href} element={<HomePage />} />;
                else if (item.href === '/Activities')
                    return <Route key={item.href + index} path={item.href} element={<ObjectListPage category={ToActivityKey(item.content)} exercises={Exercise} />} />;
                else if (item.href === '/Random')
                    return <Route key={item.href + index} path={item.href} element={<RandomPage activites={Activites} />} />;
                else if (item.href === '/AboutUs')
                    return <Route key={item.href + index} path={item.href} element={<AboutUsPage />} />;
                else
                    return <Route key={item.href + index} path={item.href} element={<ObjectListPage category={ToActivityKey(item.content)} activities={Activites} />} />;
            })}
            <Route path='/Activities/ExerciseAtWork' element={<ExerciseAtWork />} />
            <Route path='/Activities/ExerciseAtHome' element={<ExerciseAtHome />} />
            <Route path='/Activities/ExerciseAndNutriionAtWork' element={<ExerciseAndNutriionAtWork />} />
            <Route path='/Activities/AerobicAndStrengthExerciseProgram' element={<AerobicAndStrengthExerciseProgram />} />
            <Route path='/Activities/WeeklyFitnessProgram' element={<WeeklyFitnessProgram />} />
        </Routes>
    );
};



export default RoutesComponent;