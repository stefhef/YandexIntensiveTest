import React, {FunctionComponent} from 'react';

import {Center, Spinner} from '@chakra-ui/react';

export const BaseSpinner: FunctionComponent = () => {
    return (
        <Center height={'75vh'}>
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.400"
            size="md"
        />
        </Center>
    );
}
