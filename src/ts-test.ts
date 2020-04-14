/* eslint-disable prefer-const */
// 类型注解
let var1: string
// eslint-disable-next-line prefer-const
var1 = 'zzz'
// var1 = 1111

// 类型推断
const var2 = true
// var2 = 'abc'

//  常见类型  string  number  boolean  undefined  null symbol
let var3: string | null

// 任意类型
let var4: any

// 类型数组
let arr: string[]
// eslint-disable-next-line prefer-const
arr = ['zzz']

// 任意类型结合数组
let arrAny: any[]
arrAny = [1, true, 'free']

// 函数中的类型约束
function greet (person: string): string {
  return 'hello ' + person
}

greet('zzz')

function warn (): void {
}

// 类型别名
let objType: { foo: string, bar: string }
objType = { foo: 'fooo', bar: 'barr' }
// eslint-disable-next-line no-unused-expressions
objType.foo

// 类型别名:自定义类型
type Foobar = { foo: string, bar: string }
let aliasType: Foobar

let me: string
me = 'eerrr'

type Foobar1 = { foo: string, bar: string }
let aliasType1: Foobar1

// 函数
// 1,必填参数 只要申明就要传递
// 2,可选参数 加上问好即可
// 3,默认值
function greeting (person: string, age: string = '', msg?: string): string {
  return person + msg
}

// class - ts
class Parent {
  private _foo = 'foo' // 私有属性  不能在类的外部访问
  protected bar = 'bar' // 保护属性  可以在子类中访问

  // 参数属性  构造函数参数加修饰符 能够定义为成员属性
  // eslint-disable-next-line no-useless-constructor
  constructor (public tua = 'tua') {
  }

  // 方法也有修饰符
  private someMethods () {
  }

  // 存取器 属性方式访问 可添加额外逻辑 控制读写性
  get foo () {
    return this._foo
  }

  set foo (val) {
    this._foo = val
  }
}

// eslint-disable-next-line no-new
new Parent()

class Children extends Parent {
  log () {
    return this.foo
  }
}

// eslint-disable-next-line no-new
new Children()

// 装饰器
// 定义:工厂函数
// 分类：类装饰器 /属性装饰器/方法装饰器/参数装饰器
function log (fn: ((message?: any) => void) & ((message?: any) => void)) {
  return function (target: Function) {
    target.prototype.log = function () {
      // console.log(this.bar)
      fn(this.bar)
    }
  }
}

// function log (target:Function) {
//   target.prototype.log = function () {
//     console.log(this.bar)
//   }
// }

// 方法装饰器c参数1是实例 参数2 方法名称  参数3 描述对象
function rec (target:any, name:string, descriptor:any) {
  // 1 执行老方法
  const baz = descriptor.value
  // 2 扩展额外的功能
  descriptor.value = function (val: string) {
    console.log('run methods', val)
    baz.call(this, val)
  }
}

// 属性装饰器 参数1是实例  参数2 是属性名称
function mua (target: any, name: any) {
  target[name] = 'mua~'
  console.log('mua', target[name])
}

// @log(console.log)
@log(window.alert)
class Foo {
  log () {
    throw new Error('Methods not implement')
  }

  bar = 'bar'

  @mua
  ns!: string

  @rec
  setBar (val: string) {
    this.bar = val
  }
}

const foo = new Foo()
foo.log()
foo.setBar('rrr')
