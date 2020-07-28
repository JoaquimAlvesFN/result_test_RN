import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
});

export const Avatar = styled.Image({
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#7159c1',
    borderWidth: 2
});

export const Camera = styled.TouchableOpacity({
    position: 'absolute', 
    bottom: 0, 
    right: 20,
});

export const TextName = styled.Text({
    fontWeight: 'bold',
    fontSize: 20
});

export const Editable = styled.TextInput({
    padding: 5,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width - 150,
    paddingLeft: 10,
    elevation: 2
})