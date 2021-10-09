importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyBSRpE48ck5JxFGT60sP8mEU8VhyK5-hNg",
  authDomain: "vue-cm.firebaseapp.com",
  projectId: "vue-cm",
  storageBucket: "vue-cm.appspot.com",
  messagingSenderId: "287718108325",
  appId: "1:287718108325:web:d6d8b9d38c7165545ef14c"
};

firebase.initializeApp(firebaseConfig);

const messaging  = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
    console.log("Geldi")
  var dataFromServer = payload.notification;
  var notificationTitle = dataFromServer.title;
  var notificationOptions = {
    body: dataFromServer.body,
    image: dataFromServer.image,
    data: {
        url: "https://google.com"
    }
};
    self.registration.showNotification(notificationTitle, notificationOptions);
});