const refs = 'mailable'
export default [
    { 
        path: '/', 
        name: 'mailables', 
        component: () => import('@/views/'+refs+'/List.vue')
    },
    { 
        path: '/create', 
        name: 'create-mailables', 
        component: () => import('@/views/'+refs+'/Create.vue')
    },
    { 
        path: '/show/:id', 
        name: 'show-mailables', 
        component: () => import('@/views/'+refs+'/Show.vue')
    },
]
