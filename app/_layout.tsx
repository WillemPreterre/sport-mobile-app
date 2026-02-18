import { Stack } from "expo-router";
// Création des roots ici, comme les écrans de connexion ou d'inscription
export default function RootLayout() {
  return (
    <Stack>
      {/* Stack Screen permet de créer une page à l'inverse de Tabs pour créer des sous partis */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "index" }} />
    </Stack>
  );
}
