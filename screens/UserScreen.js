import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native';

export const UserScreen = ({ navigation }) => {
  const openDrawerHandler = () => {
    navigation.toggleDrawer()
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>userScreen</Text>
      <Button title="Open drawer" onPress={openDrawerHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#196f8c',
  }
});