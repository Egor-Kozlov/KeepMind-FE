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
import Tabs from '../navigation/Tabs';

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
  GAME = 'Game',
  FEED = 'Feed',
  PROFILE = 'Profile',
  TABS = 'Tabs',
}

export enum TABS_STACK_NAMES {
  GAME = 'Game',
  FEED = 'Feed',
  PROFILE = 'Profile',
}

export type RootStackParamList = {
  [SCREEN_NAMES.ONBOARDING]: undefined;
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.DEVELOPER_TOOLS]: undefined;
  [SCREEN_NAMES.GAME]: undefined;
  [SCREEN_NAMES.FEED]: undefined;
  [SCREEN_NAMES.PROFILE]: undefined;
  [SCREEN_NAMES.TABS]: undefined;
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

export const rootAuthorizedStackRoutes: RootStackRoutesType = [
  {
    name: SCREEN_NAMES.TABS,
    component: Tabs as FC,
    options: {
      headerShown: false,
    },
  },
];

// export const FeedStackRoutes: RootStackRoutesType = [
//   {
//     name: SCREEN_NAMES.FEED,
//     component: Feed as FC,
//   },
// ];

// export const ProfileStackRoutes: RootStackRoutesType = [
//   {
//     name: SCREEN_NAMES.PROFILE,
//     component: Profile as FC,
//   },
// ];

// export const rootTabsRoutes: RootStackRoutesType = [
//   {
//     name: TABS_STACK_NAMES.GAME,
//     component: Game as FC,
//   },
//   {
//     name: TABS_STACK_NAMES.FEED,
//     component: Feed as FC,
//   },
//   {
//     name: TABS_STACK_NAMES.PROFILE,
//     component: Profile as FC,
//   },
// ];

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;
}
