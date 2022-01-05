import messaging from '@react-native-firebase/messaging';

class Notifications {
  static async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('Firebase Push Token is:', fcmToken);
      }
    }
  }
}

export default Notifications;
