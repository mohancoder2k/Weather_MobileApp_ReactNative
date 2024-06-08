import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import React, {useState} from 'react';
  import {deviceHeight, deviceWidth} from './Dimensions';
  import Icon from 'react-native-vector-icons/Ionicons';
  import Cards from './Cards';
  
  export default function Home({ navigation }) {
    const [city, setCity] = useState('');
  
    const cities = [
        {
            name: 'Puducherry',
            image: require('../assets/images/image3.jpg'),
        },
        {
            name: 'Chennai',
            image: require('../assets/images/image4.jpg'),
        },
        {
            name: 'Mumbai',
            image: require('../assets/images/image2.jpg'),
        },
        {
            name: 'Bangalore',
            image: require('../assets/images/image6.jpg'),
        },
        {
            name: 'New Delhi',
            image: require('../assets/images/image7.jpg'),
        },
    ];
  
    return (
        <View>
            <ImageBackground
                source={require('../assets/images/image2.jpg')}
                style={{height: deviceHeight, width: deviceWidth}}
                imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
            />
            <View
                style={{
                    position: 'absolute',
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: deviceWidth - 20,
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}
                        style={{
                            backgroundColor: 'blue',
                            padding: 10,
                            paddingTop:5,
                            borderRadius: 5,
                            marginTop:15
                        }}>
                        <Text style={{color: 'white'}}>About the Developer</Text>
                    </TouchableOpacity>
                    <Image
                        source={require('../assets/images/user.jpg')}
                        style={{height: 46, width: 46, borderRadius: 50, marginTop:15}}
                    />
                </View>
  
                <View style={{paddingHorizontal: 20, marginTop: 100}}>
                    <Text style={{fontSize: 40, color: 'white'}}>Hello User</Text>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}} >Welcome to my WeatherSphere</Text>
                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginTop:15}}>
                    Search for cities by name
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: 'white',
                            marginTop: 16,
                            paddingHorizontal: 10,
                        }}>
                        <TextInput
                            value={city}
                            onChangeText={val => setCity(val)}
                            placeholder="Search City"
                            placeholderTextColor="white"
                            style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('Details', {name: city})}>
                            <Icon name="search" size={22} color="white" />
                        </TouchableOpacity>
                    </View>
  
                    <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 220, marginBottom: 20}}>
                        Famous Cities
                    </Text>
                    <FlatList
                        horizontal
                        data={cities}
                        renderItem={({item}) => (
                            <Cards name={item.name} image={item.image} navigation={navigation} />
                        )}
                    />
                </View>
            </View>
        </View>
    );
  }
  