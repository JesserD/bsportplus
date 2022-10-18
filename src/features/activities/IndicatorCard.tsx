import { ExternalLinkIcon } from '@chakra-ui/icons';
import { chakra, Flex, Image, Link as ChakraLink, ListItem, Spacer, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { itemAnimationY, MotionFlex } from '../../app/Common/AnimatedComponents';
import { Activity } from '../../app/interfaces/Interfaces';
import ErrorToast from '../errors/ErrorToast';
import { isOfTypeIndicator } from '../../app/interfaces/TypeChecks';

interface Props {
    activity: Activity;
    category: keyof Activity;
}

const IndicatorCard = ({ activity, category }: Props) => {
    const { partner, logo } = activity;

    if (!Array.isArray(activity[category]) || !isOfTypeIndicator(Object.keys(activity[category][0])))
        return <ErrorToast errorMsg={`IndicatorCard does not support this key of activity [${category}] because ${category} isn't an array of indicators`}
            description={`Make sure to add a new card to support ${category}`} />;

    return (
        <MotionFlex variants={itemAnimationY} maxW={'640px'} width={'full'} bg={'white'} boxShadow={'lg'}
            justifyContent={'space-between'} w={'full'} h={'full'} p={10} rounded={'2xl'}
            direction={{ base: 'column-reverse', md: 'row' }} alignItems={'center'}>
            <Flex direction={'column'} h={'inherit'} gap={2}>
                <Flex as={UnorderedList} direction={'column'} spacing={2}>
                    {
                        activity.indicators.map(( {description, referenceId}, index) => 
                            <ListItem key={ index}>
                                {activity.references.find(ref => ref.id === referenceId) && <ChakraLink href={activity.references.find(ref => ref.id === referenceId)?.link} isExternal _hover={{ bg: 'red.100' }}>
                                    {description} <ExternalLinkIcon mx='2px' />
                                </ChakraLink>}
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

export default IndicatorCard;