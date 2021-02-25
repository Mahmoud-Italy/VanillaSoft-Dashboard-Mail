<template>
    <div class="container col-12 loader-container">
        
        <div v-if="loading" class="row">
            <div class=" text-center">
                <div class="loader loader-lg loader-center"></div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: ['status'],
    data(){
        return {
            loading: this.$props.status,
        }
    },
    mounted() {},
    watch: {
        status: function(new_val) {
            this.loading = new_val;
        }
    },
    created() {},
    methods: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader {
    position: absolute;
    transform: translate(-50%, -50%);
    border: 3px solid #f3f3f3;
    border-top: 3px solid #686767;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.7s linear infinite;
    display: inline;
  }
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.loader-lg {
    width: 40px;
    height: 40px
}
.loader-md {
    width: 30px;
    height: 30px
}
.loader-xs {
    width: 27px;
    height: 27px;
}
.loader-sm {
    width: 20px;
    height: 20px;
}
.loader-center {
    /*display: flex !important;*/
    display: block !important;
    margin-top: -12px;
    margin-left: 6px
}
.loader-container {
    left: 48%;
    margin-top:10%;
}
.loader-container .row {
    height: 200px
}
</style>