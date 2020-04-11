class Feature2 {
    id: number;
    name: string;
    // selected: string,
    version?: string; // 可选的参数
    // eslint-disable-next-line no-useless-constructor
    constructor (id: number, name: string, version: string) {
      this.id = id
      this.name = name
    }
}

// 接口形式表示
interface Feature3 {
    id: number,
    name: string,
    // selected: string,
    version?: string // 可选的参数
}

export type Feature = {
    id: number,
    name: string,
    // selected: string,
    version?: string // 可选的参数
}

export type Select = {
    selected: boolean
}

export type FeatureSelect = Feature & Select
