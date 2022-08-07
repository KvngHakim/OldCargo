import { View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export function AdInfo({ route, navigation }) {
    const { AdCategory, AdPic } = route.params;
    return (
        <View>
            <ImageBackground
                style={styles.bgImg}
                source={{ uri: AdPic }}>
                <Text style={styles.adName}>{AdCategory}</Text>
            </ImageBackground>

            <View>
                <View style={styles.insertImg}>
                    <TouchableOpacity style={{alignContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../Images/icons/postAd.png')}
                            style={styles.addPic}
                        />
                        <Text style={{marginTop: 30, fontSize: 28, fontWeight: 'bold'}}>ADD IMAGES</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.productText}>PRODUCT DETAILS</Text>
                <View>
                    <View style={styles.detailsSect}>
                        <Text style={styles.productDetails}>{AdCategory} NAME</Text>
                        <TextInput style={{marginHorizontal: 20}} placeholder='e.g "jumpsuit" ' />
                    </View>

                    <View style={styles.detailsSect}>
                        <Text style={styles.productDetails}> {AdCategory} BRAND</Text>
                        <TextInput style={{marginHorizontal: 20}} placeholder='e.g "Versace" ' />
                    </View>

                    <View style={styles.detailsSect}>
                        <Text style={styles.productDetails}>{AdCategory} TERM</Text>
                        <TextInput style={{marginHorizontal: 20}} placeholder='how long has this product been in use' />
                    </View>

                    <View style={styles.detailsSect}>
                        <Text style={styles.productDetails}>REPAIRS MADE</Text>
                        <TextInput style={{marginHorizontal: 20}} placeholder='enter info about repairs made on this product' />
                    </View>

                    <View style={styles.detailsSect}>
                        <Text style={styles.productDetails}>{AdCategory} PRICE</Text>
                        <TextInput style={{marginHorizontal: 20}} placeholder='how much would you like to sell this product for?' />
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <Button mode='contained' color='blue'  style={styles.btn}>NEGOTIABLE</Button>
                    <Text style={{fontWeight:'bold', fontSize: 35}} >/</Text>
                    <Button mode='contained' color='blue'  style={styles.btn}>NON-NEGOTIABLE</Button>
                </View>

                <Button mode='contained' color='blue'  style={styles.btn}>POST</Button>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    adName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: 'red'
    },
    addPic: {
        width: 100,
        height: 100,
        alignSelf: 'center' 
    },
    bgImg: {

    },
    insertImg: {
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 50,
        padding: 100,
        borderWidth: 3,
        borderColor: 'red',
    },
    productText: {
        textAlign: 'center',
        fontSize: 30,
        padding: 15
    },
    productDetails:{
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'italic',
        paddingBottom: 10
    },
    detailsSect:{
        paddingBottom: 20,

    },
    btnContainer:{
        flexDirection: 'row',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 20
        
    },
    btn:{
        paddingHorizontal: 20,
    }


})