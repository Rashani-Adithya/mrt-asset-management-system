
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_YtpyyLR-1FBrQf4cfO9C7j4vGpf3p88",
  authDomain: "mrt-asset-management-system.firebaseapp.com",
  projectId: "mrt-asset-management-system",
  storageBucket: "mrt-asset-management-system.firebasestorage.app",
  messagingSenderId: "456700819221",
  appId: "1:456700819221:web:4eec7624f53deaf3199b1c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
