<template>
  
        <div class="col-lg-9 col-md-12">
            <div class="card row my-4">

                <div class="card-header d-flex align-items-center justify-content-between">
                    <h5>Mailable</h5>
                </div>

                <Loading 
                    v-if="pgLoading"
                    :status="pgLoading">
                </Loading>
                
                <NoDataFound 
                    v-if="!pgLoading && !items.length">
                </NoDataFound>
                
                <Table 
                    v-if="!pgLoading && items.length"
                    :items="items"
                    
                   v-on:deleteItems="handleDeleteItem">
                </Table>

            </div>
        </div>
        
</template>

<script>
import iziToast from 'izitoast'

export default {
    name: 'List',
    // Lazy Component
    components: {
        Table: () => import('@/components/Table.vue'),
        Loading: () => import('@/components/Loading.vue'),
        NoDataFound: () => import('@/components/NoDataFound.vue'),
    },
    data(){
        return {
            //
            pgLoading: false,
            items: [],
        }
    },
    mounted() {},
    created() {
        //    
        this.fetchData(true);
    },
    methods: {
        //
        fetchData(loading=true) {
            if(loading) { this.pgLoading = true; }
            this.axios.defaults.headers.common = {
                'X-Requested-With': 'XMLHttpRequest', // security to prevent CSRF attacks
            };
            const options = {
                url: window.baseURL+'/inbox',
                method: 'GET',
                data: {}
            }
            this.axios(options)
            .then(res => {
                this.pgLoading = false;
                this.items = res.data.items;
            })
            .catch(() => {
                this.pgLoading = false;
                //
            })
            .finally(() => {});
        },

        handleDeleteItem(id) {
            this.deleteItem(id)
        },

        deleteItem(id) {
            this.axios.defaults.headers.common = {
                'X-Requested-With': 'XMLHttpRequest', // security to prevent CSRF attacks
            };
            const options = {
                url: window.baseURL+'/inbox/'+id,
                method: 'DELETE',
                data: {}
            }
            this.axios(options)
            .then(() => {
                iziToast.success({
                    icon: 'bx bx-happy',
                    title: 'Great Job,',
                    message: 'Mail Deleted Successfully.'
                });
                this.fetchData(false);
            })
            .catch(err => {
                iziToast.warning({
                    icon: 'bx bx-angry',
                    title: 'Wow wow,',
                    message: (err.response) ? err.response.data.message : ''+err
                });
            })
            .finally(() => {});
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
