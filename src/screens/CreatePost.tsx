import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import tw from 'twrnc';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'CreatePost'>

const CreatePost = ({ navigation }: Props) => {
  const leavePage = () => {
    navigation.navigate('Home');
  }
  return (
    <View style={tw`bg-zinc-800 h-full`}>
      <View style={tw`flex-row bg-zinc-600 py-2`}>
        <Pressable onPress={() => leavePage()}>
          <Text style={tw`text-slate-200 text-2xl ml-2`}>X</Text>
        </Pressable>
        <Text style={tw`mx-auto text-slate-200 text-2xl w-auto`}>
         Create Post 
        </Text>
      </View>
      <Pressable style={tw`bg-blue-400 w-14 flex-row justify-center p-0.5 rounded absolute right-1 top-2`}>
        <Text style={tw`text-slate-100 text-lg`}>Post</Text>
      </Pressable>
    </View>
  )
}

export default CreatePost;
