import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../Parts/Header';
import { Menu } from '../Parts/Menu';
import { Purchases } from './Purchases';
import { Profile } from './Profile';
import { Settings } from './settings';
import { Chats } from './chats';
import { Ionicons } from '@expo/vector-icons';
import { store } from '../../assets/components/data.js';


const data = {
    Categories: [
        { name: 'Clothes', id: '1', thumbnail: 'https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Shoes', id: '2', thumbnail: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Home Appliances', id: '3', thumbnail: 'https://images.pexels.com/photos/3637728/pexels-photo-3637728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Electronic Gadgets', id: '4', thumbnail: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Mobile Devices', id: '5', thumbnail: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Automobiles', id: '6', thumbnail: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Houses', id: '7', thumbnail: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ],
    topDeals: [
        { name: 'Toyota Corolla', id: '8', note: 'Perfect working condition, low gas milage', thumbnail: 'https://images.pexels.com/photos/1683519/pexels-photo-1683519.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { name: 'iphone 13', id: '9', note: 'Never been reapired, 6months old, cracked screen', thumbnail: 'https://images.pexels.com/photos/9555097/pexels-photo-9555097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Air force', id: '10', note: 'Never worn, still in package, 2 weeks old', thumbnail: 'https://images.pexels.com/photos/8979071/pexels-photo-8979071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Washing Machine', id: '11', note: 'broken dryer, mid-condiiton, 1year old', thumbnail: 'https://images.pexels.com/photos/3935334/pexels-photo-3935334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Macbook Pro', id: '12', note: '8-core CPU with 4 performance cores and 4 efficiency cores, Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW, 3 months old', thumbnail: 'https://images.pexels.com/photos/1187692/pexels-photo-1187692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    ]
}

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
                    <Text style={styles.btn1} >Sign in</Text>
                </TouchableOpacity>
            </View>


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
                            onPress={() => navigation.navigate('AdPage')}
                        >
                            <Image
                                source={require('../Images/icons/more.png')}
                                style={{ width: 100, height: 100, backgroundColor: 'red' }}
                            />
                            <Text style={styles.categoryItemText}>POST AD</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                            onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Clothes,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/clothes.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Clothes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                             onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Gadgets,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/gadgets.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Gadgets</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.newEx}>
                        <TouchableOpacity style={styles.categoryItems}
                          onPress={() =>
                            navigation.navigate('Departments', {
                                categoryName: store.Properties,
                            })
                        }
                        >
                            <Image
                                source={require('../Images/photos/houses.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Properties</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                          onPress={() =>
                            navigation.navigate('Departments', {
                                categoryName: store.Iphones,
                            })
                        }
                        >
                            <Image
                                source={require('../Images/photos/iphones.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Iphones</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                          onPress={() =>
                            navigation.navigate('Departments', {
                                categoryName: store.Home_Appliances,
                            })
                        }
                        >
                            <Image
                                source={require('../Images/photos/home appliances.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Home Appliances</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.newEx}>
                        <TouchableOpacity style={styles.categoryItems}
                          onPress={() =>
                            navigation.navigate('Departments', {
                                categoryName: store.Furniture,
                            })
                        }
                        >
                            <Image
                                source={require('../Images/photos/furniture.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Furniture</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Pets,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/pets.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Pets</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Neck_Accessories,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/necklaces.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Neck Accessories</Text>
                        </TouchableOpacity>


                    </View>


                    <View style={styles.newEx}>
                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Kitchen_Utensils,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/kitchenUtensils.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Kitchen Utensils</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Shoes,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/shoes.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Shoes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Toys,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/toys.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Toys</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={styles.newEx}>
                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Wrist_Watches,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/watches.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Wrist Watches</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Sound_Systems,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/soundSystems.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Sound Systems</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Phone_Accessories,
                                })
                            }>
                            <Image
                                source={require('../Images/photos/phoneAccessories.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Phone Accessories</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.newEx}>
                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Properties,
                                })
                            }
                        >
                            <Image
                                source={require('../Images/photos/houses.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Properties</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Iphones,
                                })
                            }>
                            <Image
                                source={require('../Images/photos/iphones.jpg')}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={styles.categoryItemText}>Iphones</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryItems}
                              onPress={() =>
                                navigation.navigate('Departments', {
                                    categoryName: store.Home_Appliances,
                                })
                            }
                        >
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

                    <ScrollView style={styles.deals} >

                        <View style={styles.deals}>
                            <FlatList data={data.topDeals} renderItem={({ item }) => {
                                return (
                                    <Card>
                                        <Card.Cover source={{ uri: item.thumbnail }} />
                                        <Card.Content style={styles.cC}>
                                            <Title style={styles.dealHead}>{item.name}</Title>
                                            <Paragraph style={styles.dealPar}>{item.note}</Paragraph>
                                            <Button mode='contained' color='gray'>Strike Bargain</Button>
                                        </Card.Content>
                                    </Card>
                                );
                            }} key={({ item }) => { item.id }} />
                        </View>

                    </ScrollView>
                </View>


            </View>



            {/* <Menu /> */}




        </View>
    )
}


const Tab = createBottomTabNavigator();

export function Major() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Purchases') {
                        iconName = focused ? 'cash-outline' : 'cash-outline';
                    } else if (route.name === 'Chat Box') {
                        iconName = focused ? 'chatbubbles-outline' : 'chatbubbles-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'cog-outline' : 'cog-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#F76E11',
                tabBarInactiveTintColor: 'gray',
            })}
        >
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
    btn1: {
        paddingTop: 10,
        paddingRight: 10
    },
    btnTouch: {

    },
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
    },
    dealCat: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    dealPar: {
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    },
    dealHead: {
        fontSize: 32,
        fontStyle: 'italic',
        fontWeight: 'bold',
        padding: 5,
        color: 'blue'
    },
    aboutDeal: {
        fontSize: 20,
        color: 'skyblue'

    },
})