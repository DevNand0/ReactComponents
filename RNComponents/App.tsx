import 'react-native-gesture-handler';
import React from 'react'
import { StackNavigator } from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/themeContext/themeContext';



const App = ({children}:any) => {
  return (
    <AppState>
        <StackNavigator/>
    </AppState>
  )
}
//SE CREA UN STATE PARA EL CONTEXTO
const AppState = ({children}:any)=>{
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;
