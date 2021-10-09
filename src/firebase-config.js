import { initializeApp } from "firebase/app";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('firebase-messaging-sw.js')
    .then(reg => {
      console.log(`Service Worker Registration (Scope: ${reg.scope})`);
    })
    .catch(error => {
      const msg = `Service Worker Error (${error})`;
      console.error(msg);
    });
} else {
  // happens when the app isn't served over HTTPS or if the browser doesn't support service workers
  console.warn('Service Worker not available');
}

const firebaseConfig = {
  apiKey: "AIzaSyBSRpE48ck5JxFGT60sP8mEU8VhyK5-hNg",
  authDomain: "vue-cm.firebaseapp.com",
  projectId: "vue-cm",
  storageBucket: "vue-cm.appspot.com",
  messagingSenderId: "287718108325",
  appId: "1:287718108325:web:d6d8b9d38c7165545ef14c"
};

initializeApp(firebaseConfig);