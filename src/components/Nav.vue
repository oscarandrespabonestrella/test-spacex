<template>
    <nav class="top-bar  middle-xs">
        <div class="grid-0">
            <div class="col-mob-1 col-desk-1">
                <router-link :to="'/'">
                    <div class="brand">
                        <img src="@/assets/images/logo.svg" alt="" />
                    </div>
                </router-link>
            </div>
            <div class="col-mob-1 col-desk-8 d-flex middle-xs ">
                <div class="top-bar-search">
                    <font-awesome-icon icon="search" />
                    <input type="text" placeholder="Search for..." class="" />                
                </div>
            </div>
            <div class="col-mob-2 col-desk-3 d-flex justify-content-flex-end">
                <div class="top-bar-avatar">
                    <div class="avatar"
                        :style="{ backgroundImage: `url(${userPicture})` }"
                    >
                        
                    </div>
                    <span>Leonetta Lloyd</span>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import userPicture from "@/assets/images/user.jpg";
export default {
    name: "Nav",
    data: function(){
        return(
            {
                userPicture
            }
        )
    }
}
</script>