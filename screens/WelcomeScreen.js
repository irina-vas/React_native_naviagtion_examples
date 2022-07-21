import { Text, View, StyleSheet } from 'react-native';

export const WelcomScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the text of the 
        <Text style={styles.highlight}> WelcomScreen</Text> component!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  highlight: {
    color: '#0f485c',
    fontSize: 36,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#196f8c',
  }
});