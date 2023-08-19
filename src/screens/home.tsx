import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { computedSequentialEvents } from "../utils/helpers";
import events from "../data/events";
import { SafeAreaView } from "react-native";
import ActivityTile from "../components/activity-tile";
import CommentTile from "../components/comment-tile";

export default function Home() {
	const computedEvents = React.useMemo(() => computedSequentialEvents(events), []);
	const [selectedEvents, setSelectedEvents] = React.useState<number[]>([]);

	const toggleSelect = (index: number) => {
		if (selectedEvents.includes(index)) {
			const updatedSelectedEvents = selectedEvents.filter((i) => i !== index);
			setSelectedEvents(updatedSelectedEvents);
			return;
		}

		setSelectedEvents([index, ...selectedEvents]);
	};

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<FlatList
				data={computedEvents}
				keyExtractor={(_, index) => index.toString()}
				initialNumToRender={6}
				renderItem={({ item, index }) =>
					item.type === "comment" ? (
						<CommentTile
							isSelected={selectedEvents.includes(index)}
							event={item}
							onSelect={() => toggleSelect(index)}
						/>
					) : (
						<ActivityTile
							isSelected={selectedEvents.includes(index)}
							event={item}
							onSelect={() => toggleSelect(index)}
						/>
					)
				}
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
		// paddingLeft: 0,
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
