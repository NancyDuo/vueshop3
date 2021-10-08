import Vue from 'vue'
import { Button, Card, MenuItemGroup,Row,Col, Table, TableColumn, Pagination} from 'element-ui'
import { Form,FormItem } from 'element-ui'
import { Input } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import {Container,Header,Aside,Main} from 'element-ui';
import {Submenu,MenuItem,Menu,RadioButton,RadioGroup,Breadcrumb,BreadcrumbItem} from 'element-ui'
locale.use(lang)

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

