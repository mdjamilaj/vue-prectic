<template>

<ul class="list-grou">
    <li class="list-group-item bg-dark">
        <span class="item-name text-light">Name</span>
        <span class="item-price float-right text-light">Price</span>
    </li>
    <li v-for="(item, index) in items" :key="index" class="mt-1 mb-1 list-group-item">
        <button class="btn btn-sm btn-danger" @click="removeItem(index)">-</button>
        <span class="item-name">{{ item.title }}</span>
        <span class="item-price float-right">$ {{ item.price }}</span>
    </li>
    <li class="list-group-item bg-success">
        <span class="item-name text-warning">Total - </span>
        <span class="item-price float-right text-warning">$ {{ totalPrice }}</span>
    </li>
    <li v-if="items.length > 0" class="list-group-item bg-success">
        <button @click="checkOut" class="btn btn-block btn-warning">CheckOut</button>
    </li>
</ul>
    
</template>

<script>
export default {
    computed: {
        items(){
            return this.$store.getters.getCart
        },
        totalPrice(){
            var total =0;
            this.items.forEach(item => {
                total += parseFloat(item.price)
            });
            return total.toFixed(2);
        }
    },
    methods: {
        removeItem(index){
            this.$store.commit('removeItem', index)
        },
        checkOut() {
            if(confirm('Are You sure you want to checkout?')){
                this.$store.commit('clearCart')
            }
        }
    }
}
</script>

<style>

</style>