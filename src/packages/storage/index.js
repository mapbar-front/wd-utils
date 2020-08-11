/**
 * storage
 * import storage from 'storage';
 * storage.set('name', 'value')
 * storage.session.set('name', 'value')
 * 由于项目中常需用到本地storage存储，复杂的数组、对象等，
 * 每次都需要JSON.stringify()和JSON.parse()进行序列化、反序列化操作，
 * 再者，存入storage的数值，取出来就变成字符串了，因此，对storage简单封装，
 * 使取出的值类型和存入时保持一致，也可以存入整个object对象。
 */

const store = {
  storage: window.localStorage,
  session: {
    storage: window.sessionStorage
  }
}

let dataList = []

const storeApi = {

  set (key, value) {
    if (!value) return

    dataList.push({ key: key, value: value })
    this.storage.setItem(key, serialize(value))
  },

  get (key) {
    if (!key) return

    const val = deserialize(key)
    return val
  },

  remove (key) {
    if (!key) return

    this.storage.removeItem(key)
    dataList = dataList.filter(item => {
      return item.key !== key
    })
  },

  clear () {
    this.storage.clear()
    dataList = []
  },

  // 批量保存 obj => (key, value)
  setList (obj) {
    for (const i in obj) {
      dataList.push({ key: i, value: obj[i] })
      this.storage.setItem(i, serialize(obj[i]))
    }
  },

  // 批量获取 array => key 数组
  getList (array) {
    const data = {}

    for (const key of array) {
      if (this.storage.getItem(key)) {
        data[key] = deserialize(key)
      }
    }

    return data
  },

  // 批量删除 array => key 数组
  removeList (array) {
    for (const key of array) {
      this.storage.removeItem(key)
      dataList = dataList.filter(item => {
        return item.key !== key
      })
    }
  }
}

const serialize = function (value) {
  if (!value) return

  let val = ''
  const type = Object.prototype.toString.call(value)
  if (type === '[object Object]' || type === '[object Array]') {
    val = JSON.stringify(value)
  } else {
    val = value
  }

  return val
}

const deserialize = function (key) {
  if (!key) return

  let val = ''
  dataList.map((item) => {
    if (item.key === key) {
      val = item.value
    }
  })

  return val
}

Object.assign(store, storeApi)
Object.assign(store.session, storeApi)

export default store
