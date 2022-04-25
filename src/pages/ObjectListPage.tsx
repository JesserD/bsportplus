import React from 'react';
import { Activity, ActivityKey, ExcerciseProgram } from '../app/interfaces/Interfaces';
import ActivityList from '../features/activities/ActivityList';
import ErrorToast from '../features/errors/ErrorToast';
import ExerciseList from '../features/exercises/ExerciseList';

interface Props {
    category: ActivityKey;
    activities?: Activity[];
    exercises?: ExcerciseProgram[];
}

export const ObjectListPage = ({ category, activities, exercises }: Props) => {

    if (category === ActivityKey.nonExistentCategory)
        return <ErrorToast errorMsg={'NonExistentCategory'} description={ActivityKey.nonExistentCategory} />;
    else if (activities !== undefined)
        return (<ActivityList category={category} activities={activities} />);
    else if (exercises !== undefined)
        return (<ExerciseList exercises={exercises} />);
    else return <ErrorToast errorMsg={'No defined data to present'} description={'Make sure to pass a defined list to show'} />;
};
