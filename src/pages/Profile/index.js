import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';

import { Container, Avatar, Camera, TextName, Editable } from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.profile.data);

  useEffect(() => {
    api.get('/profile')
    .then(res => {
      if(res.status == 200){
        dispatch({
          type: 'PROFILE',
          profile: res.data[0]
        });
      }
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <Container>
      { 
        !data ? <ActivityIndicator size="small" /> :
        <>
          <View>
            <Avatar source={{uri: data.avatar}}/>
            <Camera>
              <Icon name="camera" color="#7159c1" size={40}/>
            </Camera>
          </View>
          <TextName>{data.name}</TextName>
          <Editable>{data.email}</Editable>
          <Editable>{data.descricao}</Editable>
        </>
      }
    </Container>
  );
}

export default Profile;