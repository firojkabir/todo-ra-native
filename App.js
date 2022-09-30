import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'grab coffee', key: '1'},
    {text: 'code to react-app', key: '2'},
    {text: 'grab another coffee', key: '3'},
    {text: 'code to react-native-app', key: '4'},
  ])

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* to form*/}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <Text style={styles.text}>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 50,
  },

  list: {
    marginTop: 20,
  }, 

  text: {
    fontFamily: 'Comic Sans MS',
  }
});
