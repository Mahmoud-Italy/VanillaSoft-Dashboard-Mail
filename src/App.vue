<template>
    <div id="app">

        <Header></Header>
        
        <div class="container mt-5">
            <div class="row">
                <Sidebar></Sidebar>
                
                    <router-view></router-view>
                
            </div>

            <Footer></Footer>
        </div>


    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
        Header: () => import('@/components/Header.vue'),
        Sidebar: () => import('@/components/Sidebar.vue'),
        Footer: () => import('@/components/Footer.vue'),
    },
    data() {
        return {
            //
        }
    },
    watch: {},
    created() {
        //
    },
    methods: {
        //
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
