import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Detailed from '../pages/Detailed';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
    return <NavigationContainer independent>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => {
                    return <View>
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} />
                    </View>
                }
            }} />
            <Tab.Screen name='Detailed' component={Detailed} options={{
                tabBarBadge: 10,
                tabBarIcon: ({ focused }) => {
                    return <View>
                        <Ionicons name={focused ? 'settings' : 'settings-outline'} size={24} />
                    </View>
                }
            }} />
        </Tab.Navigator>
    </NavigationContainer>
}