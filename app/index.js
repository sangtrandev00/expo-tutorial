import React from 'react'
import App from '../App'
import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function index() {
    console.log("index");

  return (
    <div>
      This is index page
      <View>
        <Link style={styles.button} href="/other" asChild>
            <Pressable>
                <Text>Home</Text>
            </Pressable>
        </Link>
        <Link href="/about">About</Link>
        <Link href="/user/bacon">View user</Link>
      </View>

      <View>
        <Link href="/blog/1">Blog 1</Link>
        <Link href="/blog/2">Blog 2</Link>
        <Link href="/blog/3">Blog 3</Link>
        <Link href={{ pathname: '/user/[id]', query: { a: 1, b: 2 }, params: {id: 'bacon'}}}>View User</Link>

        <Link
            replace
            href="/feed">
            Login
      </Link>

      </View>

      <App/>
    </div>
  )
}

export default index;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'red',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'orange',
      color: 'white'
    }
})

// Giả sử muốn hover vào hình ảnh thì sao ?
