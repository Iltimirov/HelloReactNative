import 'react-native-gesture-handler'
import React from 'react'
import {Platform, StatusBar} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import {Counter, SliderExample, Colors} from './src/modules'

const Drawer = createDrawerNavigator()

export const App: React.FC = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Counter" component={Counter} />
      <Drawer.Screen name="Slider" component={SliderExample} />
    </Drawer.Navigator>
  </NavigationContainer>
)

// set transparent status bar for android
if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor(Colors.TRANSPARENT)
}
