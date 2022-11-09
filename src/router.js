import Vue from 'vue'
import VueRouter from 'vue-router'

//import Binding from './componentes/Binding.vue'
import Formulario from './componentes/Formulario.vue'
import Choice from './componentes/Choice.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/choice', component: Choice },
    ]
})



