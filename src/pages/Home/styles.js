import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView({
    flex: 1,
    alignItems: 'center',
});

export const Card = styled.TouchableOpacity(props => ({
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    width: Dimensions.get('window').width - props.dimensions,
    marginTop: 10,
    padding: 20,
    elevation: 2
}));

export const Avatar = styled.Image({
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginRight: 10
});

export const TextName = styled.Text({
    fontWeight: 'bold'
});

export const TextGray = styled.Text({
    color: '#7159c1',
    opacity: 0.5
});