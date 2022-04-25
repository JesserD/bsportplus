import React from 'react';
import { animationFlex, MotionSimpleGrid } from '../../app/Common/AnimatedComponents';
import { Activity } from '../../app/interfaces/Interfaces';
import ErrorToast from '../errors/ErrorToast';
import SimpleActivityCard from './SimpleActivityCard';
import SopisticatedActivityCard from './SophisticatedActivityCard';

interface Props {
  category?: keyof Activity;
  categories?: (keyof Activity)[];
  activities: Activity[];
}
const ActivityList = ({categories, category, activities }: Props) => {

  const ReferToArray = (arr : (keyof Activity)[]) => {
    let result = false;
    arr.forEach(e => {if (Array.isArray(activities[0][e])) result = true;});
    return result;
  };

  if (category !== undefined && Array.isArray(activities[0][category]) && Object.keys(activities[0][category]).length === 2)
    return (
      <MotionSimpleGrid variants={animationFlex} initial={'hidden'} animate={'visible'}
        gap={8} columns={{ base: 1, md: 2 }}>
        {activities.map((activity, index) => <SopisticatedActivityCard key={activity.title + index} activity={activity} category={category} />)}
      </MotionSimpleGrid>
    );
  else if (category !== undefined && typeof activities[0][category] === 'string')
    return (
      <MotionSimpleGrid variants={animationFlex} initial={'hidden'} animate={'visible'}
        gap={8} columns={{ base: 1, md: 2 }}>
        {activities.map((activity, index) => <SimpleActivityCard key={activity.title + index} activity={activity} category={category} />)}
      </MotionSimpleGrid>
    );
  else if (categories !== undefined && !ReferToArray(categories))
    return (
      <MotionSimpleGrid variants={animationFlex} initial={'hidden'} animate={'visible'}
        gap={8} columns={{ base: 1, md: 2 }}>
        {activities.map((activity, index) => <SimpleActivityCard key={activity.title + index} activity={activity} category={categories[index]} />)}
      </MotionSimpleGrid>
    );
  else return <ErrorToast errorMsg={'No support for the given activity key'} description={'Make sure to add support for the given activity key'} />;
};

export default ActivityList;