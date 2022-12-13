import React, { useEffect, useState, useContext } from "react";
import tw from 'twrnc';
import { View, Text, ScrollView, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getData, getPosts } from "../services";
import { RootStackParamList } from "../../types";
import { UserCtx } from "../context/user";
import { Todo } from "../modules/Todo";

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
  useEffect(() => {
    getPosts().then((res) => console.log(res.data)).catch((err)=> console.log(err.message))
  }, []);
  const navToPost = (id: any) => {
    navigation.navigate('Post', {id})
  }
  const deletePost = (id: any) => {
    const newPosts = posts.filter((post: Todo) => post.id !== id)
    setPosts(newPosts)
  }
  return (
    <View style={tw`bg-zinc-800 flex-col h-full items-center`}>
      <Text style={tw`text-slate-200 mt-2 pb-1 text-xl`}>Hello, {UserContext?.username}</Text>
      {posts.length ? (
        <ScrollView style={tw`w-6/6 flex-col`}>
          {posts.map((todo: Todo) => {
            return (
              <View style={tw`w-86 mt-1 mb-3 bg-indigo-300 p-2 rounded-md self-center flex-row justify-between items-center`}>
                <Pressable style={tw`w-5/6`} onPress={() => navToPost(todo.id)}>
                  <Text
                    key={Math.floor(Math.random() * 9996589)}
                    style={tw`text-zinc-800`}
                    >{todo.title}
                  </Text>
                </Pressable>
                <Pressable style={tw`bg-red-500 px-1`} onPress={()=> deletePost(todo.id)}>
                  <Text style={tw`text-lg text-slate-200`}>
                    X
                  </Text>
                  </Pressable>
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
