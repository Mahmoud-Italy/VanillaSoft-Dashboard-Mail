<template>
    <div class="">
        
        <table id="mailables_list" class="table table-responsive table-hover table-sm mb-0 penultimate-column-right">
            <thead>
                <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Body</th>
                    <th scope="col">Last edited</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="(item, index) in items" :key="index" id="mailable_item_">
                    <td class="pr-0">
                        <router-link :to="{ name: 'show-mailables', params:{id: item.encrypt_id} }"
                            style="color:grey">
                            {{ item.subject }}
                        </router-link>
                    </td>
                    <td class="text-muted">
                        {{ item.short_body }} 
                    </td>
                    <td class="table-fit">
                        <span>{{ item.diffForHumans }}</span>
                    </td>

                    <td class="table-fit">
                        <router-link 
                            :to="{ name: 'show-mailables', params:{id: item.encrypt_id} }" 
                            class="table-action mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16">
                                <path d="M16.56 13.66a8 8 0 0 1-11.32 0L.3 8.7a1 1 0 0 1 0-1.42l4.95-4.95a8 8 0 0 1 11.32 0l4.95 4.95a1 1 0 0 1 0 1.42l-4.95 4.95-.01.01zm-9.9-1.42a6 6 0 0 0 8.48 0L19.38 8l-4.24-4.24a6 6 0 0 0-8.48 0L2.4 8l4.25 4.24h.01zM10.9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                            </svg>
                        </router-link>

                        <span 
                            v-if="item.loading"
                            class="spinner-grow spinner-grow-sm mr-1" 
                            role="status" 
                            aria-hidden="true">
                        </span>

                        <a 
                            href="javaascript:;" 
                            v-if="!item.loading"
                            @click="item.loading = true; deleteItem(item.encrypt_id)" 
                            class="table-action remove-item" data-mailable-name="name">
                            <svg enable-background="new 0 0 268.476 268.476" version="1.1" viewBox="0 0 268.476 268.476" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="remove">
                                <path d="m63.119 250.25s3.999 18.222 24.583 18.222h93.072c20.583 0 24.582-18.222 24.582-18.222l18.374-178.66h-178.98l18.373 178.66zm106.92-151.81c0-4.943 4.006-8.949 8.949-8.949s8.95 4.006 8.95 8.949l-8.95 134.24c0 4.943-4.007 8.949-8.949 8.949s-8.949-4.007-8.949-8.949l8.949-134.24zm-44.746 0c0-4.943 4.007-8.949 8.949-8.949 4.943 0 8.949 4.006 8.949 8.949v134.24c0 4.943-4.006 8.949-8.949 8.949s-8.949-4.007-8.949-8.949v-134.24zm-35.797-8.95c4.943 0 8.949 4.006 8.949 8.949l8.95 134.24c0 4.943-4.007 8.949-8.95 8.949-4.942 0-8.949-4.007-8.949-8.949l-8.949-134.24c0-4.943 4.007-8.95 8.949-8.95zm128.87-53.681h-39.376v-17.912c0-13.577-4.391-17.899-17.898-17.899h-53.696c-12.389 0-17.898 6.001-17.898 17.899v17.913h-39.376c-7.914 0-14.319 6.007-14.319 13.43 0 7.424 6.405 13.431 14.319 13.431h168.24c7.914 0 14.319-6.007 14.319-13.431 0-7.423-6.405-13.431-14.319-13.431zm-57.274 0h-53.695l1e-3 -17.913h53.695v17.913z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                        </a>
                    </td>

                </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    name: 'Table',
    props: ['items'],
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

        deleteItem(id) {
           this.$emit('deleteItems', id)
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>