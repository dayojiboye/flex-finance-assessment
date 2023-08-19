import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getAuthorInitials } from "../utils/helpers";

type Props = {
	author: string;
};

export default function AuthorAvatar({ author }: Props) {
	return (
		<View style={styles.authorAvatarContainer}>
			<Text style={styles.authorInitial}>{getAuthorInitials(author)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	authorAvatarContainer: {
		width: 28,
		height: 28,
		borderRadius: 14,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#9D2AF2",
	},
	authorInitial: {
		fontFamily: "Inter-Regular",
		fontSize: 16,
		color: "#fff",
	},
});
