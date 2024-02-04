import {TabStackParamList, tabStackRoutes} from '@app/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const Tabs: React.FC = () => {
  const Tab = createBottomTabNavigator<TabStackParamList>();

  return (
    <Tab.Navigator>
      {tabStackRoutes.map(tabRoute => (
        <Tab.Screen key={tabRoute.name} {...tabRoute} />
      ))}
    </Tab.Navigator>
  );
};
export default Tabs;
