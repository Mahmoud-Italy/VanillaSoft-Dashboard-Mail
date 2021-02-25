<template>
    
    <div class="col-lg-9 col-md-12">

        <div v-if="pgLoading" class="text-center my-4">
            <span 
                class="spinner-grow spinner-grow-md mr-1" 
                role="status" 
                aria-hidden="true">
            </span>
        </div> 

        <div v-if="!pgLoading" class="card my-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h5>Show Message</h5>
            </div>

            <div class="card-body card-bg-secondary">
                <table class="table mb-0 table-borderless">
                    <tbody>
                        <tr>
                            <td class="table-fit font-weight-sixhundred">To</td>
                            <td>
                                <span v-for="(email, idx) in row.to_array" :key="idx" 
                                    class="badge badge-success" 
                                    style="margin-left:5px;background:#41b883;color:#fff;font-size:14px;font-weight:600;padding:4px 15px 4px 10px">
                                    {{ email }}
                                </span>     
                            </td>
                        </tr>        
                        <tr>
                            <td class="table-fit font-weight-sixhundred">Subject</td>
                            <td>
                                {{ row.subject }}              
                            </td>
                        </tr>       
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="!pgLoading" class="card mb-3">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-msg-tab" data-toggle="pill" href="#pills-msg" role="tab" aria-controls="pills-msg" aria-selected="true">Message</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-markdown-tab" data-toggle="pill" href="#pills-markdown" role="tab" aria-controls="pills-markdown" aria-selected="false">Attachments</a>
                </li>
            </ul>
        </div>

        <div v-if="!pgLoading" class="card">
            <div class="card-body">
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-msg" role="tabpanel" aria-labelledby="pills-msg-tab">
                        
                        <div class="card my-4" style="border:0; box-shadow:none">
                            <div>
                                <p v-html="row.body"></p>
                            </div>
                        </div>

                    </div>


                    <div class="tab-pane fade" id="pills-markdown" role="tabpanel" aria-labelledby="pills-markdown-tab">
                    
                        <div class="card my-4" style="border:0; box-shadow:none">

                            <div 
                                v-for="(attach, idx) in attachments" 
                                :key="idx" 
                                class="ui-for-div">

                                    <!-- File Name -->
                                    <div class="form-group">
                                        <label style="width: 100%">File Name</label>
                                        <input class="form-control" 
                                            type="text"
                                            v-model="attach.name">
                                    </div>
                                    <!-- End File Name -->

                                    <!-- Attachment -->
                                    <div class="form-group">
                                        <label>Attachment</label>
                                        <p><a :href="attach.url" target="_blank">Preview</a> &nbsp; . &nbsp; <a :href="attach.url" download>Download</a></p>
                                    </div>
                                    <!-- End Attachment -->
                                    <hr>

                            </div>

                            
                        </div>

                    </div>
                </div>

                

            </div>
        </div>
   
    </div>


</template>

<script>
import iziToast from 'izitoast';

export default {
    name: 'Show',
    components: {},
    data(){
        return {
            //
            row: '',

            // attachments
            attachments: [],

            // multiselect
            options: [],
            pgLoading: true,

            // editor
            editor: {
                api_key: window.editor_apiKey,
                menubar: window.editor_menubar,
                plugins: window.editor_plugins,
                toolbar: window.editor_toolbar,
            },
        }
    },
    mounted() {},
    created() {
        
        this.fetchRow();
    },
    methods: {

        //
        fetchRow() {
            this.pgLoading = true;
            this.axios.defaults.headers.common = {
                'X-Requested-With': 'XMLHttpRequest', // security to prevent CSRF attacks
            };

            
            const options = {
                url: window.baseURL+'/inbox/'+this.$route.params.id,
                method: 'GET',
                data: {}
            }
            this.axios(options)
            .then(res => {
                this.pgLoading = false;
                this.row = res.data.item;

                // attachments
                this.attachments = res.data.item.attachments;
            })
            .catch(err => {
                this.pgLoading = false;
                iziToast.warning({
                    icon: 'bx bx-angry',
                    title: 'Wow wow,',
                    message: (err.response) ? err.response.data.message : ''+err
                });
            })
        },

    },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>