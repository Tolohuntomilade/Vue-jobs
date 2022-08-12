<template>
    <div v-if="job">
        <h1>{{job.title}}</h1>
    <!-- <p>The job id is {{$route.params.id}}</p> -->
    <!-- This is used to return the id of job
    or you can define an data called id that stores this.....This more correct, basically the object route ($route) is used to reference the path of the route for jobdetails. The params is the variable that chages
    in the route which is the :id hence defining it here is by using params.id which gets the changable variable in the path which is id ***-->
    <p>The job id is {{id}}</p>
    <p>{{job.details}}</p>
    <!-- Here the id is being called -->
    </div>
      <div v-else >
        <p>Loading job details ...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    //Or by using props and setting it to true in the index.js, that is the id is gotten from jobs.vue
    // data() {
    //     return {
    //         id: this.$route.params.id
    //         We are doing the same thing here as *** just that we are defining a variable to store it and callling it in the template
    //     }
    // },

    data() {
        return {
            job:null
        }
    },
     mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res=>res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
 
</style>