import { Pressable, Text, StyleSheet, View } from "react-native";

type Props = {
  label: string;
  onPress?: () => void; 
};

export default function MenuItem({ label,onPress }: Props) {
  return (
    <>
      <Pressable style={styles.menuContainer} onPress={onPress}>
        <Text style={styles.menuText}>{label}</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#717171",
  },
  menuText: {
    fontSize: 16,
  },
});