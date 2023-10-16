// import React from "react";
// import { View, Text, Modal, TouchableOpacity, Image,Linking } from "react-native";
// import { styles } from "./IdeaScreenStyle";
// import { IMAGE } from "../../constants/Images";

// const IdeaScreen = ({ isVisible, toggleBottomSheet }) => {

//   return (
//     <Modal
//       transparent={true}
//       visible={isVisible}
//       animationType="slide"
//       onRequestClose={toggleBottomSheet}
//     >
//       <View style={styles.container}>
//         <View style={styles.innerContainer}>
//           <TouchableOpacity onPress={toggleBottomSheet}>
//             <Text style={{ color: "blue", fontSize: 16, fontWeight: "bold" }}>
//               Cancel
//             </Text>
//           </TouchableOpacity>

//           <View
//             style={{
//               flexDirection: "row",
//               marginTop: 30,
//               alignItems: "center",
//             }}
//           >
//             <View>
//               <Text
//                 style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
//               >
//                 I have an idea! PixyRight
//               </Text>
//             </View>
//             <View
//               style={{
//                 height: 25,
//                 width: 25,
//                 borderRadius: 50,
//                 backgroundColor: "skyblue",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginLeft: 5,   
//               }}
//             >
//               <Image style={{ height: 15, width: 15 }} source={IMAGE.UPARROW} />
//             </View>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default IdeaScreen;
import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { styles } from "./IdeaScreenStyle";
import { IMAGE } from "../../constants/Images";

const IdeaScreen = ({ isVisible, toggleBottomSheet }) => {
  const onEmailPress = () => {
    // Define email details
    const recipientEmail = "recipient@example.com"; // Replace with the recipient's email address
    const subject = "Idea Submission";
    const body = `Hello my name is ... ${"\n"}I have an idea for PixyRight. Here's my idea:`;

    // Generate the email URL
    const emailUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open the email app with the generated URL
    Linking.openURL(emailUrl);
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      onRequestClose={toggleBottomSheet}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={toggleBottomSheet}>
            <Text style={{ color: "blue", fontSize: 16, fontWeight: "bold" }}>
              Cancel
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={onEmailPress}>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                I have an idea! PixyRight
              </Text>
            </TouchableOpacity>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 50,
                backgroundColor: "skyblue",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
              }}
            >
              <Image style={{ height: 15, width: 15 }} source={IMAGE.UPARROW} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default IdeaScreen;
