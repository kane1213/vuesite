<template>
  <div>
    Products
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created () {
    if(this.$store.state.siteProduct.length == 0) {
      this.$store.dispatch("getProducts");
    }
  },
  computed: {

    /*categorys () {
      var _tmpArray = [];
      if(this.$store.state.siteProduct.length > 0) {
        this.$store.state.siteProduct.forEach(function(product){
          if(_tmpArray.indexOf(product.category) < 0) {
            _tmpArray.push(product.category);
          }
          
        });
      }
      return _tmpArray;
    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
 

</style>
