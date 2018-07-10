<template>
  <div class="row">
      <div class="col-12">
          <h1>{{ title }}</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Create Invoice',
  data () {
    return {
      title: 'Create Invoice Nusanet'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color:#333;
}
</style>
