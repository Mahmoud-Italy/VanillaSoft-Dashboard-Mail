<template>
    
    <div class="col-lg-9 col-md-12">

        <div class="card my-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h5>New Message</h5>
            </div>

            <div class="card-body card-bg-secondary">
                <table class="table mb-0 table-borderless">
                    <tbody>
                        <tr>
                            <td class="table-fit font-weight-sixhundred">To</td>
                            <td>
                                <multiselect 
                                    id="multiselect"
                                    ref="multiselectRef"
                                    autocomplete="on"
                                    v-model="row.to" 
                                    :multiple="true"
                                    tag-placeholder="Add this email"
                                    :options="options"
                                    :hide-selected="true" 
                                    :preserve-search="true" 
                                    :taggable="true" 
                                    @tag="addEmail"
                                    placeholder="Seach or add emails.">
                                </multiselect>          
                            </td>
                        </tr>        
                        <tr>
                            <td class="table-fit font-weight-sixhundred">Subject</td>
                            <td>
                                <input type="text" 
                                    class="form-control" 
                                    v-model="row.subject">                
                            </td>
                        </tr>       
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card mb-3">
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-msg-tab" data-toggle="pill" href="#pills-msg" role="tab" aria-controls="pills-msg" aria-selected="true">Message</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-markdown-tab" data-toggle="pill" href="#pills-markdown" role="tab" aria-controls="pills-markdown" aria-selected="false">Attachments</a>
                </li>
            </ul>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-msg" role="tabpanel" aria-labelledby="pills-msg-tab">
                        
                        <div class="card my-4" style="border:0; box-shadow:none">
                            <div>
                                <editor id="editor"
                                    v-model="row.body"
                                    :api-key="editor.api_key"
                                    :init="{
                                        height: 500,
                                        menubar: editor.menubar,
                                        plugins: editor.plugins,
                                        toolbar: editor.toolbar
                                    }"
                                />
                            </div>
                        </div>


                        <div class="">
                            <button 
                                type="button" 
                                :disabled="loading"
                                @click="addNew"
                                class="btn btn-primary">
                                <span v-if="loading">
                                    <span 
                                        class="spinner-grow spinner-grow-sm mr-1" 
                                        role="status" 
                                        aria-hidden="true">
                                    </span>
                                </span>
                                <span v-if="!loading" v-html="'Send Emails'"></span>
                            </button>
                        </div>

                    </div>


                    <div class="tab-pane fade" id="pills-markdown" role="tabpanel" aria-labelledby="pills-markdown-tab">
                    
                        <div class="card my-4"
                            style="border:0; box-shadow:none">

                            <div 
                                v-for="i in row.attachment_key" 
                                :key="'i1'+i" 
                                :class="(i == 0) ? 'hidden' : ''"
                                :id="'frm1_'+i"
                                class="ui-for-div">

                                    <!--  Remove -->
                                    <div class="pull-right ui-mt-10">
                                        <button 
                                            v-if="i != 0"
                                            type="button" 
                                            class="btn btn-danger btn-sm"
                                            style="float:right"
                                            @click="removeOption(i)">
                                            <span class="ti-trash font-bold"></span>
                                            <span> Remove </span>
                                        </button>
                                    </div>
                                    <!-- End Remove -->

                                    <!-- File Name -->
                                    <div class="form-group">
                                        <label :for="'label'+i" style="width: 100%">File Name</label>
                                        <input class="form-control" 
                                            :id="'label'+i"
                                            type="text"
                                            v-model="row.attachment_name[i]">
                                    </div>
                                    <!-- End File Name -->

                                    <!-- Attachment -->
                                    <div class="form-group">
                                        <label :for="'gImg'+i">Attachment</label>
                                        <input class="form-control" 
                                            :id="'gImg'+i" 
                                            type="file"
                                            v-on:change="onAttachmentChange($event, i)">
                                    </div>
                                    <!-- End Attachment -->

                                    <hr>
                            </div>

                            <div>
                                <button 
                                    type="button" 
                                    class="btn btn-dark btn-sm"
                                    @click="addMore()">
                                    <span class="ti-plus font-bold"></span>
                                    <span> Add More </span>
                                </button>
                             </div>
                            
                        </div>

                    </div>
                </div>

                

            </div>
        </div>
   
    </div>


</template>

<script>
import Multiselect from 'vue-multiselect'
import Editor from '@tinymce/tinymce-vue'
import iziToast from 'izitoast'

export default {
    name: 'Create',
    components: {
        Editor,
        Multiselect
    },
    data(){
        return {
            //
            row: {
                from: '',
                to: [],
                subject: '',
                body : '',


                // attachments
                attachments: [],
                attachment_key: 0,
                attachment_name: [],
                attachment_filebase64: [],
            },

            // multiselect
            options: [],
            loading: false,

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
        

    },
    methods: {


        addNew() {
            this.loading = true;
            this.axios.defaults.headers.common = {
                'X-Requested-With': 'XMLHttpRequest', // security to prevent CSRF attacks
            };

            // attachments
            for( let i = 1; i < this.row.attachment_filebase64.length; i++ ) {
                this.row.attachments[i] = {
                    'attach_filebase64' : this.row.attachment_filebase64[i],
                    'attach_name': this.row.attachment_name[i]
                }
            }

            const options = {
                url: window.baseURL+'/inbox',
                method: 'POST',
                data: {
                    to: this.row.to,
                    subject: this.row.subject,
                    body: this.row.body,

                    attachments: this.row.attachments,
                }
            }
            this.axios(options)
            .then(() => {
                this.loading = false;
                iziToast.success({
                    icon: 'bx bx-happy',
                    title: 'Great Job,',
                    message: 'Mail Sent Successfully.'
                });
            })
            .catch(err => {
                this.loading = false;
                iziToast.warning({
                    icon: 'bx bx-angry',
                    title: 'Wow wow,',
                    message: (err.response) ? err.response.data.message : ''+err
                });
            })
        },

        // add email
        addEmail (newEmail) {
            this.row.to.push(newEmail)
        },

        // open form
        addMore() {
            this.row.attachment_key++;
        },

        // remote option
        removeOption(i) {
            document.querySelector('#frm1_'+i).remove();
            this.row.attachment_name[i] = '';
            this.row.attachment_filebase64[i] = '';
        },


        onAttachmentChange(e, i){
            const file = e.target.files[0];
            this.createBase64File(file, i);
        },
        createBase64File(fileObject, i){
            const reader = new FileReader();
            reader.readAsDataURL(fileObject);
            reader.onload = e => {
                this.row.attachment_filebase64[i] = e.target.result;
            };
        },

    },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>