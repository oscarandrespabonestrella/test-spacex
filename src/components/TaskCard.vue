<template>
    <div class="card">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
        <div class="card-footer grid-0">
            <div class="col-mob-6 col-desk-6">
                <div class="avatar" :style="{'background-color':user.color}">{{user.title}}</div>
            </div>
            <div class="col-mob-6 col-desk-6 date">
                {{date}}
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "Card",
    data: function(){
        return{
        }
    },
    props:['title', 'description', 'user', 'date' ]

}
</script>