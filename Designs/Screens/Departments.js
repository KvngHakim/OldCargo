import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper';
import { store } from '../../assets/components/data';


export function Departments ({ route, navigation }) {

    const { categoryName } = route.params;


    return (
        <ScrollView style={styles.deals} >
            <View style={styles.deals}>
                <FlatList data={categoryName} renderItem={({ item }) => {
                    return (
                        <Card>
                            <Card.Cover source={{ uri: item.imgUrl }} />
                            <Card.Content style={styles.cC}>
                                <Title style={styles.dealHead}>{item.clothesName}</Title>
                                <Paragraph style={styles.dealPar}>{item.desc}</Paragraph>
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

})