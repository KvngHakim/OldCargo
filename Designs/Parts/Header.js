import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Menu } from '../Parts/Menu';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { Categories } from './Categories';
import { Top } from './Top';
import { Topsales } from './Topsales';
// import {useFonts, Pacifico400Regular,} from '@expo-google-fonts/Pacifico';


export function Header() {
    // let [FontsLoaded] = useFonts({
    //     Pacifico_400Regular
    // });
    return (
        <View >
            
           
            
            <View style={styles.searchCat}>
                <Text style={[styles.searchText, { fontSize: 40 }]}>Find and Trade </Text>
                <View style={styles.firstSearch}>
                    <Image source={require('../Images/icons/search.png')}
                        style={styles.searchIcons}
                    />
                    <TextInput
                        style={styles.searchBar}
                    />
                </View>
            </View>
            <Text style={styles.categoryHeadingText}>Categories</Text>

            <Categories />


            <View>
                <Text style={styles.categoryHeadingText}>Top Deals Today</Text>

                <Topsales />
            </View>

            
        </View>


    )
}
const styles = StyleSheet.create({
    signInBar: {
        flexDirection: 'row',
        marginLeft: 50,
        marginTop: 50,

    },
    firstSearch: {
        flexDirection: 'row',

    },
    searchBar: {
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        width: '100%'

    },
    searchCat: {
        alignContent: 'center',
        justifyContent: 'center',

    },
    searchText: {
        textAlign: 'center',
        color: 'skyblue'

    },
 
    categoryHeadingText: {
        fontSize: 40,
        marginTop: 20,
        marginBottom: 15,
        color: 'blue',
        fontFamily: 'Overpass_200ExtraLight'
    },
    categoryItems: {
        width: 120,
        height: 120,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    categoryItemText: {
        color: '#1a555e',
        fontWeight: 'bold',
        fontSize: 20
    },
    searchIcons: {
        width: 40,
        height: 40
    }

})

