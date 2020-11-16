<template>  
    <div class="grid-0">
      <div class="col-desk-12 d-flex middle-xs">
        <div class="menu-home">
          <router-link v-for="(item, index) in menu" :key="index" :to="item.link">
            <button  class="home-button"          
            >{{item.title}}</button>
          </router-link>
        </div>
        
      </div>      
    </div>  
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: function(){
    return{
      menu:[
        {
          title: "Assignment 1",
          link: "/assignment1"
        },
        {
          title: "Assignment 2",
          link: "/assignment2"
        },
      ]
    }
  },
  components: {
    
  }
};
</script>
