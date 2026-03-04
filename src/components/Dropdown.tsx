import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

type Props = {
  label: string;
  options: string[];
  onSelect?: (value: string) => void;
};

export default function Dropdown({ label, options, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    onSelect?.(value);
    setIsOpen(false);
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.button} onPress={toggleDropdown}>
        <Text style={styles.buttonLabel}>
          {label} {isOpen ? "▲" : "▼"}
        </Text>
      </Pressable>

      {isOpen && (
        <View style={styles.dropdown}>
          {options.map((option) => (
            <Pressable
              key={option}
              style={styles.option}
              onPress={() => handleSelect(option)}
            >
              <Text>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    width: 200,
  },
  button: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: 16,
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
  },
  option: {
    padding: 12,
  },
});
