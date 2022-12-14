import React, { useContext } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import tw from 'twrnc';
import { Formik } from 'formik';
import * as yup from 'yup';
import { UserCtx } from '../context/user';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const Login = ({ navigation }: Props) => {
  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, ({min}) => `Username must ${min} characters`)
      .required('Username is Required'),
    password: yup
      .string()
      .min(10, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required')
  })
  const UserContext = useContext(UserCtx);
  return (
    <View style={tw`h-full flex-col items-center justify-center`}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          UserContext?.changeUsername(values.username)
          resetForm({
            values: {
              username: '',
              password: ''
          }})
          Keyboard.dismiss();
          navigation.navigate('Home');
        }}
      >
        {/* Form and Formik */}
        {({ handleChange, handleBlur, handleSubmit, isValid, errors, touched, values }) => (
        <View style={tw`flex-col bg-zinc-800 p-5 rounded-2xl`}>
          <Text style={tw`text-slate-200 self-center text-5xl`}>Login</Text>
            {(errors.username && values.username.length > 0) && <Text style={tw`text-red-100`}>{errors.username}</Text>}
            {/* Username input view */}
            <View style={tw`flex-row items-center mt-3`}>
            <Text style={tw`text-slate-200 w-20 mr-1`}>Username:</Text>
            <TextInput
              style={tw`bg-white h-7 text-base w-40 px-1`}
              editable
              maxLength={30}
              value={values.username}
              placeholder='Ex: YoshiHoodie777'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
            />
            </View>
            {(errors.password && values.password.length > 0) && <Text style={tw`text-red-100`}>{errors.password}</Text>}
            {/* Password input view */}
          <View style={tw`flex-row items-center mt-3`}>
            <Text style={tw`text-slate-200 w-20 mr-1`}>Password: </Text>
            <TextInput
              style={tw`bg-white h-7 text-base w-40 px-1`}
              editable
              maxLength={30}
              value={values.password}
              placeholder='Enter Password'
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
          </View>
          <Pressable disabled={!isValid} style={tw`bg-blue-400 flex-row justify-center mt-5 py-1 rounded-xl`} onPress={handleSubmit}>
            <Text style={tw`text-slate-100`}>Submit</Text>
          </Pressable>
          <View>
            <Text style={tw`text-slate-200 mt-3`}>Don't have an account? <Text style={tw`underline`} onPress={() => navigation.navigate('Signup')}>Sign up Here</Text></Text>
            <Text style={tw`text-slate-200 mt-3`}>Forgot Password? <Text style={tw`underline`}>Click Here</Text></Text>
          </View>
        </View>
        ) }
      </Formik>
    </View>
  );
}

export default Login