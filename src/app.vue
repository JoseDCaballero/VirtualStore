<template>
    <component :is="layout">
      <router-view v-slot="{ Component }">
        <transition appear mode="out-in" name="side">
            <div :key="Component">
                <component :is="Component"/>
            </div>
        </transition>
      </router-view>
    </component>
  </template>
  
  <script>
  import {HomePage} from "./pages/index.js";
  
  export default {
    computed: {
      HomePage() {
        return HomePage
      },
      layout() {
        return this.$route.meta.layout || 'div'
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>  