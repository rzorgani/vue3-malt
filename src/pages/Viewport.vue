<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/posts">Posts</router-link>
    </nav>   
    <router-view /> 
  </div>
</template>