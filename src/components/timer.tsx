import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { useRef, useState } from "react";

// type Props = {};

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const onStart = () => {
    if (intervalRef.current) return; // évite double interval
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const onStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const onReset = () => {
    onStop();
    setTime(0);
  };
  console.log("v", time, intervalRef.current);
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.buttons}>
        {isRunning ? (
          <Button label="Stop" onPress={onStop} />
        ) : (
          <Button label="Start" onPress={onStart} />
        )}
        <Button label="Reset" onPress={onReset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});
