import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import GalleryScreen from '../screens/GalleryScreen';
import PhotoScreen from '../screens/PhotoScreen';
import {RoutesNames} from '../types/RoutesNames.enum';
import Colors from '../constants/theme';

export type RootStackParamList = {
  Gallery: undefined;
  Photo: {photoUrl: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  cardStyle: {
    backgroundColor: Colors.dark200,
  },
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.white,
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={RoutesNames.Gallery} component={GalleryScreen} />
        <Stack.Screen
          name={RoutesNames.Photo}
          component={PhotoScreen}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
