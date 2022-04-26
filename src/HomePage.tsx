import {
    Stack, Flex, Heading, Text, Button, Icon, IconProps,
    useMediaQuery
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { itemAnimationX, MotionFlex } from './app/Common/AnimatedComponents';

export default function CallToActionWithVideo() {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const Ref = useRef<HTMLDivElement>(null!);
    useEffect(() => {
        if(isLargerThan768) Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, [isLargerThan768]);
    return (
        <MotionFlex maxW={'70%'} variants={itemAnimationX} initial={'hidden'} whileInView='visible' viewport={{ once: true }}>
            <Flex ref={Ref} align={'center'} py={{ base: 5, md: 18 }} direction={{ base: 'column', md: 'row' }} justifyContent={'center'} textAlign={'center'}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }} p={5} bg={'white'} rounded={'3xl'} boxShadow={'2xl'}>
                    <Heading as='h1' lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text as={'span'}>
                            Bsport+ Project<br />
                        </Text>

                        <Text as={'span'} color={'red.500'}>
                            An active life style!
                        </Text>
                    </Heading>
                    <Text color={'black'}>
                        B-SPORT+ project is addressed at people with disabilities and all
                        those who work with them. B-SPORT+ tackles the need of better equip
                        facilitators and create collaborative mechanisms across institutions and bodies,
                        seeking to eliminate inequalities between people with disabilities and people
                        without them in the practice of sports and physical activity.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        justifyContent={'center'}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            as={Link}
                            to='/Disabilities'
                            rounded={'full'}
                            color={'black'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'red'}
                            bg={'red.500'}
                            _hover={{ bg: '#DE7878' }}>
                            Get started
                        </Button>
                    </Stack>
                </Stack>
                
            </Flex>
        </MotionFlex>
    );
}

export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox='0 0 578 440'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
                fill='currentColor'
            />
        </Icon>
    );
};