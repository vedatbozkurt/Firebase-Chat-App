/*
* @Author: @vedatbozkurt
* @Date:   2020-05-20 03:41:27
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-06-03 23:20:16
*/
import firebase from "firebase";
import "firebase/firestore";

var config = {
  apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

var fire = firebase.initializeApp(config);
export default fire;
