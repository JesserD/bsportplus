import { chakra, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import {  } from 'react-router-dom';
import { itemAnimationY, MotionFlex } from '../../app/Common/AnimatedComponents';
import { Activity } from '../../app/interfaces/Interfaces';

interface Props {
  activity: Activity;
  category: string; // keyof Activity
}

const SimpleActivityCard = ({ activity, category }: Props) => {
  const { partner, link, logo } = activity;
  
  return (
    <MotionFlex variants={itemAnimationY} maxW={'640px'} width={'full'} bg={'white'} rounded={'2xl'} boxShadow={'lg'}>
      <Flex as={'a'} href={link} justifyContent={'space-between'} w={'full'} h={'full'} _hover={{ bg: 'red.200', }} p={10} rounded={'2xl'}  boxShadow={'lg'}
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
        <Image src={logo} height={'100px'} w={'100px'} alt='' m={{ base: '0 0 35px 0', md: '0 0 0 50px' }} />
      </Flex>
    </MotionFlex>
  );
};

export default SimpleActivityCard;