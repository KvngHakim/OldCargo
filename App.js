import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import { Homescreen } from './Designs/Screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { AuthorNavigation } from './assets/components/AuthorNavigation';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthorNavigation />
      </NavigationContainer>

      {/* <ImageBackground
        source={require('./Designs/Images/photos/BackgroundPic.jpg')}
        style={styles.backPic}
       >
        <Homescreen />
       </ImageBackground> */}
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#798086',
    marginTop:StatusBar.currentHeight

  },
  backPic: {
    flex: 1
  }
});
