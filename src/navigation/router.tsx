import {DeveloperTool} from '@app/components';
import {StorageKeys} from '@app/utils/mmkv';
import analytics from '@react-native-firebase/analytics';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {useMMKVString} from 'react-native-mmkv';

import {
  RootStackParamList,
  SCREEN_NAMES,
  rootAuthorizedStackRoutes,
  rootUnauthorizedStackRoutes,
} from '@app/types';

const Router: React.FC = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const navigationRef = React.useRef<any>(null);
  const routeNameRef =
    React.useRef<ReturnType<typeof navigationRef.current.getCurrentRoute>>(
      null,
    );

  const [onboardingCompleted] = useMMKVString(StorageKeys.onboardingCompleted);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          //for screen tracking
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        }}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!onboardingCompleted
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
