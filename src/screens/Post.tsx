import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Post'>
const Post = ({ navigation, route}: Props) => {
  return (
    <View>
      <Text>Welcome to Post {route.params.id}</Text>
    </View>
  )
}

export default Post