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
        tabBarIcon: ({focused}) => {
          if (route.name === 'Feed') {
            return (
              <TabIcon
                name="Feed"
                Icon={FeedIcon}
                focused={focused}
                fillActive={colors.tabIconActive}
                fillInactive={colors.tabIconInactive}
              />
            );
          } else if (route.name === 'CreatePost') {
            return (
              <TabIcon
                name="CreatePost"
                Icon={CreatePostIcon}
                focused={focused}
                fillActive={colors.tabIconActive}
                fillInactive={colors.tabIconInactive}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <TabIcon
                name="Profile"
                Icon={ProfileIcon}
                focused={focused}
                fillActive={colors.tabIconActive}
                fillInactive={colors.tabIconInactive}
              />
            );
          } else if (route.name === 'Game') {
            return (
              <TabIcon
                name="Game"
                Icon={GameIcon}
                focused={focused}
                fillActive={colors.tabIconActive}
                fillInactive={colors.tabIconInactive}
              />
            );
          }
        },
      })}>
      {tabStackRoutes.map(tabRoute => (
        <Tab.Screen key={tabRoute.name} {...tabRoute} />
      ))}
    </Tab.Navigator>
  );
};
export default Tabs;
