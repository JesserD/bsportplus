import { BoxProps, Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';



const Ribbon = (Props: PropsWithChildren<BoxProps>) => {

    return (
        <Box {...Props} top={'20px'} pos={'relative'} w={'fit-content'}
            px={3} py={2} roundedRight={'3xl'}
            boxShadow={'-1px 2px 3px rgba(0, 0, 0, .3)'}
            fontFamily={'sans-serif'} fontWeight={'bold'} color={'black'}
        > {Props.children}</Box >
    );

};

export default Ribbon;