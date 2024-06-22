import React from 'react'
import { Button, Text, View } from 'react-native'
import { styled } from 'nativewind';
import { useAppNavigation } from '../utils/useAppNavigation';

const StyledView = styled(View)
const StyledText = styled(Text)

const Detailed = () => {
    const navigation = useAppNavigation();

    return (
        <StyledView className='flex-1 justify-center items-center'>
            <StyledText>Detailed</StyledText>
            <Button title='Back to home' onPress={() => navigation.goBack()} />
        </StyledView>
    )
}

export default Detailed
