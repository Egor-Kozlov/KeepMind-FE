import {DeveloperTool} from '@app/components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';

import {
  RootStackParamList,
  rootUnauthorizedStackRoutes,
  SCREEN_NAMES,
} from '@app/types';
const RootStack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  const navigationRef = React.useRef(null);
  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {rootUnauthorizedStackRoutes.map(stackRoute => (
            <RootStack.Screen key={stackRoute.name} {...stackRoute} />
          ))}
        </RootStack.Navigator>
      </NavigationContainer>
      <DeveloperTool
        onPress={() =>
          navigationRef.current?.navigate(SCREEN_NAMES.DEVELOPER_TOOLS)
        }
      />
    </View>
  );
};

export default Router;
