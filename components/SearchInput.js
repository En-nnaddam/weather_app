import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const SearchInput = ({ placeholder, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onSubmitEditing={onSearch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    width: "80%",
    height: 40,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 8,
  },
  textInput: {
    flex: 1,
    color: 'white',
  }
})

export default SearchInput