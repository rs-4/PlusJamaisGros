import { useStripe } from "@stripe/stripe-react-native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import ButtonValider from "../../button/validerButton/index";

const Payment = ({prix=0,nombreSeance=0}) => {

  const [nombre, setNombres] = useState(10);
  const stripe = useStripe();

  const subscribe = async () => {
    try {
      // sending request
      const response = await fetch("https://nfa.onrender.com/api/v1/auth/pay", {
        method: "POST",
        body: JSON.stringify({ prix , nombreSeance }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert("Payement complété merci");
    } catch (err) {
      console.error(err);
      Alert.alert("Verifier vos &binformations de payement");
    }
  };
  return (
      <ButtonValider  title="Subscribe" onPress={subscribe} />
  );
};

export default Payment;