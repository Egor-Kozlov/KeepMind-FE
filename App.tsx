import React from 'react';
import {View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import './src/localization/i18n';
import Router from './src/navigation/router';
import {store} from './src/store/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Router />
      </View>
    </Provider>
  );
}

export default App;
