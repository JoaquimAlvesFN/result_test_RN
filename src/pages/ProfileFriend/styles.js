import styled from 'styled-components/native';

export const Container = styled.SafeAreaView({
    flex: 1,
    alignItems: 'center',
    padding: 20
});

export const ProfileView = styled.View({
    alignItems: 'center'
});

export const Avatar = styled.Image({
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFF',
});

export const NameProfile = styled.Text({
    fontWeight: 'bold',
    fontSize: 20
});

export const TextGray = styled.Text({
    color: '#7159c1',
    opacity: 0.5
});

export const ButtonChat = styled.TouchableOpacity({
    flex: 1,
    justifyContent: 'flex-end',
});