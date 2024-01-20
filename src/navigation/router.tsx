import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList, rootUnauthorizedStackRoutes} from '../types/router';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {rootUnauthorizedStackRoutes.map(stackRoute => (
          <RootStack.Screen key={stackRoute.name} {...stackRoute} />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
