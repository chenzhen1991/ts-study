<template>
  <div>
    <h2>{{msg}}</h2>
    <p>
      <input type="text" @keydown.enter="addFeature" />
    </p>
    <div
      v-for="feature in features"
      :key="feature.id"
      :class="feature.selected ? 'selected' : null "
    >{{ feature.name }}</div>
    <p>特性总数： {{total}}</p>
  </div>
</template>

<script lang='ts'>
// import axios from 'axios'
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import { FeatureSelect } from '@/types/index'
@Component
export default class HelloWord extends Vue {
    @Prop({ type: String, default: '' })
    msg!: string

    @Prop({ type: String, default: '' })
    msg1!: string

    // msg!: string
  // 属性直接作为data使用
  features: FeatureSelect[] = [];

  // 方法名就是事件名
  @Emit()
  addFeature (e: KeyboardEvent) {
    // 类型断言 不是类型转换 是用户判定
    // eslint-disable-next-line no-unused-expressions
    const inp = e.target as HTMLInputElement
    // eslint-disable-next-line no-unused-vars
    const feature: FeatureSelect = {
      id: this.features.length + 1,
      name: inp.value,
      selected: false
    }
    this.features.push(feature)
    inp.value = ''
    // 通知父组件 返回值就是参数
    return feature
  }

  // 生命周期的钩子
  async created () {
    // 泛型
    // const resp = await axios.get<FeatureSelect[]>('/api/list')
    const resp = await this.$http.get<FeatureSelect[]>('/api/list')
    console.log(resp)

    this.features = resp.data
  }

  // 存取器可以转换为计算属性
  get total () {
    return this.features.length
  }

//   beforeRouter  不是vue自己的路由 不会触发 是router里面的钩子
}
</script>

<style scoped>
.selected {
  background-color: rgb(196, 247, 240);
}
</style>
