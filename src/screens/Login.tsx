import React, { useState, useContext } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import tw from 'twrnc';
import { UserCtx } from '../context/user';
import { styles } from '../styles/login';
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
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Login</Text>
        <View style={styles.label}>
          <Text style={styles.labelText}>Username:</Text>
          <TextInput
            style={styles.input}
            editable
            maxLength={30}
            value={state.username}
            placeholder='Ex: YoshiHoodie777'
            onChangeText={text => changeState('USERNAME', text)}
          />
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Password: </Text>
          <TextInput
            style={styles.input}
            editable
            maxLength={30}
            value={state.password}
            placeholder='Enter Password'
            secureTextEntry={true}
            onChangeText={text => changeState('PASSWORD', text)}
          />
        </View>
        <Pressable disabled={disabled()} style={styles.button} onPress={submit}>
          <Text style={styles.white}>Submit</Text>
        </Pressable>
        <View>
          <Text style={tw`text-slate-200 mt-3`}>Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>Sign up Here</Text></Text>
          <Text style={tw`text-slate-200 mt-3`}>Forgot Password? <Text style={styles.link}>Click Here</Text></Text>
        </View>
      </View>
    </View>
  );
}

export default Login