import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import TextProfile from "@/components/TextProfile";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import ImageViewer from "@/components/ImageViewer";
import Dropdown from "@/components/Dropdown";
import MenuItem from "@/components/MenuItem";

// The @ symbol is a custom path alias for importing custom components and other modules instead of relative paths.
const PlaceholderImage = require("@/../assets/images/splash-icon.png");

export default function ProfileScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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
      <View style={styles.backgroundContainer} />
      <View style={styles.avatarContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
          style={styles.avatar}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}> {profileFakeData.name}</Text>
      </View>

      {/* <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button
          label="Use this photo"
          onPress={() => alert("Using this photo")}
        />
      </View> */}
      <View style={styles.textContainer}>
        <TextProfile firstText="Number" data={profileFakeData.phone} />
        <TextProfile firstText="Email" data={profileFakeData.email} />
      </View>
      <View style={styles.menuContainer}>
        <MenuItem
          label="Détails du profil"
          onPress={() => setIsProfileOpen(!isProfileOpen)}
        />

        {isProfileOpen && (
          <View style={styles.formContainer}>
            <TextProfile firstText="Name" data={profileFakeData.name} />
            <TextProfile firstText="Email" data={profileFakeData.email} />
            <TextProfile firstText="Phone" data={profileFakeData.phone} />
          </View>
        )}
        <MenuItem label="Settings" onPress={() => alert("Go to settings")} />
        <MenuItem label="Logout" onPress={() => alert("Logging out")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameContainer: {
    alignItems: "center",
  },
  menuContainer: {
    marginTop: 20,
  },
  formContainer: {
  padding: 20,
  backgroundColor: "#f5f5f5",
},
  backgroundContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "#000",
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    paddingBottom: 20,
  },
  textContainer: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: "#f2f2f2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  avatarContainer: {
    marginTop: -50,
    alignItems: "center",
  },
});
