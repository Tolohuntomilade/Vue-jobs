<template>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
        <div v-for="job in jobs" :key="job.id" class="job-class">
        <router-link :to="{name: 'jobsdetails', params:{id: job.id}}">
            <h2>{{job.title}}</h2>
            <!-- This is used to dynamicaally pass parammeters -->
        </router-link>
        </div>
    </div>
    <div v-else>
         <p>Loading job details ...</p>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            jobs:[
                // {title: 'Ninja UX Designer', id: 1, details: 'lorem'},
                // {title: 'Ninja Web Developer', id: 2, details: 'lorem'},
                // {title: 'Ninja Vue Developer', id: 3, details: 'lorem'}
            ]
            // Data are stored in the db.json that mimic the normal database on the server with data instead of having everything in your components just for mock trial though because database is more global

            // To install
            // 1. define the details for the data as shown here, you can declare more then one object
            // 2. open a new terminal
            // 3. run npm install json-server
            //4. run npx json-server --watch data/db.json, this is to track any changes made in the json file
            //5. Then you have an access to a link for it
            //6. Then you come to where its to be used that is Jobs.vue
            //7. Follow the procedure from **
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs') 
            // .then((res)=>res.json)
            //This used to reset the raw json objects to javascript, but because we are dealing with one single object we can rewrite it as
             .then(res=>res.json())
             .then(data => this.jobs=data)
             //Then the new js object is now assigned to jobs array
            //Then if there is an error do this to display the error on the console
            .catch(err => console.log(err.message))
            
    },
}
</script>

<style scoped>
    .job-class h2{
        cursor: pointer;
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        color: #444;
    }
    .job-class h2:hover{
        background: #ddd;
    }
    .job-class a{
        text-decoration: none;
    }
</style>