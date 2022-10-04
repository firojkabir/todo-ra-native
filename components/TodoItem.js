import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function TodoItem({item, pressHandler}) {
  return (
	<TouchableOpacity onPress={() => pressHandler(item.key)}>
	<View style={styles.item}>
		<MaterialIcons name="delete" size={18} color='#ff5349' />
		<Text style={styles.itemText}>{item.text}</Text>
	</View>
	</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop:16,
		borderColor: '#bbb',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,
		fontSize: 20,
		flexDirection: 'row',
	},

	itemText: {
		marginLeft: 10,
	}
})

export default TodoItem
