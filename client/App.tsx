import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContextProvider } from 'src/contexts/AuthContext';
import { Navigation } from 'src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
