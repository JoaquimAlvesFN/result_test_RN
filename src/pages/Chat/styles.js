import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView({
    flex: 1,
    justifyContent: 'space-between'
});

export const ContainerMessage = styled.View({
    alignItems: 'flex-end',
    padding: 20
});

export const Dialog = styled.Text({
    backgroundColor: '#7159c1',
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
    color: '#FFF',
    fontWeight: 'bold'
});

export const SendContainer = styled.View({
    flex: 1, 
    alignItems: 'flex-end', 
    justifyContent: 'space-evenly', 
    flexDirection: 'row', 
    paddingBottom: 10,
    paddingHorizontal: 10
});

export const Input = styled.TextInput({
    backgroundColor: '#DDD',
    borderRadius: 50,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width - 70,
    elevation: 2
});

export const Send = styled.TouchableOpacity({
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 20
});