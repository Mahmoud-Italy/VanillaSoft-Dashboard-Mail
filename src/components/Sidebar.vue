<template>
        
        <div class="col-lg-3 col-md-12">
            <ul class="nav d-flex flex-lg-column flex-sm-row flex-nowrap sidebar py-sm-2">

                <li class="nav-item">
                    <router-link 
                        to="/create"
                        :class="(this.$route.path == '/create') ? 'active' : ''"
                        class="nav-link d-flex align-items-center">
                        <svg enable-background="new 0 0 14 14" version="1.1" viewBox="0 0 14 14" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986       c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/>
                            <path d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8       L13.684,2.271z"/>
                            <polygon points="0 2.878 0 11.186 4.833 7.079"/>
                            <polygon points="9.167 7.079 14 11.186 14 2.875"/>
                        </svg>
                        New Message
                    </router-link>
                </li>
                
                <li class="nav-item">
                    <router-link 
                        to="/" 
                        :class="(this.$route.path == '/') ? 'active' : ''"
                        class="nav-link d-flex align-items-center">
                        <svg viewBox="0 0 307 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 13C0 5.82029 5.82361 0 13.0033 0C54.3837 0 81.2128 0 125.859 0H128C135.18 0 141 5.8203 141 13V153C141 160.18 135.18 166 128 166H13C5.8203 166 0 160.18 0 153V13Z"/>
                            <path d="M166 13C166 5.8203 171.824 0 179.003 0C220.384 0 247.213 0 291.859 0H294C301.18 0 307 5.8203 307 13V102C307 109.18 301.18 115 294 115H179C171.82 115 166 109.18 166 102V13Z"/>
                            <path d="M166 153C166 145.82 171.824 140 179.003 140C220.384 140 247.213 140 291.859 140H294C301.18 140 307 145.82 307 153V293C307 300.18 301.18 306 294 306H179C171.82 306 166 300.18 166 293V153Z"/>
                            <path d="M0 204C0 196.82 5.82361 191 13.0033 191C54.3837 191 81.2128 191 125.859 191H128C135.18 191 141 196.82 141 204V293C141 300.18 135.18 306 128 306H13C5.8203 306 0 300.18 0 293V204Z"/>
                        </svg>
                        Mailable
                    </router-link>
                </li>

            </ul>
        </div>

</template>

<script>
export default {
    name: 'Sidebar',
    data(){
        return {
            //
        }
    },
    mounted() {},
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
