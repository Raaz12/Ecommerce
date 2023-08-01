import {
  Keyboard,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../Theme";
import React, { useEffect, useRef, useState } from "react";
import BackButton from "../components/Buttons/BackButton";
import F13Text from "../components/Typography/F13Text";
import RedButton from "../components/Buttons/RedButton";
import firebase from "firebase/compat";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../config";

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationId, setVerifictionId] = useState(null);
  const recapthcaVerifire = useRef(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const sendOTP = () => {
    setMinutes(2);
    setSeconds(59);
  };
  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(`+91${mobile}`, recapthcaVerifire.current)
      .then((res) => { setVerifictionId(res); sendOTP(); alert('OTP sent Succesfully') }).catch((err) => { alert(err) });
    setMobile("");
  };

  const confirmOtp = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      otp
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((res) => {
        console.log(res);
        alert('Signup succesful,welcome to our shoping world')
        navigation.navigate('Main')

        setOTP("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.white }}>
      <BackButton
        title={"Login"}
        style={{ marginLeft: 16, marginTop: 32 }}
        onPress={() => { }}
      />
      <View style={{ flex: 1, margin: 16, justifyContent: "center", gap: 20 }}>
        <FirebaseRecaptchaVerifierModal
          ref={recapthcaVerifire}
          firebaseConfig={firebaseConfig} />
        <View>
          <F13Text title="Enter Mobile Numer" />
          <View
            style={{
              height: 42,
              borderWidth: 1,
              borderColor: Theme.black,
              borderRadius: 12,
              paddingHorizontal: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter mobile number"
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={(e) => {
                setMobile(e);
                if (e.length >= 10) {
                  Keyboard.dismiss();
                }
              }}
            />
            <Pressable
              style={{
                height: 26,
                paddingHorizontal: 10,
                backgroundColor: Theme.Primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16
              }}
              onPress={sendVerification}
            >
              <F13Text title={minutes || seconds ? `0${minutes}:${seconds}` : "Send OTP"} color={Theme.white} />
            </Pressable>
          </View>
        </View>
        <View>
          <F13Text title="Enter OTP" />
          <TextInput
            style={{
              height: 42,
              borderWidth: 1,
              borderColor: Theme.black,
              borderRadius: 12,
              paddingHorizontal: 16,
            }}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            maxLength={6}
            onChangeText={(e) => {
              setOTP(e);
              if (e.length >= 6) {
                Keyboard.dismiss();
              }
            }}
          />
        </View>
        <RedButton title="LOGIN" onPress={() => { confirmOtp }} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
