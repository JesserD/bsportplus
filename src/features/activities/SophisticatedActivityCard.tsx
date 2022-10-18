import { ExternalLinkIcon } from '@chakra-ui/icons';
import { chakra, Flex, Image, Link as ChakraLink, ListItem, Spacer, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { itemAnimationY, MotionFlex } from '../../app/Common/AnimatedComponents';
import { Activity } from '../../app/interfaces/Interfaces';
import { isOfTypeIndicator } from '../../app/interfaces/TypeChecks';
import ErrorToast from '../errors/ErrorToast';

interface Props {
    activity: Activity;
    category: keyof Activity;
}

const SophisticatedActivityCard = ({ activity, category }: Props) => {
    const { partner, logo } = activity;
    const objKeys = Object.keys(activity[category][0]);

    const containsTitleAndLink = (arr: string[]) => {
        return arr.includes('title') && arr.includes('link') ? true : false;
    };

    if (!Array.isArray(activity[category]) || (!containsTitleAndLink(objKeys) && !isOfTypeIndicator(objKeys)))
        return <ErrorToast errorMsg={`SophisticatedActivityCard does not support this key of activity [${category}] because either ${category} isn't an array or ${category} elements aren't of supported type`}
            description={`Make sure to add a new card to support ${category}`} />;

    return (
        <MotionFlex variants={itemAnimationY} maxW={'640px'} width={'full'} bg={'white'} boxShadow={'lg'}
            justifyContent={'space-between'} w={'full'} h={'full'} p={10} rounded={'2xl'}
            direction={{ base: 'column-reverse', md: 'row' }} alignItems={'center'}>
            <Flex direction={'column'} h={'inherit'} gap={2}>
                <Flex as={UnorderedList} direction={'column'} spacing={2}>
                    {//@ts-expect-error
                        containsTitleAndLink(objKeys) && activity[category].map(({ title, link }, index) => link === '' ?
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
                    {isOfTypeIndicator(objKeys) && activity.indicators.map(({ description, referenceId }, index) => 
                        <ListItem key={referenceId + index}>
                           {activity.references.find(ref => ref.id === referenceId)?.link && <ChakraLink href={activity.references.find(ref => ref.id === referenceId)?.link} isExternal _hover={{ bg: 'red.100' }}>
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

export default SophisticatedActivityCard;