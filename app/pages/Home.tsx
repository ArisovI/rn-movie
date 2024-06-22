import { Text, View, Button } from "react-native"
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { useAppNavigation } from "../utils/useAppNavigation";

const StyledView = styled(View)
const StyledText = styled(Text)


const Home = () => {
    const navigation = useAppNavigation();


    return (
        <StyledView className="flex-1 items-center justify-center">
            <StyledText className="text-slate-800">
                HOME HOM
            </StyledText>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Onboarding', {
                    screen: 'Detailed'
                })}
            />
        </StyledView>
    )
}
export default withExpoSnack(Home) 