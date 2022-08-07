import { StyleSheet, Text, View, StatusBar, ScrollView, Image, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Menu } from '../Parts/Menu';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { Categories } from './Categories';
import { Top } from './Top';
import { Topsales } from './Topsales';
// import {useFonts, Pacifico400Regular,} from '@expo-google-fonts/Pacifico';


export function Header(navigation) {
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

            <ScrollView style={styles.categoryParent}>
                <View style={styles.newEx}>
                    <TouchableOpacity style={styles.categoryItems}
                        onPress={() => navigation.navigate('Ad page')}
                    >
                        <Image
                            source={require('../Images/icons/more.png')}
                            style={{ width: 100, height: 100, backgroundColor: 'red' }}
                        />
                        <Text style={styles.categoryItemText}>POST AD</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/clothes.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Clothes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/gadgets.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Gadgets</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.newEx}>
                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/houses.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Properties</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/iphones.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Iphones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/home appliances.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Home Appliances</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.newEx}>
                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/furniture.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Furniture</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/pets.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Pets</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/necklaces.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Neck Accessories</Text>
                    </TouchableOpacity>


                </View>


                <View style={styles.newEx}>
                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/kitchenUtensils.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Kitchen Utensils</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/shoes.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Shoes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/toys.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Toys</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.newEx}>
                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/watches.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Wrist Watches</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/soundSystems.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Sound Systems</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/phoneAccessories.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Phone Accessories</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.newEx}>
                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/houses.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Properties</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/iphones.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Iphones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryItems}>
                        <Image
                            source={require('../Images/photos/home appliances.jpg')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.categoryItemText}>Home Appliances</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>


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
        width: 320


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
        height: 40,
        marginLeft: 10
    },
    categoryParent: {
        alignContent: 'center',
    },
    newEx: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center'
    },
    categoryItemText: {
        color: 'dark gray',
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    },
    categoryItems: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }

})

