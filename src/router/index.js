import Vue from 'vue'
import Router from 'vue-router'
import Synthesize from '../components/Synthesize.vue'
import Man from '../components/Man.vue'
import Woman from '../components/Woman.vue'
import Publish from '../components/Publish.vue'
import Monthly from '../components/Monthly.vue'
import details from '../components/Detail.vue'
import body from '../components/body.vue'
import ReadBook from '../components/ReadBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/body',
      component: body,
      children: [
        {path: '/synthesize', component: Synthesize},
        {path: '/man', component: Man},
        {path: '/woman', component: Woman},
        {path: '/publish', component: Publish},
        {path: '/monthly', component: Monthly}
        ]
    },
    {path: '/details', name: 'detail', component: details},
    {path: '/readBook', name: 'reads', component: ReadBook}
  ],
  linkActiveClass: 'active'
})
