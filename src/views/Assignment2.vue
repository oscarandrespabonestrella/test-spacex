<template>
  <div class="grid-0 spacex">
    <div class="col-desk-5 mt-4">
      <h2>Space X Failure Retriever</h2>
      <div class="search">
        <input type="text" placeholder="Inser launchpad Id ..." v-model="inputLaunchpad">
        <button class="btn-search" v-on:click="failedLaunches(inputLaunchpad)"> <font-awesome-icon icon="search" /></button>
      </div>
      <div class="result mt-4" v-if="failuresLaunchpad.launchpad && failuresLaunchpad.all_failures.length">
          <p><strong>Name:</strong> {{failuresLaunchpad.launchpad}}</p>
          <p><strong>Launches:</strong></p>
          <ul>
            <li v-for="(item, index) in failuresLaunchpad.all_failures" :key="index">
              <p><strong>Name:</strong> {{item.name}}</p>
              <p><strong>Failures:</strong></p>
              <ul>
                <li v-for="(failure, index2) in item.failures" :key="index2">
                    {{failure}}
                </li>
              </ul>
            </li>
          </ul>          
      </div>      
    </div>
    <div class="col-desk-7 mt-4 satellites">
      <div class="grid-0">
        <div class="col-desk-6">
          <h2>Satellites</h2>
        </div>
        <div class="col-desk-6 d-flex justify-content-flex-end">
          <h2>{{filteredRows.length}}</h2>
        </div>
      </div>
      
      <div class="grid-0 mt-4">
        <div class="col-desk-4">
          <input 
            type="text"            
            placeholder="Filter by object name"
            v-model="filters.name" />                
        </div>
        <div class="col-desk-2">
          <select v-model="filters.year">
            <option value="">Year:</option>
            <option v-for="(year, key) in years" :value="year" :key="'test'+key">{{ year }}</option>
          </select>
        </div>
        <div class="col-desk-2">
          <select v-model="filters.month"> 
            <option value="">Month:</option>           
            <option v-for="(month, key) in months" :value="month.value" :key="'test2'+key">{{ month.title}}</option>
          </select>
        </div>
        <div class="col-desk-4">
            <input type="date" v-model="filters.date" />
        </div>
      </div>

      <table class="satellite-table mt-3">
        <thead>
          <th>Launch ID</th>
          <th>Object Name</th>
          <th>Launch Date</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredRows" :key="index">
            <td>{{item.launch}}</td>
            <td>{{item.spaceTrack ? item.spaceTrack.OBJECT_NAME : ''}}</td>
            <td>{{item.spaceTrack ? item.spaceTrack.LAUNCH_DATE : '' | formatDate}}</td>
          </tr>
        </tbody>
      </table>      
    </div>
    
  </div>
</template>
<script>

import { mapState} from 'vuex';


export default {
  name: "Assigment2",
  data: function(){
    return {     
      filters: {
        name: "",
        year: "",
        month:"",
        date: ""
      },      
      inputLaunchpad: "",
      months: [
        {value: 0, title:'January'},
        {value: 1, title:'February'},
        {value: 2, title:'March'},
        {value: 3, title:'April'},
        {value: 4, title:'May'},
        {value: 5, title:'June'},
        {value: 6, title:'July'},
        {value: 7, title:'August'},
        {value: 8, title:'September'},
        {value: 9, title:'October'},
        {value: 10, title:'November'},
        {value: 11, title:'December'}
      ]      
    }
  },
  methods:{
    // function 1
    failedLaunches(launchpadId){
      if(launchpadId && this.launches.length){
        const auxLaunch = this.launches.find(launch => launch.launchpad === launchpadId);
        if(auxLaunch) {
          this.$store.dispatch("spacex/getFailuresLaunchpad", auxLaunch.launchpad);
        }
      }
    },
    compareDates(date1, date2){      
      if(!date1 || !date2) return false;
      console.log(date1, date2);
      return date1 === date2
    }    
  },
  computed: mapState({  
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 2000}, (value, index) => 2001 + index).reverse()
    },
    launches: state => state.spacex.launches,
    failuresLaunchpad: state => state.spacex.failuresLaunchpad,
    satellites: state => state.spacex.satellites,
    filteredRows(){                  
      return this.satellites.filter(
        x=> x.spaceTrack.OBJECT_NAME.toLowerCase().includes(this.filters.name.toLowerCase())
        && (!this.filters.year || new Date(x.spaceTrack.LAUNCH_DATE).getFullYear() === this.filters.year)
        && (!this.filters.month || new Date(x.spaceTrack.LAUNCH_DATE).getMonth() === this.filters.month)
        && (!this.filters.date || this.compareDates(x.spaceTrack.LAUNCH_DATE,this.filters.date))
      );
    }

  }),
  created () {    
    this.$store.dispatch("spacex/getAllLaunches");
    this.$store.dispatch("spacex/getAllSatellites");
  }, 
  filters:{
    formatDate: function(value){
      if(!value) return '';
      return new Date(value).toDateString();
    }
  }
}
</script>
