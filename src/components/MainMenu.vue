<template>
  <div>
    <ul class="nav flex-column">
      <li class="nav-item" v-for="site in $store.state.sitemenu">
        <router-link class="nav-link" :to="site.path" v-text="site.name"></router-link>
      </li>      
    </ul>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: process.env.PRODUCTS
    }
  }
}
</script>