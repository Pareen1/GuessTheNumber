import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>OPPONENT'S GUESS</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
