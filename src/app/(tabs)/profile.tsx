import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import TextProfile from "@/components/TextProfile";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import ImageViewer from "@/components/imageViewer";

// The @ symbol is a custom path alias for importing custom components and other modules instead of relative paths.
const PlaceholderImage = require("@/../assets/images/splash-icon.png");

export default function ProfileScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );

  const profileFakeData = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "12345678",
    verifyPassword: "12345678",
    phone: "0123456789",
    address: "123 Main St, Anytown, USA",
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>

      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button
          label="Use this photo"
          onPress={() => alert("Using this photo")}
        />
      </View>
      <TextProfile firstText="Name" data={profileFakeData.name} />
      <TextProfile firstText="Email" data={profileFakeData.email} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
