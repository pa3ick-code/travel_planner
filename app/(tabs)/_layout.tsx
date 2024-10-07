import React from "react";
import { Tabs } from "expo-router";
import { explore, plane, user } from "@/constants/icons";

export default function TabLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#3c3c3c",
                tabBarStyle:{
                    backgroundColor: "#f0f0f0",
                    height: 70,
                }
            }}
        >
            <Tabs.Screen 
                name="trips" 
                options={{
                    title: 'Trips',
                    tabBarIcon: plane,
                }}
            />

            <Tabs.Screen 
                name="explore" 
                options={{
                    title: 'Explore',
                    tabBarIcon: explore,
                }}
            />

            <Tabs.Screen 
                name="user" 
                options={{
                    title: 'User',
                    tabBarIcon: user,
                }}
            />
        </Tabs>
    )
}