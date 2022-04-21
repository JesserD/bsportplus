import { Link, LinkProps } from '@chakra-ui/react';
import React from 'react';

const SkipToContent = (Props: LinkProps) => {
  return (
    <Link {...Props} href="#maincontent" className="skip"><strong>Skip to content.</strong></Link>
  );
};


export default SkipToContent;