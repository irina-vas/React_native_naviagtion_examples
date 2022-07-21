import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { WelcomScreen } from './screens/WelcomeScreen';
import { UserScreen } from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='User'
        screenOptions={{
          drawerActiveBackgroundColor: '#cfc9d4',
          drawerActiveTintColor: '#066170',
          drawerStyle: { backgroundColor: '#b1dbde' },
          headerStyle: { backgroundColor: '#055980' },
          headerTintColor: '#d4f0fc',
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomScreen}
          options={{
            drawerLabel: 'Welcome :P',
            drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: 'User :P',
            drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
