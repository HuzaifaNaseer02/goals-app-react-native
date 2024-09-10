import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem({ text, id, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDelete.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    borderColor: '#cccccc',
    borderRadius: 6
  },
  pressedItem: {
    opacity: 0.5
  },

  goalText: {
    padding: 8,
    color: 'white'
  }
})
