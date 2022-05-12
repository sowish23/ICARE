import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, AppState} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from "react-native-push-notification";

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const _handleAppStateChange = (nextAppState:string) => {
    if (nextAppState === 'active') {
        _registerLocalNotification();
    }
};
const _registerLocalNotification = () => {
    PushNotificationIOS.setApplicationIconBadgeNumber(0);
    PushNotificationIOS.cancelAllLocalNotifications();

    const messages = [
        '잠깐 시간내서 일본어 공부를 해보는건 어떨까요?',
        '오늘 일본어 공부하셨나요?',
        '일본어 단어를 공부해 보세요.',
        '단어 공부는 매일매일 하는 것이 중요해요.',
        '새로운 단어와 암기한 공부를 복습해 보세요.',
        '일본어를 공부할 시간이에요.',
        '테스트 기능을 사용해서 자신의 실력을 확인해 보세요.',
        '일본어 단어들이 당신을 기다리고 있어요.',
        '일본어, 어렵지 않아요. 공부해 봅시다.',
        '일본어 마스터가 되기위해!',
    ];
    const message = messages[Math.floor(Math.random() * messages.length)];

    let nextHour = new Date();
    nextHour.setDate(nextHour.getDate() + 1);
    nextHour.setHours(nextHour.getHours() - 1);

    PushNotificationIOS.addNotificationRequest({
        id: '1',
        body: message, // (required)

        // for production
        repeats: true, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
        fireDate: nextHour,
    });
};
const Main: FC = () => {
  const navigation = useNavigation<mainScreenProp>();
useEffect(() => {
    PushNotification.configure
    const [alertPermit, setAlert] =useState(false);
    PushNotificationIOS.requestPermissions([]).then();
})
    PushNotificationIOS.addEventListener('register', async () => {
        _registerLocalNotification();
        AppState.addEventListener('change', _handleAppStateChange);
    })
    AppState.removeEventListener('change', _handleAppStateChange);
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