import { chakra, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { itemAnimationY, MotionFlex } from '../../app/Common/AnimatedComponents';
import Ribbon from '../../app/Common/Ribbon';
import { Activity } from '../../app/interfaces/Interfaces';

interface Props {
  activity: Activity;
  category: string; // keyof Activity
}

const SimpleActivityCard = ({ activity, category }: Props) => {
  const { partner, link, logo } = activity;
  const CategoryColor = new Map<string, string>();
  const Colors = ['#DA70D6', '#EF7171', '#FFD700', '#7B68EE', '#ADFF2F', '#BDB76B', '#32CD32'];
  const ActivityKeys: string[] = [];
  Object.keys(activity).forEach(key => {
    //@ts-expect-error
    if (typeof (activity[key]) === 'string' &&
      key !== 'logo' &&
      key !== 'link' &&
      key !== 'partner')
      ActivityKeys.push(key);
  });
  ActivityKeys.forEach((key, index) => CategoryColor.set(key, Colors[index]));

  const FirstLetterToUpperCase = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const AddSpaceBeforeUpperCase = (word: string) => {
    return word.replace(/([A-Z])/g, ' $1').trim();
  };

  const NormaliseString = (str :string) => {
    str = AddSpaceBeforeUpperCase(str);
    str = FirstLetterToUpperCase (str);
    return str;
  };
  console.log(ActivityKeys.length);
  return (
    <MotionFlex variants={itemAnimationY} maxW={'640px'} width={'full'} bg={'white'} rounded={'2xl'} boxShadow={'lg'} >
      <Link href={process.env.PUBLIC_URL + link} w={'full'} _hover={{ bg: 'red.200', }} rounded={'2xl'}>
        <Ribbon bg={CategoryColor.get(category)}>{NormaliseString(category)}</Ribbon>
        <Flex justifyContent={'space-between'} w={'full'} p={10} rounded={'2xl'}
          direction={{ base: 'column-reverse', md: 'row' }} alignItems={'center'}
        >
          <Flex direction={'column'} textAlign={'left'} justifyContent={'space-between'}>
            <chakra.p fontFamily={'Inter'} fontWeight={'medium'} fontSize={'20px'} style={{ color: 'black' }} pb={4}>
              {//@ts-expect-error 
                activity[category]}
            </chakra.p>
            <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
              {partner}
            </chakra.p>
          </Flex>
          <Image src={process.env.PUBLIC_URL + logo} height={'100px'} w={'100px'} alt='' />
        </Flex>
      </Link>
    </MotionFlex>
  );
};

export default SimpleActivityCard;