import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Cadastro from './views/Cadastro.vue'
import Dashboard from './views/Dashboard.vue'
import UserRegister from './views/UserRegister.vue'
import UserEdit from './views/UserEdit.vue'
import Autores from './views/Autores.vue'
import AutoresCadastro from './views/AutoresCadastro.vue'
import PeriodoInscricao from './views/PeriodoInscricao.vue'
import PeriodoInscricaoEditar from './views/PeriodoInscricaoEditar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    
    {
      path: '/dashboard/usuario/cadastro',
      name: 'User register',
      component: UserRegister
    },
    {
      path: '/dashboard/usuario/editar',
      name: 'User editar',
      component: UserEdit
    },
    {
      path: '/dashboard/autores',
      name: 'Autores',
      component: Autores
    },
    {
      path: '/dashboard/autores/cadastro',
      name: 'Autores Cadastro',
      component: AutoresCadastro
    },
    {
      path: '/dashboard/periodo-de-inscricao',
      name: 'Periodo de Inscrição',
      component: PeriodoInscricao
    },
    {
      path: '/dashboard/periodo-de-inscricao/editar',
      name: 'Periodo de Inscrição Editar',
      component: PeriodoInscricaoEditar
    }
  ]
})

