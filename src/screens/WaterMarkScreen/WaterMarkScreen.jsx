import React from "react";
import {
  View,
  Modal,
  Image,
  FlatList,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import { IMAGE } from "../../constants/Images";
import styles from "./styles";

const data = [
  { key: "1", image: IMAGE.FACEBOOK },
  { key: "2", image: IMAGE.INSTA },
  { key: "3", image: IMAGE.TWITTER },
  { key: "4", image: IMAGE.SNAP },
  { key: "5", image: IMAGE.YOUTUBE },
  { key: "6", image: IMAGE.MUSIC },
  { key: "7", image: IMAGE.WHATSAPP },
  { key: "8", image: IMAGE.LINKIDLIN },
  { key: "9", image: IMAGE.AMAZON },
  { key: "10", image: IMAGE.FLICKER },
  { key: "11", image: IMAGE.PRINT },
  { key: "12", image: IMAGE.TUMBLER },
  { key: "13", image: IMAGE.BE },
  { key: "14", image: IMAGE.EBABY },
  { key: "15", image: IMAGE.FACEBOOK },
  // Add more items as needed
];

const dataBusiness = [
  { key: "1", image: IMAGE.EMAIL },
  { key: "2", image: IMAGE.BROWSER },
  { key: "3", image: IMAGE.MOBILE },
  // Add more items as needed
];
const dataLogo = [{ key: "1", image: IMAGE.SIGNATURE }];
const dataBranding = [
  { key: "1", image: IMAGE.COPY },
  { key: "2", image: IMAGE.BY },
  { key: "3", image: IMAGE.TEXT },
  { key: "4", image: IMAGE.SIGNATURE },
];

const NUM_COLUMNS = 5;
const ITEMS_IN_ROW = 3;
const ITEMS_IN_ROWW = 4;

const screenWidth = Dimensions.get("window").width - 300;
const margin = (screenWidth - ITEMS_IN_ROW * 40) / (ITEMS_IN_ROW + 1);
const modifiedData = data.slice(0, data.length - 1);

const WaterMarkScreen = ({ isVisible, toggleBottomSheet }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableHighlight onPress={() => {}} style={styles.item}>
        <Image source={item.image} style={styles.image} />
      </TouchableHighlight>
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="slide"
        onRequestClose={toggleBottomSheet}
        style={{ marginTop: 100 }}
      >
        <BackgroundImage source={IMAGE.BLACK_IMAGE}>
          <View>
            <CustomHeader
              title={"PIXY RIGHT"}
              backImage={IMAGE.BACK_ARROW}
              onBackPress={toggleBottomSheet}
              style={styles.header}
            />

            <View style={styles.sectionContainer}>
              <FlatList
                ListHeaderComponent={() => (
                  <Text style={styles.sectionHeader}>SOCIAL</Text>
                )}
                data={modifiedData}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                numColumns={NUM_COLUMNS}
                columnWrapperStyle={{
                  marginHorizontal: margin,
                }}
              />
            </View>

            <View style={styles.sectionContainer}>
              <FlatList
                ListHeaderComponent={() => (
                  <Text style={styles.sectionHeader}>LOGO</Text>
                )}
                data={dataLogo}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                numColumns={ITEMS_IN_ROW}
                columnWrapperStyle={{
                  marginHorizontal: margin,
                }}
              />
            </View>

            <View style={styles.sectionContainer}>
              <FlatList
                ListHeaderComponent={() => (
                  <Text style={styles.sectionHeader}>BUSINESS</Text>
                )}
                data={dataBusiness}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                numColumns={ITEMS_IN_ROW}
                columnWrapperStyle={{
                  marginHorizontal: margin,
                }}
              />
            </View>

            <View style={styles.sectionContainer}>
              <FlatList
                ListHeaderComponent={() => (
                  <Text style={styles.sectionHeader}>BRANDING</Text>
                )}
                data={dataBranding}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                numColumns={ITEMS_IN_ROWW}
                columnWrapperStyle={{
                  marginHorizontal: margin,
                }}
              />
            </View>
          </View>
        </BackgroundImage>
      </Modal>
    </View>
  );
};

export default WaterMarkScreen;
