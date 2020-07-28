import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';

import { Container, Card, Avatar, TextName, TextGray } from './styles';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.load.data);
    const imageAvatar = 'https://f0.pngfuel.com/png/178/595/black-profile-icon-illustration-user-profile-computer-icons-login-user-avatars-png-clip-art-thumbnail.png';

    useEffect(() => {
        api.get('/users')
        .then(res => {
            if(res.status == 200){
                dispatch({
                    type: 'LOAD',
                    payload: res.data
                });
            }
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <>
                    <Card
                        dimensions={50} 
                        key={item.id} 
                        onPress={() => {
                            navigation.navigate('ProfileFriend', {
                                 id: item.id, 
                                 name: item.name 
                            });
                        }}
                    >
                        <Avatar source={{
                            uri: item.avatar ? 
                            item.avatar : 
                            imageAvatar
                        }}
                        />
                        <View>
                            <TextName>{item.name}</TextName>
                            <TextGray>{item.description}</TextGray>
                            <TextGray>{item.is_online} minutes</TextGray>
                        </View>
                    </Card>
                    </>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </Container>
    );
}

export default Home;