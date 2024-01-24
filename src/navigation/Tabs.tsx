import {rootTabsRoutes} from '@app/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      {rootTabsRoutes.map(tabRoute => (
        <Tab.Screen key={tabRoute.name} {...tabRoute} />
      ))}
    </Tab.Navigator>
  );
};
export default Tabs;
