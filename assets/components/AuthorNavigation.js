import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Major} from '../../Designs/Screens/Homescreen';
import { Intro } from '../../Designs/Screens/Intro';
import { Signin } from '../../Designs/Screens/Signnin';

const Cargo = createNativeStackNavigator();

export function AuthorNavigation() {
    return(
        <Cargo.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
            <Cargo.Screen name='Home' component={Major} />
            <Cargo.Screen name='Intro' component={Intro} />
            <Cargo.Screen name='Signin' component={Signin} />
        </Cargo.Navigator>

        
    )
}