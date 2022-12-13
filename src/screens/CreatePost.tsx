import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'CreatePost'>

const CreatePost = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Create Post Works</Text>
    </View>
  )
}

export default CreatePost;
