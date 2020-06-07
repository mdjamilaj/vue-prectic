<template>
          <div v-if="!loading" class="row">
            <div v-for="(item, index) in items" :key="index" class="card ml-2 mt-2" style="width: 12rem;">
                <router-link tag="div" :to="{ path: '/item/'+ item.id }">
                    <img class="card-img-top" :src="item.photo" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title text-center">{{ item.title}}</h5><hr>
                    </div>
                </router-link>
                <p class="card-text float-left mt-2">{{ item.price }}</p>
                <a @click="addToCart(item)" class="btn float-right btn-primary">+ add</a>
            </div>
        </div>
        <h1 v-else>Loading...</h1>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            loading: true
        }
    },
    computed: {
        items(){
            return this.$store.getters.getInventory
        }
    },
    // props: ['items'],
    mounted(){
        this.fetchInventory()
    },
    methods: {
        addToCart(item){
            this.$store.dispatch('addToCart', item)
        },
        fetchInventory(){
            var self = this
            axios.get('http://127.0.0.1:3333/api/items').then(response => {
                setTimeout(function(){
                    self.$store.commit('setInventory', response.data)
                    self.loading = false
                }, 1000)
            })
        }
    }
}
</script>

<style>

</style>