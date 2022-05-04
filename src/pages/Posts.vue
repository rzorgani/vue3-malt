
<template>
  <div>
    POSTS<br>
    <button @click="addPost">Ajouter un post</button>
    <ul v-for="post in data.value" :key="post.id">
      <li>
        <div>Id : {{post.id}}</div>
        <div>Title : {{post.title}}</div>
        <div>Body : {{post.body}}</div>
        <br>
        <button @click="editPost(post)">Modifier</button>
        <button @click="deletePost(post.id)">Supprimer</button>
        <hr />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "@vue/runtime-core";
import {useStore} from 'vuex'

const store = useStore();
const data = ref([]);

onMounted(()=>{
  getPosts()
})

const getPosts = ()=>{
  store.dispatch("GET_POSTS")
}
data.value= computed(()=>store.getters.getAllPosts)

const addPost=async ()=>{
  console.log('addPost')
  const data={ 
    userId: new Date().getTime(), 
    id: new Date().getTime(), 
    title: "New title", 
    body: "New body" 
  }
  store.dispatch("CREATE_POST", data)
}
const editPost=async (data)=>{
  let myPost = Object.assign({}, data)
  
  myPost.title="title updated"
  myPost.body="body updated" 

  await store.dispatch("EDIT_POST", myPost)

}
const deletePost=async (id)=>{
  console.log(id)

  await store.dispatch("DELETE_POST", id)
}
</script>
