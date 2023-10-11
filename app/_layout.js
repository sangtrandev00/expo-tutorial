import { Slot, Tabs } from 'expo-router'
import React from 'react'
import Footer from '../components/Footer'
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
const RootLayout = () => {
  return (
    <div>
        {/* <Tabs/> */}
        {/* <Slot/> */}
        {/* 1. Stack navigation */}
        <Stack>
            <Stack.Screen
                name="home"
                options={{
                // Hide the header for all other routes.
                headerShown: false,
                }}
            />
            <Stack.Screen
                name="modal"
                options={{
                // Set the presentation mode to modal for our modal route.
                presentation: 'modal',
                }}
            />
        </Stack>
        {/* <Stack.Screen name="home" options={{}} /> */}


        {/* 2. Tabs navigation */}

        {/* <Tabs>
            <Tabs.Screen
            // Name of the dynamic route.
                name="[user]"
                options={{
                // Ensure the tab always links to the same href.
                href: '/evanbacon',
                // OR you can use the Href object:
                href: {
                        pathname: '/[user]',
                            params: {
                            user: 'evanbacon',
                        },
                    },
                href: {
                        pathname: '/home',
                            params: {
                        },
                }
                }
            }
            />
    </Tabs> */}
    </div>
  )
}

export default RootLayout
