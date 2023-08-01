import {
  Keyboard,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Theme } from "../Theme";
import React, { useRef, useState } from "react";
import BackButton from "../components/Buttons/BackButton";
import F13Text from "../components/Typography/F13Text";
import RedButton from "../components/Buttons/RedButton";
import firebase from "firebase/compat";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../config";

const SignupScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationId, setVerifictionId] = useState(null);
  const recapthcaVerifire = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(`+91${mobile}`, recapthcaVerifire.current)
      .then(setVerifictionId).catch((err) => {
        alert(err)
      });
    setMobile("");
    alert('OTP sent Succesfully')
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
        title={"Signup"}
        style={{ marginLeft: 16, marginTop: 32 }}
        back
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
              <F13Text title="Send OTP" color={Theme.white} />
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
        <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => { navigation.navigate('LoginScreen') }}>
          <F13Text title="Already have an account?" />
        </TouchableOpacity>
        <RedButton title="SIGNUP" onPress={confirmOtp} />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
