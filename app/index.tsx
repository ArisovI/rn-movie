import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigations/app.navigation';
import { TabNavigation } from './navigations/tab.navigation';

export default function HomeScreen() {
  return (
    // <NavigationContainer independent>
    //   <RootNavigator />
    // </NavigationContainer>
    <TabNavigation />
  );
}