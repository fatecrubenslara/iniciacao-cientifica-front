import Vue from 'vue'

import Header from '@comp/header'
import Button from '@comp/yButton'
import Input from '@comp/yInput'
import Select from '@comp/ySelect'
import Loader from '@comp/yLoader'
import DashboardContent from '@comp/dashBoardContent'

Vue.component('w-dashboard-content', DashboardContent)
Vue.component('w-header', Header)
Vue.component('w-loader', Loader)
Vue.component('w-select', Select)
Vue.component('w-button', Button)
Vue.component('w-input', Input)