import { StyleSheet, ScrollView, Text, View, Image,  TouchableOpacity,  } from 'react-native';


export function Categories() {
    return (
        <ScrollView>
            <View style={styles.newEx}>
                <TouchableOpacity style={styles.categoryItems}>
                    <Image
                        source={require('../Images/icons/more.png')}
                        style={{ width: 100, height: 100, backgroundColor: 'red'}}
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
                        source={require('../Images/photos/toys.jpg')}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={styles.categoryItemText}>Toys</Text>
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
                        source={require('../Images/photos/necklaces.jpg')}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={styles.categoryItemText}>Neck Accessories</Text>
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

    )
}

const styles = StyleSheet.create({
    newEx:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center'
    },
    categoryItemText:{
        color: 'dark gray',
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    },
    categoryItems:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
})
