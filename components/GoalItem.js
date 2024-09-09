import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem({ text, id, onDelete }) {
  return (
    <Pressable onPress={onDelete.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: '#5e0acc',
    borderColor: '#cccccc',
    borderRadius: 6
  },
  goalText: {
    color: 'white'
  }
})
