import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { computedSequentialEvents } from "../utils/helpers";
import events from "../data/events";
import { SafeAreaView } from "react-native";
import ActivityTile from "../components/activity-tile";
import CommentTile from "../components/comment-tile";
import FileIcon from "../../assets/file-icon.svg";

export default function Home() {
	const [sliceStart, setSliceStart] = React.useState<number>(0);
	const [sliceCount, setSliceCount] = React.useState<number>(6);
	const computedEvents = React.useMemo(
		() => computedSequentialEvents(events, sliceStart, sliceCount),
		[sliceStart, sliceCount]
	);

	const [selectedEvent, setSelectedEvent] = React.useState<number>();
	const flatlistRef = React.useRef<FlatList>(null);

	const toggleSelect = (index: number) => {
		if (selectedEvent === index) setSelectedEvent(undefined);
		else setSelectedEvent(index);
	};

	const showMoreEvents = () => {
		const nonVisibleEvents = events.length - sliceCount;
		setSelectedEvent(undefined);
		if (nonVisibleEvents === 0) return;
		flatlistRef.current?.scrollToOffset({ animated: true, offset: 0 });
		setSliceStart(sliceStart + 6);

		if (nonVisibleEvents <= 6) {
			setSliceCount(nonVisibleEvents + sliceCount);
			return;
		}

		setSliceCount(sliceCount + 6);
	};

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<FlatList
				ref={flatlistRef}
				data={computedEvents}
				keyExtractor={(_, index) => index.toString()}
				initialNumToRender={6}
				renderItem={({ item, index }) =>
					item.type === "comment" ? (
						<CommentTile
							isSelected={(selectedEvent && selectedEvent > index) || selectedEvent === index}
							event={item}
							onSelect={() => toggleSelect(index)}
						/>
					) : (
						<ActivityTile
							isSelected={(selectedEvent && selectedEvent > index) || selectedEvent === index}
							event={item}
							onSelect={() => toggleSelect(index)}
						/>
					)
				}
				style={styles.listContainer}
				contentContainerStyle={styles.listContentContainer}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				ListFooterComponent={() =>
					events.length > sliceCount ? (
						<TouchableOpacity style={styles.listFooter} onPress={showMoreEvents}>
							<FileIcon width={18} height={18} />
							<Text style={styles.listFooterText}>
								Show {events.length - sliceCount} more events
							</Text>
						</TouchableOpacity>
					) : null
				}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	},
	listContainer: {},
	listContentContainer: {
		backgroundColor: "#fff",
		padding: 20,
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
