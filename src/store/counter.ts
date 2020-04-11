import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from './index'
// import UserModule from './user'

// 动态注册模块
@Module({ dynamic: true, store: store, name: 'counter', namespaced: true })
class CounterModule extends VuexModule {
  count = 1

  @Mutation
  add () {
    this.count++
  }

  get doubleCount () {
    return this.count * 2
  }

  @Action
  asyncAdd () {
    setTimeout(() => {
      this.add()

      // 引用别的action
    //   UserModule.login({ username: 'tom', password: '123' })
    }, 1000)
  }
}

export default getModule(CounterModule)
