import { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { AppRoutes } from "./src/routes/app.routes";
import { StorageProvider } from "./src/context/StorageContext";
import { NetworkProvider } from "react-native-offline";

export default function App() {
  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <NetworkProvider
          pingServerUrl="https://www.google.com/"
          pingTimeout={10000}
          pingInterval={30000}
          pingOnlyIfOffline={false}
          shouldPing={true}
        >
          <StorageProvider>
            <AppRoutes />
          </StorageProvider>
        </NetworkProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
