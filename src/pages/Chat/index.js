import React from 'react';
import { Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Send, SendContainer, Input, ContainerMessage, Container, Dialog } from './styles';

const Chat = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.chat.data);
  const textMessage = useSelector(state => state.chat.text);

  let newData = [];

  const sendMessage = () => {
    newData.push({
      msg: textMessage
    });

    dispatch({
      type: 'NEWMSG',
      message: newData
    });

    dispatch({
      type: 'TEXT_CHANGE',
      text: ''
    });
  }

  return (
    <Container>
      <ScrollView>
        <ContainerMessage>
          {
            data.map(message => (
              <Dialog>{message.msg}</Dialog>
            ))
          }
        </ContainerMessage>
      </ScrollView>
      <SendContainer>
        <Input 
          placeholder="Digite sua mensagem"  
          value={textMessage} 
          onChangeText={text => dispatch({
            type: 'TEXT_CHANGE',
            text: text
          })}
        />
        <Send onPress={sendMessage}>
          <Icon name="telegram-plane" size={40} color="#7159c1" />
        </Send>
      </SendContainer>
    </Container>
  );
}

export default Chat;