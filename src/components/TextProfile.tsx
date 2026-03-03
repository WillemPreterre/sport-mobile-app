import { StyleSheet, Text, View } from "react-native";
type Props = {
  firstText: string;
  data: string;
};

export default function TextProfile({ firstText, data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>{firstText}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  firstText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  data: { fontSize: 16, color: "#fff" },
});
