import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { sequentialEventsType } from "../types";
import { computedSequentialEvents } from "../utils/helpers";
import events from "../data/events";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import ActivityEvent from "../components/activity-event";

export default function Home() {
	const [computedEvents, setComputedEvents] = React.useState<sequentialEventsType[]>([]);
	const [selectedEvents, setSelectedEvents] = React.useState<string[]>([]);
	const insets = useSafeAreaInsets();

	React.useEffect(() => {
		setComputedEvents(computedSequentialEvents(events));
	}, []);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<FlatList
				data={computedEvents}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => <ActivityEvent isSelected={false} event={item} />}
				style={styles.listContainer}
				contentContainerStyle={styles.listContentContainer}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	},
	listContainer: {
		// paddingHorizontal: 16,
	},
	listContentContainer: {
		backgroundColor: "#fff",
		padding: 20,
		paddingBottom: 50,
		// borderWidth: 1,
		// borderColor: "#EFDFF4",
		// borderRadius: 32,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 1,
		// },
		// shadowOpacity: 0.22,
		// shadowRadius: 2.22,
		// elevation: 3,
	},
	separator: {
		height: 1,
		backgroundColor: "#F1E9F5",
	},
});
