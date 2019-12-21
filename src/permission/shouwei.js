import router from '../router/index'

router.beforeEach(function (to, from, next) {
//   console.log(to)

  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (!token) {
      // console.log('跳转到登录')

      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
