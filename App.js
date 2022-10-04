import { useState } from "react";
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
	const [todos, setTodos] = useState([
		{ text: "grab coffee", key: "1" },
		{ text: "code to react-app", key: "2" },
		{ text: "grab another coffee", key: "3" },
		{ text: "code to react-native-app", key: "4" },
	]);

	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter(todo => todo.key != key);
		})
	}

	const submitHandler = (text) => {
		if(text.length > 3) {
			setTodos((prevTodos) => {
				return [
					{text: text, key: Math.random().toString()},
					...prevTodos,
				];
			});
		} else { 
			Alert.alert('Oops!', 'Todos must be over 3 chars long', [
				{
					text: 'Understood',
					onPress: () => console.log('alert closed'),
					style: 'cancel',
				},
			]);
		}
	}

	return (
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss();
			console.log('Dismissed keyboard!');
		}}>
			<View style={styles.container}>
				{/* header */}
				<Header />
				<View style={styles.content}>
					{/* to form*/}
					<AddTodo submitHandler={submitHandler}/>
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} pressHandler={pressHandler}/>
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	content: {
		padding: 50,
	},

	list: {
		marginTop: 20,
	},

	text: {
		fontFamily: "Comic Sans MS",
	},
});
