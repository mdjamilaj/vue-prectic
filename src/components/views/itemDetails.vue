<template>
    <div v-if="item" class="row">
        <div class="col-sm-6">
            <img :src="item.photo" alt="Photo">
        </div>
        <div class="col-sm-6">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <span>$ {{ item.price }}</span>
            <a @click="addToCart(item)" class="btn float-right btn-primary">+ add</a>
        </div>
    </div>
    <h3 v-else>Loading...</h3>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            item: null
        }
    },
    mounted(){
        this.fetchItem()
    },
    methods:{
        fetchItem(){
            var self = this
            Axios.get('http://127.0.0.1:3333/api/item/'+this.$route.params.id).then(response => {
                self.item = response.data
            })
        },
        addToCart(item){
            this.$store.commit('addToCart', item)
        }

    }
}
</script>

<style>

</style>