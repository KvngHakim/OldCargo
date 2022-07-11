import { StyleSheet, ScrollView, Text, View, StatusBar, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';



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


export function Topsales() {
    return (
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
    )
}
const styles = StyleSheet.create({
    deals: {

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
    btn: {

    }
})