import { Image, Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import NavBar from './NavBar';
import PageRoutes from './PageRoutes';
import SkipToContent from './SkipToContent';
import Data from '../../data/BsportPlus.json';
import { MenuItem } from '../interfaces/Interfaces';

const App = () => {
  const Paths = GetPaths(Data.Menu);

  return (
    <Flex direction={'column'} justifyContent={'center'} w={'full'} bgGradient={'linear(to-l, #ee9ca7, #ffdde1)'}>
      <SkipToContent />
      <Image src={'/assets/BsportWallpaper.jpg'} alt='' />
      <NavBar />
      <VStack as={'main'} id={'maincontent'} my={12} >
        <PageRoutes paths={Paths} />
        <Image alt='' src={'../assets/Erasmus-EU-logo.svg'} />
      </VStack>
    </Flex>
  );
};

const GetPaths = (Menu: MenuItem[]) => {
  const Paths: Partial<MenuItem>[] = [];
  for (let i = 0; i < Menu.length; i++) {
    const element = Menu[i];
    if (element.href !== undefined) Paths.push({ href: element.href, content: element.content });
    else if (element.children !== undefined)
      for (let j = 0; j < element.children.length; j++) {
        const element2 = element.children[j];
        if (element2.href !== undefined) Paths.push({ href: element2.href, content: element2.content });
      }
  }
  return Paths;
};

export default App;
