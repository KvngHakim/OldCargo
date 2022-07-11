import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homescreen } from '../../Designs/Screens/Homescreen';
import { Intro } from '../../Designs/Screens/intro';
import { Signin } from '../../Designs/Screens/signnin';

const Cargo = createNativeStackNavigator();

export function AuthorNavigation() {
    return(
        <Cargo.Navigator initialRouteName='Intro' screenOptions={{headerShown:true}}>
            <Cargo.Screen name='Home' component={Homescreen} />
            <Cargo.Screen name='Intro' component={Intro} />
            <Cargo.Screen name='Signin' component={Signin} />
        </Cargo.Navigator>
    )
}