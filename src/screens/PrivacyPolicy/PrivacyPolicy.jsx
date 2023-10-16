import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar, Dimensions } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { IMAGE } from "../../constants/Images";
import styles from "./styles";
import ButtonAtom from "../../components/ButtonAtom/ButtonAtom";
import AsyncStorage from "@react-native-async-storage/async-storage";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const PrivacyPolicy = ({navigation}) => {
  const [accepted, setAccepted] = useState(false);
  const handleAccept = async ({}) => {
    await AsyncStorage.setItem("termsAccepted", "true");
    await AsyncStorage.setItem("privacyPolicyAccepted", "true");
  
    navigation.navigate("HomeScreen");
  };
  
  return (
    <BackgroundImage source={IMAGE.BLACK_IMAGE}>
      <StatusBar
        animated={false}
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          <StatusBar
            animated={false}
            backgroundColor="transparent"
            barStyle="light-content"
            translucent={true}
            backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
          />
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: "white", width: "100%" }}>
              <ScrollView
                style={styles.tcContainer}
                onScroll={({ nativeEvent }) => {
                  if (isCloseToBottom(nativeEvent)) {
                    setAccepted(true);
                  }
                }}
              >
                <Text style={styles.title}>Privacy Policy</Text>
                <Text style={styles.tcP}>
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </Text>
                <Text style={styles.tcP}>
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy. This
                  Privacy Policy has been created with the help of the Privacy
                  Policy Generator.
                </Text>
                <Text style={styles.tcP}>
                  Interpretation and Definitions Interpretation
                </Text>
                <Text style={styles.tcP}>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </Text>
                <Text style={styles.tcP}>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </Text>
                <Text style={styles.tcP}>Definitions</Text>
                <Text style={styles.tcP}>
                  For the purposes of this Privacy Policy:
                </Text>
                <Text style={styles.tcP}>
                  Account means a unique account created for You to access our
                  Service or parts of our Service.
                </Text>
                <Text style={styles.tcP}>
                  Affiliate means an entity that controls, is controlled by or
                  is under common control with a party, where "control" means
                  ownership of 50% or more of the shares, equity interest or
                  other securities entitled to vote for election of directors or
                  other managing authority.{" "}
                </Text>
                <Text style={styles.tcP}>
                  Country refers to: New Jersey, United States{" "}
                </Text>
                <Text style={styles.tcP}>
                  Device means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.
                </Text>
                <Text style={styles.tcP}>
                  Personal Data is any information that relates to an identified
                  or identifiable individual. Service refers to the Application.
                </Text>
                <Text style={styles.tcP}>
                  Service Provider means any natural or legal person who
                  processes the data on behalf of the Company. It refers to
                  third-party companies or individuals employed by the Company
                  to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service or to
                  assist the Company in analyzing how the Service is used.
                </Text>
                <Text style={styles.tcP}>
                  Usage Data refers to data collected automatically, either
                  generated by the use of the Service or from the Service
                  infrastructure itself (for example, the duration of a page
                  visit).
                </Text>
                <Text style={styles.tcP}>
                  You means the individual accessing or using the Service, or
                  the company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </Text>
                <Text style={styles.tcP}>
                  Collecting and Using Your Personal Data Types of Data
                  Collected
                </Text>
                <Text style={styles.tcP}>Email address</Text>
                <Text style={styles.tcP}>
                  First name and last name Phone number Address, State,
                  Province, ZIP/Postal code, City Usage Data Usage Data
                </Text>
                <Text style={styles.tcP}>
                  Usage Data is collected automatically when using the Service.
                </Text>
                <Text style={styles.tcP}>
                  Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </Text>
                <Text style={styles.tcP}>
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </Text>
                <Text style={styles.tcP}>
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </Text>
                <Text style={styles.tcP}>
                  While using Our Application, in order to provide features of
                  Our Application, We may collect, with Your prior permission:
                </Text>
                <Text style={styles.tcP}>
                  Information regarding your location We use this information to
                  provide features of Our Service, to improve and customize Our
                  Service. The information may be uploaded to the Company's
                  servers and/or a Service Provider's server or it may be simply
                  stored on Your device.
                </Text>
                <Text style={styles.tcP}>
                  You can enable or disable access to this information at any
                  time, through Your Device settings. Use of Your Personal Data
                  The Company may use Personal Data for the following purposes:
                </Text>
                <Text style={styles.tcP}>
                  To provide and maintain our Service, including to monitor the
                  usage of our Service.
                </Text>
                <Text style={styles.tcP}>
                  To manage Your Account: to manage Your registration as a user
                  of the Service. The Personal Data You provide can give You
                  access to different functionalities of the Service that are
                  available to You as a registered user.
                </Text>
                <Text style={styles.tcP}>
                  For the performance of a contract: the development, compliance
                  and undertaking of the purchase contract for the products,
                  items or services You have purchased or of any other contract
                  with Us through the Service.
                </Text>
                <Text style={styles.tcP}>
                  To provide You with news, special offers and general
                  information about other goods, services and events which we
                  offer that are similar to those that you have already
                  purchased or enquired about unless You have opted not to
                  receive such information.
                </Text>
                <Text style={styles.tcP}>
                  To manage Your requests: To attend and manage Your requests to
                  Us.
                </Text>
                <Text style={styles.tcP}>
                  For business transfers: We may use Your information to
                  evaluate or conduct a merger, divestiture, restructuring,
                  reorganization, dissolution, or other sale or transfer of some
                  or all of Our assets, whether as a going concern or as part of
                  bankruptcy, liquidation, or similar
                </Text>
                <Text style={styles.tcP}>
                  proceeding, in which Personal Data held by Us about our
                  Service users is among the assets transferred.
                </Text>
                <Text style={styles.tcP}>
                  For other purposes: We may use Your information for other
                  purposes, such as data analysis, identifying usage trends,
                  determining the effectiveness of our promotional campaigns and
                  to evaluate and improve our Service, products, services,
                  marketing and your experience.
                </Text>
                <Text style={styles.tcP}>
                  We may share Your personal information in the following
                  situations:
                </Text>
                <Text style={styles.tcP}>
                  With Service Providers: We may share Your personal information
                  with Service Providers to monitor and analyze the use of our
                  Service, to contact You. For business transfers: We may share
                  or transfer Your personal information in connection with, or
                  during negotiations of, any merger, sale of Company assets,
                  financing, or acquisition of all or a portion of Our business
                  to another company. With Affiliates: We may share Your
                  information with Our affiliates, in which case we will require
                  those affiliates to honor this Privacy Policy. Affiliates
                  include Our parent company and any other subsidiaries, joint
                  venture partners or other companies that We control or that
                  are under common control with Us. With business partners: We
                  may share Your information with Our business partners to offer
                  You certain products, services or promotions. With other
                  users: when You share personal information or otherwise
                  interact in the public areas with other users, such
                  information may be viewed by all users and may be publicly
                  distributed outside. With Your consent: We may disclose Your
                  personal information for any other purpose with Your consent.
                  Retention of Your Personal Data
                </Text>
                <Text style={styles.tcP}>
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </Text>
                <Text style={styles.tcP}>
                  Your information, including Personal Data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ than those from Your jurisdiction.
                </Text>
                <Text style={styles.tcP}>
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                </Text>
                <Text style={styles.tcP}>
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </Text>
                <Text style={styles.tcP}>
                  Disclosure of Your Personal Data Business Transactions If the
                  Company is involved in a merger, acquisition or asset sale,
                  Your Personal Data may be transferred. We will provide notice
                  before Your Personal Data is transferred and becomes subject
                  to a different Privacy Policy.
                </Text>
                <Text style={styles.tcP}>Law enforcement</Text>
                <Text style={styles.tcP}>
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </Text>
                <Text style={styles.tcP}>Other legal requirements</Text>
                <Text style={styles.tcP}>
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </Text>

                <Text style={styles.tcP}>
                  Comply with a legal obligation Protect and defend the rights
                  or property of the Company Prevent or investigate possible
                  wrongdoing in connection with the Service Protect the personal
                  safety of Users of the Service or the public Protect against
                  legal liability Security of Your Personal Data
                </Text>

                <Text style={styles.tcP}>
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </Text>
                <Text style={styles.tcP}>Children's Privacy</Text>
                <Text style={styles.tcP}>
                  Our Service does not address anyone under the age of 13. We do
                  not knowingly collect personally identifiable information from
                  anyone under the age of 13. If You are a parent or guardian
                  and You are aware that Your child has provided Us with
                  Personal Data, please contact
                </Text>
                <Text style={styles.tcP}>
                  If We need to rely on consent as a legal basis for processing
                  Your information and Your country requires consent from a
                  parent, We may require Your parent's consent before We collect
                  and use that information.
                </Text>
                <Text style={styles.tcP}>Links to Other Websites</Text>
                <Text style={styles.tcP}>
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit.
                </Text>
                <Text style={styles.tcP}>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </Text>
                <Text style={styles.tcP}>Changes to this Privacy Policy</Text>
                <Text style={styles.tcP}>
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
                </Text>
                <Text style={styles.tcP}>
                  We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the "Last updated" date at the top of this Privacy Policy.
                </Text>
                <Text style={styles.tcP}>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </Text>
                <Text style={styles.tcP}>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </Text>
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              marginBottom: CHANGE_BY_MOBILE_DPI(18),
              width: Dimensions.get("window").width,
            }}
          >
            <ButtonAtom
              btnStyle={{
                width:
                  Dimensions.get("window").width - CHANGE_BY_MOBILE_DPI(30),
              }}
              disabled={!accepted}
              onPress={handleAccept}
              btnText={"I ACCEPT AND CONTINUE"}
            />
          </View>
        </View>
      </View>
    </BackgroundImage>
  );
};

export default PrivacyPolicy;
