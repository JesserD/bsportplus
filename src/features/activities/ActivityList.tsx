import React from 'react';
import { animationFlex, MotionSimpleGrid } from '../../app/Common/AnimatedComponents';
import { Activity, ActivityKey } from '../../app/interfaces/Interfaces';
import SimpleActivityCard from './SimpleActivityCard';
import SopisticatedActivityCard from './SophisticatedActivityCard';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { NormaliseString } from '../../app/utilities/StringManipulation';
interface Props {
  category?: keyof Activity;
  categories?: (keyof Activity)[];
  activities: Activity[];
}
const ActivityList = ({ categories, category, activities }: Props) => {
  const ReferToArray = (arr: (keyof Activity)[]) => {
    let result = false;
    arr.forEach(e => { if (Array.isArray(activities[0][e])) result = true; });
    return result;
  };
    return (
      <Flex direction={'column'} gap={10} justifyContent={'center'}>

        <Flex direction={'column'} bg={'white'} boxShadow={'lg'} p={6} textAlign={'center'} gap={3}>
          <Heading as='h2' mx={'auto'} fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
            {category && NormaliseString(category)}
            {categories && 'Random Categories'}
          </Heading>
          {category === ActivityKey.successStories &&
            <Text lineHeight={1.1} fontWeight={600} color={'red.500'} mx={'auto'} fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              Here you will find existing practices, stories, programmes that showcase best practice
            </Text>}
        </Flex>

        <MotionSimpleGrid variants={animationFlex} initial={'hidden'} animate={'visible'}
          gap={8} columns={{ base: 1, md: 2 }}>
          {(category !== undefined && Array.isArray(activities[0][category])) &&
            activities.map((activity, index) => <SopisticatedActivityCard key={activity.title + index} activity={activity} category={category} />)}
          {(category !== undefined && typeof activities[0][category] === 'string') && activities.map((activity, index) => <SimpleActivityCard key={activity.title + index} activity={activity} category={category && category} />)}
          {(categories !== undefined && !ReferToArray(categories)) && activities.map((activity, index) => <SimpleActivityCard key={activity.title + index} activity={activity} category={categories[index]} />)}
        </MotionSimpleGrid>

      </Flex>
    );
};

export default ActivityList;