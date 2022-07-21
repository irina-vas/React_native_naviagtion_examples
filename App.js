import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { WelcomScreen } from './screens/WelcomeScreen';
import { UserScreen } from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName='User'
        screenOptions={{
          headerStyle: { backgroundColor: '#055980' },
          headerTintColor: '#d4f0fc',
          tabBarActiveTintColor: '#055980'
        }}

        //for DRAWER
        // screenOptions={{
        //   drawerActiveBackgroundColor: '#cfc9d4',
        //   drawerActiveTintColor: '#066170',
        //   drawerStyle: { backgroundColor: '#b1dbde' },
        //   headerStyle: { backgroundColor: '#055980' },
        //   headerTintColor: '#d4f0fc',
        // }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomScreen}
          //for DRAWER
          // options={{
          //   drawerLabel: 'Welcome :P',
          //   drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
          // }}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          //for DRAWER
          // options={{
          //   drawerLabel: 'User :P',
          //   drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
          // }}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
          }}
        />
      </BottomTab.Navigator>
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
