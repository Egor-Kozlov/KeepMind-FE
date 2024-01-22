import type {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {DeveloperTools, Onboarding} from '@app/screens';
import type {
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/core';
import type {FC} from 'react';

export type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  >
>;

export enum SCREEN_NAMES {
  ONBOARDING = 'Onboarding',
  HOME = 'Home',
  DEVELOPER_TOOLS = 'DeveloperTools',
}

export type RootStackParamList = {
  [SCREEN_NAMES.ONBOARDING]: undefined;
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.DEVELOPER_TOOLS]: undefined;
};

type RootStackRoutesType = StackRoutesType<RootStackParamList>;

export const rootUnauthorizedStackRoutes: RootStackRoutesType = [
  {
    name: SCREEN_NAMES.ONBOARDING,
    component: Onboarding as FC,
  },
  {
    name: SCREEN_NAMES.DEVELOPER_TOOLS,
    component: DeveloperTools as FC,
    options: {
      headerShown: false,
      presentation: 'modal',
    },
  },
];

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;
}
