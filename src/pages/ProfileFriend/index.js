import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, Avatar, ProfileView, NameProfile, ButtonChat, TextGray } from './styles';

const ProfileFriend = ({route, navigation}) => {
  const data = useSelector(state => state.load.data);
  const imageAvatar = 'https://f0.pngfuel.com/png/178/595/black-profile-icon-illustration-user-profile-computer-icons-login-user-avatars-png-clip-art-thumbnail.png';
  
  return (
    <Container>
      {
        data.filter((element) => {
          if(element.id == route.params.id) return element;
        }).map(user => (
          <ProfileView key={user.id}>
            <Avatar source={{
              uri: user.avatar ? 
              user.avatar : 
              imageAvatar
              }}
            />
            <NameProfile>{user.name}</NameProfile>
            <View>
              <TextGray>{user.description ? user.description : '...'}</TextGray>
              <TextGray>{user.email ? user.email : '...'}</TextGray>
              <TextGray>{user.social_network ? user.social_network : '...'}</TextGray>
              {
                user.images.map(image => (
                  <Image source={{uri: image.url ? image.url : null}} style={{width: 100, height: 100}}/>
                ))
              }
            </View>
            <ButtonChat onPress={() => {navigation.navigate('Chat')}}>
              <Icon name="comment" solid color="#7159c1" size={40} />
            </ButtonChat>
          </ProfileView>
        ))
      }
    </Container>
  );
}

export default ProfileFriend;