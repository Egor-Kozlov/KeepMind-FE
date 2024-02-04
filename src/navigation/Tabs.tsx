import CreatePostIcon from '@app/assets/icons/tabs/CreatePostIcon';
import FeedIcon from '@app/assets/icons/tabs/FeedIcon';
import GameIcon from '@app/assets/icons/tabs/GameIcon';
import ProfileIcon from '@app/assets/icons/tabs/ProfileIcon';
import {TabIcon} from '@app/components';
import {useTheme} from '@app/hooks';
import {TabStackParamList, tabStackRoutes} from '@app/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const Tabs: React.FC = () => {
  const Tab = createBottomTabNavigator<TabStackParamList>();
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          console.log('11color: ', color);
          if (route.name === 'Feed') {
            return <TabIcon Icon={FeedIcon} fill={color} />;
          } else if (route.name === 'CreatePost') {
            return <TabIcon Icon={CreatePostIcon} fill={color} />;
          } else if (route.name === 'Profile') {
            return <TabIcon Icon={ProfileIcon} fill={color} />;
          } else if (route.name === 'Game') {
            return <TabIcon Icon={GameIcon} fill={color} />;
          }
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
