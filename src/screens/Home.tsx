import React, { useEffect, useState, useContext } from "react";
import tw from 'twrnc';
import { View, Text, ScrollView, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getData } from "../services";
import { RootStackParamList } from "../../types";
import { UserCtx } from "../context/user";
import { Todo } from "../modules/Todo";
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>
const Home = ({ navigation }: Props) => {
  const UserContext = useContext(UserCtx);
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    getData()
      .then((res) => {
        res.data.splice(30)
        setPosts(res.data);
      })
      .catch((err) => console.log(err.message))
  }, []);
  const navToPost = (id: any) => {
    navigation.navigate('Post', {id})
  }
  const createNewPost = () => {
    navigation.navigate('CreatePost')
  }
  const editPost = (id: any) => {
    console.log(id)
  }
  const deletePost = (id: any) => {
    const newPosts = posts.filter((post: Todo) => post.id !== id)
    setPosts(newPosts)
  }
  const openSideBar = () => {
    console.log('opening sidebar')
  }
  return (
    <View style={tw`bg-zinc-800 flex-col h-full items-center`}>
      <View style={tw`flex-row justify-between w-6/6`}>
          <Text style={tw`text-slate-200 mt-2 pb-1 text-xl`}>Hello, {UserContext?.username}</Text>
        <Pressable style={tw`h-6/6`} onPress={() => openSideBar()}>
          <FIcon name="menu" size={40} color="white" />
        </Pressable>
      </View>
        <Pressable style={tw`bg-white py-2 w-6/6`} onPress={() => createNewPost()}>
            <Text style={tw`text-stone-600 pl-2`}>What's on your mind?</Text>
          </Pressable>
      {posts.length ? (
        <ScrollView style={tw`w-6/6 flex-col`}>
          {posts.map((todo: Todo) => {
            return (
              <View key={todo.id} style={tw`w-86 mt-1 mb-3 bg-indigo-300 p-2 rounded-md self-center flex-row justify-between items-center`}>
                <Pressable key={todo.id} style={tw`w-5/6`} onPress={() => navToPost(todo.id)}>
                  <Text
                    key={todo.id}
                    style={tw`text-zinc-800`}
                    >{todo.title}
                  </Text>
                </Pressable>
                <View style={tw`flex-row items-center`}>
                  <Pressable style={tw`mr-2`} onPress={() => editPost(todo.id)}>
                    <Icon name="pencil" size={25} />
                  </Pressable>
                  <Pressable style={tw`bg-red-500 px-1`} onPress={()=> deletePost(todo.id)}>
                    <Icon name="trash-o" size={25} color="white"/>
                    </Pressable>
                </View>
              </View>
            )
          })}
        </ScrollView>
      ) : (
          <View>
            <Text>Create New Post</Text>
          </View>
      )}
    </View>
  )
}

export default Home;
