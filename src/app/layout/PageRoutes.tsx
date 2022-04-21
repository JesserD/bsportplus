import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../../pages/AboutUsPage';
import AerobicAndStrengthExerciseProgram from '../../pages/Activities/AerobicAndStrengthExerciseProgram/AerobicAndStrengthExerciseProgram';
import ExerciseAndNutriionAtWork from '../../pages/Activities/ExerciseAndNutriionAtWork/ExerciseAndNutriionAtWork';
import ExerciseAtHome from '../../pages/Activities/ExerciseAtHome/ExerciseAtHome';
import ExerciseAtWork from '../../pages/Activities/ExerciseAtWork/ExerciseAtWork';
import WeeklyFitnessProgram from '../../pages/Activities/WeeklyFitnessProgram/WeeklyFitnessProgram';
import CardPage from '../../pages/CardPage';
import ContactUsPage from '../../pages/ContactUsPage';
import HomePage from '../../pages/HomePage';
import RandomPage from '../../pages/RandomPage';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Disabilities' element={<CardPage category='Disabilities' />} />
            <Route path='/Challenges' element={<CardPage category='Challenges' />} />
            <Route path='/Needs' element={<CardPage category='Needs' />} />
            <Route path='/KeySuccessFactors' element={<CardPage category='Key Success Factors' />} />
            <Route path='/ActivityTitles' element={<CardPage category='Activity Titles' />} />

            <Route path='/Activities' element={<CardPage category='Activities' />} />
            <Route path='/Activities/ExerciseAtWork' element={<ExerciseAtWork />} />
            <Route path='/Activities/ExerciseAtHome' element={<ExerciseAtHome />} />
            <Route path='/Activities/ExerciseAndNutriionAtWork' element={<ExerciseAndNutriionAtWork />} />
            <Route path='/Activities/AerobicAndStrengthExerciseProgram' element={<AerobicAndStrengthExerciseProgram />} />
            <Route path='/Activities/WeeklyFitnessProgram' element={<WeeklyFitnessProgram />} />

            <Route path='/Random' element={<RandomPage />} />
            <Route path='/AboutUs' element={<AboutUsPage />} />
            <Route path='/ContactUs' element={<ContactUsPage />} />
        </Routes>
    );
};

export default PageRoutes;