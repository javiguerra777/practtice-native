import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import tw from 'twrnc';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>
const Signup = ({ navigation }: Props) => {
  const [state, setState] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });
  const changeState = (option: string, val: string) => {
    switch (option) {
      case 'NAME':
        setState({ ...state, name: val })
        break;
      case 'USERNAME':
        setState({ ...state, username: val });
        break;
      case 'EMAIL':
        setState({ ...state, email: val });
        break;
      case 'PASSWORD':
        setState({ ...state, password: val });
        break;
      default:
        break;
    }
  }
  const submit = () => {
    setState({
      name: '',
      username: '',
      email: '',
      password: '',
    });
    navigation.navigate('Home');
  }
  return (
    <View style={tw`h-full flex-col items-center justify-center`}>
      <View style={tw`flex-col bg-zinc-800 p-5 rounded-2xl`}>
        <Text style={tw`text-slate-200 self-center text-5xl`}>Sign Up</Text>
        <View style={tw`flex-row items-center mt-3`}>
          <Text style={tw`w-20 text-slate-200`}>Name:</Text>
          <TextInput
            style={tw`bg-white w-50 ml-2 px-1`}
            editable
            placeholder='Ex: Yoshi Hoodie'
            maxLength={30}
            value={state.name}
            onChangeText={text => changeState('NAME', text)}
          />
        </View>
         <View style={tw`flex-row items-center mt-3`}>
          <Text style={tw`w-20 text-slate-200`}>Username:</Text>
          <TextInput
            style={tw`bg-white w-50 ml-2 px-1`}
            editable
            placeholder='YoshiHoodie777'
            maxLength={30}
            value={state.username}
            onChangeText={text => changeState('USERNAME', text)}
          />
        </View>
         <View style={tw`flex-row items-center mt-3`}>
          <Text style={tw`w-20 text-slate-200`}>Email:</Text>
          <TextInput
            style={tw`bg-white w-50 ml-2 px-1`}
            editable
            placeholder='YoshiTheDino@gmail.com'
            maxLength={30}
            value={state.email}
            onChangeText={text => changeState('EMAIL', text)}
          />
        </View>
         <View style={tw`flex-row items-center mt-3`}>
          <Text style={tw`w-20 text-slate-200`}>Password:</Text>
          <TextInput
            style={tw`bg-white w-50 ml-2 px-1`}
            editable
            maxLength={30}
            value={state.password}
            placeholder='Enter Password'
            secureTextEntry={true}
            onChangeText={text => changeState('PASSWORD', text)}
          />
        </View>
      <Pressable style={tw`bg-blue-400 flex-row justify-center py-1 mt-3 rounded-xl`} onPress={submit}>
        <Text style={tw`text-slate-200`}>Complete Registration</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default Signup;
