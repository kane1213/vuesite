<template>
  <div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link" to="/backstage/products">Products</router-link>
      </li>
      <!--<li class="nav-item" v-for="item in menu">
        <router-link class="nav-link" :to=" '/backstage/product/'+item.category" v-text="item.category">Project1</router-link>
      </li>-->
    </ul>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      //menu: process.env.PRODUCTS
      //menu: this.$store.state.siteProduct
    }
  },
  created () {
    
    // if(this.$store.state.siteProduct.length <= 0) {
    //   this.$store.dispatch("getProducts");
    // }
    // console.log(this.$store.state.siteProduct);
  }
}
</script>