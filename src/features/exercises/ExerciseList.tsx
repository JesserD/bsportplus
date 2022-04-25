import React from 'react';
import { animationFlex, MotionSimpleGrid } from '../../app/Common/AnimatedComponents';
import { ExcerciseProgram } from '../../app/interfaces/Interfaces';
import ExerciseCard from './ExerciseCard';

interface Props {
    exercises: ExcerciseProgram[];
}

const ExerciseList = ({ exercises }: Props) => {
    return (
      <MotionSimpleGrid variants={animationFlex} initial={'hidden'} animate={'visible'}
        gap={8} columns={{ base: 1, md: 2 }}>
        {exercises.map((activity, index) => <ExerciseCard key={activity.title + index} excerciseProgram={activity} />)}
      </MotionSimpleGrid>
    );
};

export default ExerciseList;