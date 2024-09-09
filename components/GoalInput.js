import { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your Goals'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8,
    width: '70%',
    marginRight: 8
  }
})
