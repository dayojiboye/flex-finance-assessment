import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AuthorAvatar from "./author-avatar";
import Icon from "react-native-vector-icons/Octicons";
import { sequentialEventsType } from "../types";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

type Props = {
	isSelected: boolean;
	event: sequentialEventsType;
};

export default function ActivityEvent({ isSelected, event }: Props) {
	return (
		<>
			{event.eventData.map((item, index) => (
				<TouchableOpacity key={index} style={styles.activityContainer}>
					{index === 0 ? (
						<Icon name="circle" color="#707070" size={18} />
					) : (
						<View style={{ width: 18, height: 18 }} />
					)}
					<View style={styles.contentContainer}>
						<AuthorAvatar author={event.author} />
						<Text style={styles.activityText}>
							{event.author} <Text style={{ color: "#8F7893" }}>has changed Status to</Text>{" "}
							<Icon name="dot-fill" color="#F28282" size={12} />{" "}
							<Text>{item.activity?.status}</Text>
						</Text>
					</View>
					<Text style={styles.timeStamp}>
						{formatDistance(new Date(item.createdAt), new Date(), {
							addSuffix: true,
						})}
					</Text>
				</TouchableOpacity>
			))}
		</>
	);
}

const styles = StyleSheet.create({
	activityContainer: {
		paddingTop: 11,
		paddingBottom: 16,
		flexDirection: "row",
		alignItems: "center",
		gap: 18,
	},
	contentContainer: {
		flexDirection: "row",
		alignItems: "center",
		flexShrink: 1,
		rowGap: 5,
		columnGap: 12,
	},
	activityText: {
		color: "#382424",
		fontFamily: "Inter-Regular",
		fontSize: 14,
		lineHeight: 22,
		flex: 1,
	},
	timeStamp: {
		fontSize: 12,
		fontFamily: "Inter-Regular",
		color: "#8F7893",
	},
});
