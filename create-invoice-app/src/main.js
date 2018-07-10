// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': Index,
  '/hello': HelloWorld
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
