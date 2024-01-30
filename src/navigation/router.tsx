import {DeveloperTool} from '@app/components';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {
  RootStackParamList,
  SCREEN_NAMES,
  rootAuthorizedStackRoutes,
  rootUnauthorizedStackRoutes,
} from '@app/types';

const Router: React.FC = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const navigationRef = React.useRef<any>(null);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    console.log('USER', user);
  }, [user]);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {user
            ? rootAuthorizedStackRoutes.map(stackRoute => (
                <RootStack.Screen key={stackRoute.name} {...stackRoute} />
              ))
            : rootUnauthorizedStackRoutes.map(stackRoute => (
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
