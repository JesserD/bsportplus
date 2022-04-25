import { useToast, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

interface Props {
    errorMsg : string;
    description: string;
}

const ErrorToast = ({errorMsg, description}: Props) => {
    const toast = useToast();
    console.error(`${errorMsg} ${description}`); 
    return (
        <Wrap>
            <WrapItem>
                {toast({ title: errorMsg, status: 'error', description: description, isClosable: true, duration: 9000 })}
            </WrapItem>
        </Wrap>
    );
};

export default ErrorToast;