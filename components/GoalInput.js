import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your Goals'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonConatiner}>
          <View style={styles.button}>
            <Button title='Cancel' color='#f31282' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' color='#5e0acc' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#311b6b',
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 16,
    width: '100%',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120438'
  },
  buttonConatiner: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})
