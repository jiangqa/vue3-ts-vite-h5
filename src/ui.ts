import { App } from 'vue'
import { Button, Form, Field, CellGroup, NavBar, Loading } from 'vant'
import Container from './components/layout/LayoutContainer.vue'
import Scroll from './components/layout/LayoutScroll.vue'
import './assets/less/layout.less'
export default {
    install: (app: App) => {
        app.use(Button).use(Form).use(Field).use(CellGroup).use(NavBar).use(Loading)
        app.component('LayoutContainer', Container)
        app.component('LayoutScroll', Scroll)
    }
}
