import { View, Image, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View className="bg-white flex-row justify-between items-center p-4 ">
            <View className="flex-row items-center" >
                <Image source={require("../../assets/images/profile.png")} className="w-10 h-10 border rounded-full border-slate-400 mr-3" />
                <View>
                    <Text className="font-medium text-gray-700">Hoşgeldin Caner</Text>
                    <Text className="text-xs text-gray-500">Username</Text>
                </View>
            </View>
            <View>
                <MaterialCommunityIcons name="bell" size={24} color="black" />
            </View>
        </View>
    )
}

export default Header