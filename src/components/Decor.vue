<template>
  <div>decor</div>
</template>
  <div>eeee</div>
<script lang="ts">
import { Vue } from 'vue-property-decorator'

function Component (options: any) {
  return function (target: any) {
    // 期待的返回目标组建构造函数
    return Vue.extend(options)
  }
}

@Component({
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
})
export default class Decor extends Vue {}
</script>

<style scoped>

</style>
