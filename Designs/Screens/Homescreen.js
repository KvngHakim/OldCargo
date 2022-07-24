import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../Parts/Header';
import { Menu } from '../Parts/Menu';
import { Purchases } from './Purchases';
import { Profile } from './Profile';
import { Settings } from './settings';
import { Chats } from './chats';

function Homescreen({ navigation }) {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.brandL}>

                    <Text style={styles.brandText}>OldCargo</Text>
                </View>
                <TouchableOpacity style={styles.btnTouch}
                    onPress={() =>
                        navigation.navigate('Signin')
                    }

                >
                    <Text style={styles.btn} >Sign in</Text>
                </TouchableOpacity>
            </View>
            )
            <Header />
            {/* <Menu /> */}




        </View>
    )
}


const Tab = createBottomTabNavigator();

export function Major() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={Homescreen} options={{ headerShown: false }} />
            <Tab.Screen name='Purchases' component={Purchases} />
            <Tab.Screen name='Chat Box' component={Chats} />
            <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            <Tab.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    brandText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingTop: 5,
        paddingLeft: 15,
        color: 'deep blue'
    },
    brandL: {
        flexDirection: 'row',
    },
    btn: {
        paddingTop: 10,
        paddingRight: 10
    },
    btnTouch: {

    }
})