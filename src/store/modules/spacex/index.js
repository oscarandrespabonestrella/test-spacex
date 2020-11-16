import spacexService from '../../../api/spacex-service'

// initial state
const state = () => ({  
  launches: [],
  selectedLaunchpad: {},
  failuresLaunchpad:{
    "launchpad":"",
    "all_failures":[]
  },
  satellites: [],
  filteredSatellites: [],

})

// getters
const getters = {
    getSatellites(state) {
        return state.satellites;
    }
}

// actions
const actions = {  
  getAllLaunches({commit}){
    spacexService.getLaunches().then(
        launches => {
            commit('setLaunches', launches.data)
        }
    )
  },
  getLaunchpad({commit}, launchpadId){
      spacexService.getLaunchpad(launchpadId).then(
        launchpad => {
            commit('setSelectedLaunchpad', launchpad.data)
        }
      )      
  },
  getFailuresLaunchpad({commit}, launchpadId){
    commit('resetFailuresLaunchpad');
    spacexService.getLaunchpad(launchpadId).then(
        launchpad => {            
            commit('setFailuresLaunchpadName', launchpad.data.name);
            if(launchpad.data.launches && launchpad.data.launches.length){                
                launchpad.data.launches.map(
                    launch => {
                        spacexService.getLaunch(launch).then(
                            response => {
                                if(response.data.failures && response.data.failures.length){
                                    const auxLaunchInfo = {
                                        name: response.data.name, 
                                        failures: response.data.failures.map(x => x.reason)
                                    };
                                    commit('setFailuresLaunchpadFailures', auxLaunchInfo)
                                }
                            }
                        )
                    }
                )
            }
        }
      )      
  },
  getAllSatellites({commit}){
      spacexService.getAllSatellites().then(
          response => {
              commit('setSatellites', response.data);
          }
      )
  },
  filterSatellites({commit, state}, filters){      
      const auxFiltered = state.satellites.filter(satellite => 
        satellite.spaceTrack? satellite.spaceTrack.OBJECT_NAME.include(filters.name) : void(0));
        commit('setFilteredSatellites', auxFiltered);

  }


}

// mutations
const mutations = {   
    setLaunches(state, launches){
        state.launches = launches
    },
    setSelectedLaunchpad(state, launchpad){
            state.selectedLaunchpad = launchpad
    },
    resetFailuresLaunchpad(state){
        state.failuresLaunchpad.name = "";
        state.failuresLaunchpad.all_failures = [];
    },
    setFailuresLaunchpadName(state, name){
        state.failuresLaunchpad.launchpad = name
    },
    setFailuresLaunchpadFailures(state, failure){
        state.failuresLaunchpad.all_failures = [...state.failuresLaunchpad.all_failures, failure]
    },
    setSatellites(state, satellites){
        state.satellites = satellites
    },
    setFilteredSatellites(state, satellites){
        state.filterSatellites = satellites
    }


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}