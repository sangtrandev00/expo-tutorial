import React from 'react'
import { StyleSheet } from 'react-native'

const Footer = () => {
  return (
    <div style={styles.footer}>
      Root Footer Layout
    </div>
  )
}

export default Footer


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    color: "white",
    fontSize: "20px",
    textAlign: "center"
  }
})