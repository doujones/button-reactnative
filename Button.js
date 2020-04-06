import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button(props) {
  const { text, icon, textColor, backgroundColor, onPress } = props
  const color = textColor || 'orange'
  return (
    <TouchableOpacity // View is Clickable
      onPress={() => onPress && onPress()}
      style={[styles.wrapper, {backgroundColor: backgroundColor 
      || 'transparent'}]}
    >
      <View style={styles.ButtonTextWrapper}>
      {icon}
      <Text style={[{ color }, styles.buttonText]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    display: 'flex',
    borderRadius: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'orange',
    marginBottom: 15,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center'
  },
  ButtonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
