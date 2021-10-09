<template>
  <div id="app">
    <img width="100" height="100" alt="Vue logo" src="./assets/firebase.png">
    <FirebaseComp msg="Vuejs - Firebase Cloud Messaging"/>
  </div>
</template>

<script>
import FirebaseComp from './components/Firebase.vue'
import { getMessaging, getToken,onMessage } from "firebase/messaging";

export default {
  name: 'App',
  components: {
    FirebaseComp
  }
}

const messaging = getMessaging();

getToken(messaging, { vapidKey: 'BDIKLcxfFtMWE5gqB4fH9NK1k9wBzGzmmTTeb2ykU9sN56Fy2EHwXKTY1o6QmsAR-vpTYdHUIL5qCPN2x3ZWRpY' }).then((currentToken) => {
  if (currentToken) {
    console.log("Current Token",currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

onMessage(messaging, (payload) => {
  alert(payload.notification.title+ "\n" +payload.notification.body) 
});

</script>

<style>
html,body,#app{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
