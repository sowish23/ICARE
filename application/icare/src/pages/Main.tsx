import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, AsyncStorage} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';
import {_getData} from '../api/users';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const Main: FC = () => {
  const navigation = useNavigation<mainScreenProp>();
  //token 가져오는거 여기잇슴다~
  const [token, setToken] = useState('');
  useEffect(()=>{
      _getData(setToken);
  })
  return (
    <View style={styles.container}>
        <Button title="Login" onPress={() => navigation.navigate('Auth')} />
        <Button title="Parents" onPress={() => navigation.navigate('SetInfoParent')} />
        <Button title="BabySitter" onPress={() => navigation.navigate('SetInfoBS')} />
    </View>
  );
};
export default Main;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});