//import admin from "firebase-admin";
import firebase from "firebase";

// var serviceAccount = {
//     "type": "service_account",
//     "project_id": "skillful-figure-113420",
//     "private_key_id": "9f1a0ae4abd90dd70bc1559f2ebb8d3893fcb345",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYyAIGbWO775Kv\nL/CGAT/1UylngkNaIeCw3myR+VSn2OMLfwCdvX+YDQIa5dXF4tadN5lhMXUCr1aK\nqYd6Gi2NamE8J8h1pJtwosnllmo+MqKl1KOUMLMuOK5iytSRE/MvJ795BuMSG3Gq\neFqGcRDccESFQgvZyxqbTRx/zZNIoQbIH4A+ZIw1Y6BVPmSIvJURjeXmU3v/DAXu\nuqkq29IgTazl80ekmoaZhEKgfQArvrnOyRp+7PwLADRP+X2LKIPH+ZSKba88PYFY\nnyXlDVqeJibanbiCRcOhp+wpYmbw3zImcAzMWHZWAdUVifTdF9fUltgYrYnbo6d1\nG+hds3JHAgMBAAECggEAUfmMHn8WJFbLarjfpOTrGSt58DznmDlQXMG3X5nfw9r1\nvH6prnyet9JPdflslbiaPHhuZT0NCNdiC+xgoTEuAZh1LYjDuozlBLpiS5HOGjgO\nnlPjCaJC15sygoQ9zqCzKKVIuAz9J/c9y99YKBewbxN7LcMUdSbjKFAIE2IbLG6Z\n1Iws89vBq0rWoBbUeq9vwkBRGgOhHjhQIezhWku8fN8QnznzZkQ/M+AsAvqYtaam\nlo/3Txmq/8KUqLqG7IfZIwgyaam16aEdhKk5AHiPoAybKa6PRMDJO1mlLkUG0LAC\nS8EXDQ9yZ6vJ+YKDRhhLznXXQoSdwsHCObAk3BY2PQKBgQDtUnRV4ZGJ2Davyura\neh4Zj/7lKvZEj9n/mTKkreSMoHH3cZSmVkU/cqNiNxHuOYt5HVuZVj+/aFenu2vM\nwA3pqgHyJzj/YcitHg9bxWJQ3wEKBkujX8BgYQ+0k/Osd57ZWffKwvymxftQB2UI\nmZjErEf5ooxNEq2WPB5TZmXLAwKBgQDp17Ly8+wZpvOO207MEzzF1S2ZT5xh4E2T\ndqdm53dIDhL9OomAv8jZTYId4MyniRmzBZmik0lPUVScBS7sPGt2ZxwUJDkrV+rh\n5cGRSBaXeKlw8+7Sxxc+4SM12rZ75fMAjEQAS7PGcKrJ+78yUyvWd4FzvBRvlAqD\n862wsGNWbQKBgH62d8cjGUIwX4KdJahha5DagY560eLpq8v9UDz9W/p58F/eFTB6\n/55Q50uZe8lmkEGqmy3UD1VzsNmuCHDaWpNYYpGYv6Yb37oPQsQNL+FeMH/ZvKkO\nhvju2iPgm0qK1BXZI6TvV1b0fqrMR/W/jQH1urhfQeok/uooT0jYc6FhAoGAJMTu\n9XbXXB09VOw1Eq+/sZfYqK+09krvx80ze2HQBrt3zuuibWU6rriaShpr87gCG304\n8DBaqacvN600+J5zg1WpO52Kg786RrT6395G9yBY/FLO7cOyawe5oqE2anr439Au\nbSF6LizPHh2AregYD4wRBeLAD99mW+M4H31M0W0CgYEAsAupY2G1KFuaF4MduEXm\nBja0DoHH3ay2z6XQlfIGTuKPIfzXrwIslb3VsNnA7sAMKglK8GOhwxYytIwlwpdt\nKQNmU1rWz0fXnH2U056sFdy0B2saB2QrS2XFLpbmJ4L2tCXDnwqzLNsIecDHLc5x\n/27vo0+h6XiK6084h8oh/aw=\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-b2q88@skillful-figure-113420.iam.gserviceaccount.com",
//     "client_id": "106440724733523164555",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://accounts.google.com/o/oauth2/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b2q88%40skillful-figure-113420.iam.gserviceaccount.com"
// }

var config = {
    apiKey: "AIzaSyBC0QLF3iTiA8Rpg7Wh5OOZZCtGkNCoJhE",
    authDomain: "skillful-figure-113420.firebaseapp.com",
    databaseURL: "https://skillful-figure-113420.firebaseio.com",
    projectId: "skillful-figure-113420",
    storageBucket: "skillful-figure-113420.appspot.com",
    messagingSenderId: "284748533723"
  };
firebase.initializeApp(config);

// const fire = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://skillful-figure-113420.firebaseio.com"
//   });

export default firebase;