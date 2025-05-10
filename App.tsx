import { StyleSheet, View } from 'react-native';
import ScalingStar from './components/ScalingStar';

export default function App() {
  return (
    <View style={styles.container}>
      <ScalingStar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
