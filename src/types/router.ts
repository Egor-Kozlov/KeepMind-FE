import type {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {Onboarding} from '@app/screens';
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
}

export type RootStackParamList = {
  [SCREEN_NAMES.ONBOARDING]: undefined;
  [SCREEN_NAMES.HOME]: undefined;
};

type RootStackRoutesType = StackRoutesType<RootStackParamList>;

export const rootUnauthorizedStackRoutes: RootStackRoutesType = [
  {
    name: SCREEN_NAMES.ONBOARDING,
    component: Onboarding as FC,
  },
];

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;
}
