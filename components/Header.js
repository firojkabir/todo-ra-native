import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>My Todos</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		paddingTop: 30,
		backgroundColor: "#4C6793",
	},

	title: {
		textAlign: "center",
		color: "#fff",
		fontSize: 25,
		fontWeight: "bold",
	},
});

export default Header;
