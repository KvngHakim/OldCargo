import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Major} from '../../Designs/Screens/Homescreen';
import { Intro } from '../../Designs/Screens/Intro';
import { Signin } from '../../Designs/Screens/Signnin';
import { postAd } from '../../Designs/Screens/Postad';
import { AdInfo } from '../../Designs/Screens/Adinfo';
import { Departments } from '../../Designs/Screens/Departments';

const Stack = createNativeStackNavigator();

export function AuthorNavigation() {
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
            <Stack.Screen name='Home' component={Major} />
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Signin' component={Signin} />
            <Stack.Screen name='AdPage' component={postAd} />
            <Stack.Screen name='AdInfo' component={AdInfo} />
            <Stack.Screen name='Departments' component={Departments} />
        </Stack.Navigator>

        
    )
}