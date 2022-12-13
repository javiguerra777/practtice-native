import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { styles } from '../styles/login';

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
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Sign Up</Text>
        <View style={styles.label}>
          <Text style={styles.labelText}>Name:</Text>
          <TextInput
            style={styles.input}
            editable
            placeholder='Ex: Yoshi Hoodie'
            maxLength={30}
            value={state.name}
            onChangeText={text => changeState('NAME', text)}
          />
        </View>
         <View style={styles.label}>
          <Text style={styles.labelText}>Username:</Text>
          <TextInput
            style={styles.input}
            editable
            placeholder='YoshiHoodie777'
            maxLength={30}
            value={state.username}
            onChangeText={text => changeState('USERNAME', text)}
          />
        </View>
         <View style={styles.label}>
          <Text style={styles.labelText}>Email:</Text>
          <TextInput
            style={styles.input}
            editable
            placeholder='YoshiTheDino@gmail.com'
            maxLength={30}
            value={state.email}
            onChangeText={text => changeState('EMAIL', text)}
          />
        </View>
         <View style={styles.label}>
          <Text style={styles.labelText}>Password:</Text>
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
      <Pressable style={styles.button} onPress={submit}>
        <Text style={styles.white}>Complete Registration</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default Signup