import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import Home from "./src/screens/home";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
		"Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
		"Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
		"Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
		"Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
	});

	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<Home />
		</SafeAreaProvider>
	);
}
