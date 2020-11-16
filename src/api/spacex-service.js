import axios from "axios";

const apiUrl = `https://api.spacexdata.com/v4`;
export default {
    getCapsules(){
        return axios.get(`${apiUrl}/capsules`);
    },
    getLaunches(){
        return axios.get(`${apiUrl}/launches/past`);
    },
    getLaunch(launchId){
        return axios.get(`${apiUrl}/launches/${launchId}`);
    },
    getLaunchpad(launchpadId){
        return axios.get(`${apiUrl}/launchpads/${launchpadId}`);
    },   
    getAllSatellites(){
        return axios.get(`${apiUrl}/starlink`);
    }
}