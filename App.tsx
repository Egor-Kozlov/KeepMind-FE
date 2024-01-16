import React from 'react';
import {View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Router from './src/navigation/router';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{flex: 1}}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <Router />
    </View>
  );
}

export default App;
