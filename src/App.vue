<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 使用全局状态 -->
    <p @click="add">{{$store.state.counter.count}}</p>
    <p @click="asyncAdd">{{count}}</p>
    <HelloWorld @add="addFeature" msg="Welcome to Your Vue.js + TypeScript App" />
    <Decor msg="2344" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Decor from './components/Decor.vue'
// eslint-disable-next-line no-unused-vars
import { FeatureSelect } from './types'
import CounterModule from '@/store/counter'

// @Component
// @Component({...})
@Component({
  components: {
    HelloWorld,
    Decor
  }
})
export default class App extends Vue {
  addFeature (feature: FeatureSelect) {
    console.log('新增了一个特性', feature.name)
  }

  add () {
    CounterModule.add()
  }

  get count () {
    return CounterModule.count
  }

  asyncAdd () {
    CounterModule.asyncAdd()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
