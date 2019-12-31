import Mock from 'mockjs'

export const getUserInfo = options => {
  const template = {
    'str|2-4': 'hulu',
    'name|5': 'hulu',
    'age|+2': 18,
    'num|4-10': 999,
    'float|3-7.2-6': 999999,
    'bool|1': true,
    'bool2|1-9': true, // min/(min+max)
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3]
  }
  return Mock.mock(template)
  // const template = {
  //   'str|2-4': 'hulu',
  //   'name|5': 'hulu',
  //   'age|+2': 18
  // }
  // const arr = []
  // let arrLen = 3
  // while (arrLen--) {
  //   arr.push(template)
  // }
  // return Mock.mock(arr)
}
