<template>
  <div class="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import * as api from '../api/index.js'

export default {
  name: 'mainWorld',
  data () {
    return {
      msg: 'Welcome pengchao'
    }
  },
  created: function () {
    api.getHomeInfo().then(res => {})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
