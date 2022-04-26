import { ExternalLinkIcon } from '@chakra-ui/icons';
import { chakra, Flex, Image, Link as ChakraLink, ListItem, Spacer, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { itemAnimationY, MotionFlex } from '../../app/Common/AnimatedComponents';
import { Activity } from '../../app/interfaces/Interfaces';
import ErrorToast from '../errors/ErrorToast';

interface Props {
    activity: Activity;
    category: keyof Activity;
}

const SophisticatedActivityCard = ({ activity, category }: Props) => {
    const { partner, logo } = activity;

    if (!Array.isArray(activity[category]) || Object.keys(activity[category][0]).length !== 2)
        return <ErrorToast errorMsg='SophisticatedActivityCard does not support this key of activity'
            description='Make sure to add a new card to support the given key of activity' />;

    return (
        <MotionFlex variants={itemAnimationY} maxW={'640px'} width={'full'} bg={'white'} rounded={'2xl'} boxShadow={'lg'}
            justifyContent={'space-between'} w={'full'} h={'full'} p={10}
            direction={{ base: 'column-reverse', md: 'row' }} alignItems={'center'}>
            <Flex direction={'column'} h={'inherit'} gap={2}>
                <Flex as={UnorderedList} direction={'column'} spacing={2}>
                    {//@ts-expect-error
                        activity[category].map(({ title, link }, index) => link === '' ?
                            <ListItem key={link + index}>
                                {title}
                            </ListItem>
                            :
                            <ListItem key={link + index}>
                                <ChakraLink href={link} isExternal _hover={{ bg: 'red.100' }}>
                                    {title} <ExternalLinkIcon mx='2px' />
                                </ChakraLink>
                            </ListItem>
                        )}
                </Flex>
                <Spacer />
                <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14} >
                    {partner}
                </chakra.p>
            </Flex>
            <Image src={process.env.PUBLIC_URL + logo} height={'100px'} w={'100px'} alt='' m={{ base: '0 0 35px 0', md: '0 0 0 50px' }} />
        </MotionFlex>
    );
};

export default SophisticatedActivityCard;