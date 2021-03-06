import Mock from 'mockjs'

export const getUserInfo = () => {
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

export const login = () => {
  return {
    code: 200,
    data: {
      token: 'xxx',
    },
    msg: ''
  }
}

export const authorization = () => {
  return {
    code: 200,
    data: {
      token: 'xxx',
      rules: {
        page: {
          home: true,
          home_index: true,
          table: true,
          about: true,
          wrapper: true,
          params: true,
          count_to: true,
          menu_page: true,
          upload: true,
          optimize_page: true,
          form: true,
          component: true,
          folder_tree: true,
          render_page: true,
          split_pane: true,
          parent: true,
          child: false,
          named_view: false,
          icon_page: true,
          store: true,
          main: true,
          bigfile_upload: true
        },
        component: {
          edit_button: true,
          publish_button: false
        }
      }
    },
    msg: ''
  }
}
