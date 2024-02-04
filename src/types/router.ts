import type {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import type {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import {
  CreatePost,
  DeveloperTools,
  Feed,
  Game,
  Onboarding,
  Profile,
} from '@app/screens';
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

export type TabRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >
>;

export enum SCREEN_NAMES {
  ONBOARDING = 'Onboarding',
  HOME = 'Home',
  DEVELOPER_TOOLS = 'DeveloperTools',
  TABS = 'Tabs',
}

export enum TABS_STACK_NAMES {
  GAME = 'Game',
  FEED = 'Feed',
  CREATE_POST = 'CreatePost',
  PROFILE = 'Profile',
}

export type RootStackParamList = {
  [SCREEN_NAMES.DEVELOPER_TOOLS]: undefined;
  [SCREEN_NAMES.ONBOARDING]: undefined;
  [SCREEN_NAMES.TABS]: undefined;
};

export type TabStackParamList = {
  [TABS_STACK_NAMES.GAME]: undefined;
  [TABS_STACK_NAMES.FEED]: undefined;
  [TABS_STACK_NAMES.CREATE_POST]: undefined;
  [TABS_STACK_NAMES.PROFILE]: undefined;
};

type RootStackRoutesType = StackRoutesType<RootStackParamList>;
type TabStackRoutesType = TabRoutesType<TabStackParamList>;

export const rootStackRoutes: RootStackRoutesType = [
  {
    name: SCREEN_NAMES.DEVELOPER_TOOLS,
    component: DeveloperTools as FC,
    options: {
      headerShown: false,
      presentation: 'modal',
    },
  },
];

export const onboardingStackRoutes: RootStackRoutesType = [
  {
    name: SCREEN_NAMES.ONBOARDING,
    component: Onboarding as FC,
  },
];

//just tab page
export const tabsRootStackRoutes: RootStackRoutesType = [
  {
    name: SCREEN_NAMES.TABS,
    component: Tabs as FC,
  },
];

export const tabStackRoutes: TabStackRoutesType = [
  {
    name: TABS_STACK_NAMES.FEED,
    component: Feed as FC,
  },

  {
    name: TABS_STACK_NAMES.CREATE_POST,
    component: CreatePost as FC,
  },
  {
    name: TABS_STACK_NAMES.GAME,
    component: Game as FC,
  },
  {
    name: TABS_STACK_NAMES.PROFILE,
    component: Profile as FC,
  },
];

//stacks of each tab
export const ProfileTabStackRoutes: TabStackRoutesType = [
  {
    name: TABS_STACK_NAMES.PROFILE,
    component: Tabs as FC,
  },
];
export const GameTabStackRoutes: TabStackRoutesType = [
  {
    name: TABS_STACK_NAMES.GAME,
    component: Tabs as FC,
  },
];
export const FeedTabStackRoutes: TabStackRoutesType = [
  {
    name: TABS_STACK_NAMES.FEED,
    component: Tabs as FC,
  },
];
export const CreatePostTabStackRoutes: TabStackRoutesType = [
  {
    name: TABS_STACK_NAMES.CREATE_POST,
    component: Tabs as FC,
  },
];

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;
}
