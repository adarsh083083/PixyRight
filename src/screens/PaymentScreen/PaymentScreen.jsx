import { View, Text, StatusBar } from "react-native";
import React from "react";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { IMAGE } from "../../constants/Images";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import AppButton from "../../components/ButtonAtom/ButtonAtom";
import styles from "./PaymentScreenStyle";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <BackgroundImage source={IMAGE.BLACK_IMAGE}>
      <StatusBar
        animated={false}
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
      />
      <View style={styles.headerStyle}>
        <CustomHeader
          backImage={IMAGE.BACK_ARROW}
          title={"PIXY RIGHT"}
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>Free Member</Text>
        <Text numberOfLines={3} style={styles.textStyle2}>
          You are a free member.we are offering you a trial version of this
          app.your trial will expire withen 3 days
        </Text>
      </View>
      <View style={styles.btnStyle}>
        <AppButton btnText={"UNLIMITED WATERMARK FOR 40.99/MONTH"} />
      </View>
      <View style={styles.btnStyle2}>
        <AppButton btnText={"UNLIMITED LOGOS FOR 40.99/MONTH"} />
      </View>
      <View style={styles.btnStyle2}>
        <AppButton btnText={"RESTORE YOUR SUBSCRIPTION 40.99/MONTH"} />
      </View>
    </BackgroundImage>
  );
};

export default PaymentScreen;
