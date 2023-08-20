import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { sequentialEventsType } from "../types";
import AuthorAvatar from "./author-avatar";
import UserIcon from "../../assets/user-icon.svg";
import { formatDistance } from "date-fns";
import EventCheckbox from "./event-checkbox";

type Props = {
	isSelected: boolean;
	event: sequentialEventsType;
	onSelect: () => void;
};

function CommentTile({ isSelected, event, onSelect }: Props) {
	return (
		<TouchableOpacity activeOpacity={0.7} style={styles.commentContainer} onPress={onSelect}>
			<View style={styles.contentContainer}>
				<EventCheckbox isChecked={isSelected} style={{ marginRight: 18 }} />
				<AuthorAvatar author={event.author} />
				<Text style={styles.commentText}>{event.author}</Text>
			</View>
			{event.eventData.map((item, index) => (
				<View key={index} style={{ paddingLeft: 36 }}>
					<View style={styles.comment}>
						<Text style={styles.commentHeader}>{item.message?.title}</Text>
						<View style={styles.commentInfo}>
							<View style={styles.receiverImage}>
								<UserIcon width={12} height={12} />
							</View>
							<Text style={styles.receiverName}>{item.message?.receiver}</Text>
							<Text style={styles.timeStamp}>
								{formatDistance(new Date(item.createdAt), new Date(), {
									addSuffix: true,
								})}
							</Text>
						</View>
						<Text style={[styles.timeStamp, { marginTop: 7 }]}>{item.message?.description}</Text>
					</View>
				</View>
			))}
		</TouchableOpacity>
	);
}

export default React.memo(CommentTile);

const styles = StyleSheet.create({
	commentContainer: {
		paddingTop: 11,
		paddingBottom: 18,
		gap: 14,
	},
	contentContainer: {
		flexDirection: "row",
		alignItems: "center",
		flexShrink: 1,
		rowGap: 5,
	},
	commentText: {
		color: "#382424",
		fontFamily: "Inter-Regular",
		fontSize: 14,
		lineHeight: 22,
		flex: 1,
		marginLeft: 12,
	},
	comment: {
		paddingTop: 15,
		paddingHorizontal: 19,
		paddingBottom: 27,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#F0E7EF",
	},
	commentHeader: {
		fontFamily: "Inter-Regular",
		color: "#382424",
		fontSize: 14,
		textTransform: "capitalize",
	},
	commentInfo: {
		flexDirection: "row",
		alignItems: "center",
		gap: 7,
		marginTop: 17,
	},
	receiverImage: {
		width: 20,
		height: 20,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		backgroundColor: "#DCCAE8",
	},
	receiverName: {
		color: "#382424",
		fontFamily: "Inter-Regular",
		fontSize: 14,
	},
	timeStamp: {
		color: "#8F7893",
		fontSize: 12,
		fontFamily: "Inter-Regular",
	},
});
