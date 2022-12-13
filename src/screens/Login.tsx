import React, { useState, useContext } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import tw from 'twrnc';
import { UserCtx } from '../context/user';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>
const Login = ({ navigation }: Props) => {
  const UserContext = useContext(UserCtx);
  const [state, setState] = useState({
    username: '',
    password: ''
  });
  const changeState = (option: string, val: string) => {
    switch (option) {
      case 'USERNAME':
        setState({ ...state, username: val });
        break;
      case 'PASSWORD':
        setState({ ...state, password: val });
        break;
      default:
        break;
    }
  }
  const submit = () => {
    Keyboard.dismiss();
    UserContext?.changeUsername(state.username)
    setState({
      username: '',
      password: '',
    });
    navigation.navigate('Home');
  }
  const disabled = () => {
    if (!state.username || !state.password) {
      return true;
    }
    return false;
  }
  return (
    <View style={tw`h-full flex-col items-center justify-center`}>
      <View style={tw`flex-col bg-zinc-800 p-5 rounded-2xl`}>
        <Text style={tw`text-slate-200 self-center text-5xl`}>Login</Text>
        <View style={tw`flex-row items-center mt-3`}>
          <Text style={tw`text-slate-200 w-20 mr-1`}>Username:</Text>
          <TextInput
            style={tw`bg-white h-7 text-base w-40 px-1`}
            editable
            maxLength={30}
            value={state.username}
            placeholder='Ex: YoshiHoodie777'
            onChangeText={text => changeState('USERNAME', text)}
          />
        </View>
        <View style={tw`flex-row items-center mt-3`}>
          <Text style={tw`text-slate-200 w-20 mr-1`}>Password: </Text>
          <TextInput
            style={tw`bg-white h-7 text-base w-40 px-1`}
            editable
            maxLength={30}
            value={state.password}
            placeholder='Enter Password'
            secureTextEntry={true}
            onChangeText={text => changeState('PASSWORD', text)}
          />
        </View>
        <Pressable disabled={disabled()} style={tw`bg-blue-400 flex-row justify-center mt-5 py-1 rounded-xl`} onPress={submit}>
          <Text style={tw`text-slate-100`}>Submit</Text>
        </Pressable>
        <View>
          <Text style={tw`text-slate-200 mt-3`}>Don't have an account? <Text style={tw`underline`} onPress={() => navigation.navigate('Signup')}>Sign up Here</Text></Text>
          <Text style={tw`text-slate-200 mt-3`}>Forgot Password? <Text style={tw`underline`}>Click Here</Text></Text>
        </View>
      </View>
    </View>
  );
}

export default Login