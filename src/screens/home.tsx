import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { computedSequentialEvents } from "../utils/helpers";
import events from "../data/events";
import { SafeAreaView } from "react-native";
import ActivityTile from "../components/activity-tile";
import CommentTile from "../components/comment-tile";
import FileIcon from "../../assets/file-icon.svg";

export default function Home() {
	const [sliceCount, setSliceCount] = React.useState<number>(6);
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

	// const showMoreEvents = () => {
	// 	const nonVisibleCounts = computedEvents.length - sliceCount;

	// 	if (nonVisibleCounts === 0) return;

	// 	if (nonVisibleCounts <= 6) {
	// 		setSliceCount(sliceCount + nonVisibleCounts);
	// 		return;
	// 	}

	// 	setSliceCount(sliceCount + 6);
	// };

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<FlatList
				data={computedEvents.slice(0, sliceCount)}
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
				ListFooterComponent={() => (
					<TouchableOpacity style={styles.listFooter}>
						<FileIcon width={18} height={18} />
						<Text style={styles.listFooterText}>
							Show {computedEvents.length - sliceCount} more events
						</Text>
					</TouchableOpacity>
				)}
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
	listFooter: {
		flexDirection: "row",
		gap: 18,
		alignItems: "center",
		alignSelf: "flex-start",
	},
	listFooterText: {
		color: "#9D2AF2",
		fontFamily: "Inter-Regular",
		fontSize: 14,
	},
});
