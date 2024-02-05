import CreatePostIcon from '@app/assets/icons/tabs/CreatePostIcon';
import FeedIcon from '@app/assets/icons/tabs/FeedIcon';
import GameIcon from '@app/assets/icons/tabs/GameIcon';
import ProfileIcon from '@app/assets/icons/tabs/ProfileIcon';
import {TabIcon} from '@app/components';
import {useTheme} from '@app/hooks';
import {TabStackParamList, tabStackRoutes} from '@app/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';

const tabIconSwitch = (tabName: string) => {
  switch (tabName) {
    case 'Feed':
      return FeedIcon;
    case 'CreatePost':
      return CreatePostIcon;
    case 'Profile':
      return ProfileIcon;
    case 'Game':
      return GameIcon;
  }
};

const Tabs: React.FC = () => {
  const Tab = createBottomTabNavigator<TabStackParamList>();
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: colors.tabsBackground,
        },
        tabBarStyle: {
          backgroundColor: colors.tabsBackground,
          height: 80,
          borderTopWidth: StyleSheet.hairlineWidth,
        },
        tabBarIcon: ({color}) => {
          return <TabIcon Icon={tabIconSwitch(route.name)} fill={color} />;
        },
        tabBarActiveTintColor: colors.tabIconActive,
        tabBarInactiveTintColor: colors.tabIconInactive,
      })}>
      {tabStackRoutes.map(tabRoute => (
        <Tab.Screen key={tabRoute.name} {...tabRoute} />
      ))}
    </Tab.Navigator>
  );
};
export default Tabs;
