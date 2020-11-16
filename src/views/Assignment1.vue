<template>
<div>
    <Nav></Nav>
    <div class="grid-0 mt-4">
      <div class="col-desk-12"> 
        <div class="grid-0">
            <div class=" col-mob-4 col-desk-4">
              <h2>Backlog</h2>          
              <TaskCard 
                v-for="(item, index) in sampleData.backLog" :key="index"
                :title="item.title" 
                :description="item.description"
                :user="item.avatar"
                :date="item.date"
              ></TaskCard>

            </div>
            <div class="col-mob-4 col-desk-4">
              <h2>To Do</h2>
              <TaskCard 
                v-for="(item, index) in sampleData.toDo" :key="index"
                :title="item.title" 
                :description="item.description"
                :user="item.avatar"
                :date="item.date"
              ></TaskCard>
            </div>
            <div class="col-mob-4 col-desk-4">
              <h2>Done</h2>
              <TaskCard 
                v-for="(item, index) in sampleData.done" :key="index"
                :title="item.title" 
                :description="item.description"
                :user="item.avatar"
                :date="item.date"
              ></TaskCard>
            </div>    
          </div>       
        </div>      
    </div>  
</div>
</template>

<script>
// @ is an alias to /src
import TaskCard from "@/components/TaskCard.vue";
import json from "@/assets/samples/samples.json";
import Nav from "@/components/Nav.vue";
export default {
  name: "Assigment1",
  data: function(){
    return{
      sampleData: json.sampleData
    }
  },
  components: {
    TaskCard,
    Nav
  }
};
</script>
