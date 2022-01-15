import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { AuthContextProvider } from 'src/contexts/AuthContext';
import { Navigation } from 'src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
