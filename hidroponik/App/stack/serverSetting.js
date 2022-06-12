import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import React from 'react';
import db from '../auth/DB';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Index = () => {
  const [modal, setModal] = React.useState(false);
  const [server, setServer] = React.useState('');

  const closeModal = () => setModal(false);
  const nav = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Icon name="arrow-left" size={30} color={db.state.IconcolorActive} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: db.state.IconcolorActive,
            marginLeft: 10,
          }}>
          Server Setting
        </Text>
      </View>
      <View style={{flex: 1, padding: 20}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Current Server :{' '}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'blue',
            marginTop: 10,
          }}>
          {db.state.linkLocal}
        </Text>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={{
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#eaeaeaaa',
            borderRadius: 40,
            backgroundColor: '#222',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 16,
            }}>
            Change Server Address
          </Text>
        </TouchableOpacity>
      </View>
      <Modal transparent visible={modal} onRequestClose={closeModal}>
        <Pressable
          onPress={closeModal}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              width: '80%',
              borderRadius: 10,
              elevation: 10,
            }}>
            <TextInput
              autoFocus
              placeholder={db.state.linkLocal}
              style={{
                borderBottomWidth: 1,
                width: '100%',
              }}
              value={server}
              onChangeText={text => setServer(text)}
            />
            <TouchableOpacity
              onPress={() => {
                if (server.length < 1) {
                  Alert.alert('Error', 'please insert server address');
                }
                db.state.linkLocal = server;
                db.state.link = server;
                closeModal();
              }}
              style={{
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#eaeaeaaa',
                borderRadius: 40,
                backgroundColor: '#222',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 16,
                }}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Index;
