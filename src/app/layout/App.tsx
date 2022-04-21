import { Image, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import NavBar from './NavBar';
import PageRoutes from './PageRoutes';
import SkipToContent from './SkipToContent';

const App = () => {
  return (
    <Flex direction={'column'} justifyContent={'center'}>
      <SkipToContent/>
      <Image src={'/assets/BsportWallpaper.png'} alt='' />
      <NavBar />
        <VStack as={'main'} id={'maincontent'}>
          <PageRoutes />
        </VStack>
    </Flex>
  );
};      

export default App;
