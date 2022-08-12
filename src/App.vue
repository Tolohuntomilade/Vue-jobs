<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
    <!-- or using data binding for the to is better than linking it directly because the address can change but when using attribute binding there is no need to change the address in all the places it appears -->
    <router-link :to="{name: 'about'}">About</router-link> |
    <!-- Router-link serve as the anchor tag that links the views, they are faster and just changes component rather than sending a new request to the server-->
    <router-link :to="{name: 'jobs'}">Jobs</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>
  <router-view/>
  <!-- The different views are linked to the root via rounter-view from their respective view files -->
</template>
<script>
  export default {
    
    methods: {
      redirect(){
        this.$router.push({ name: 'home'})
      },
      back(){
        this.$router.go(-1)
        //router is used when you are reffering to the bulk of the routes while route is used when you are refeering to just one path, -1 means it goes back just once
      },
      forward(){
        this.$router.go(1)

      }
    },
  }
</script>

<style> 
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #fff;
  background: crimson;
}
button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
