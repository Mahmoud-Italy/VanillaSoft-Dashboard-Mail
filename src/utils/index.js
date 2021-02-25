import Vue from 'vue'

/* Vue Axios */
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
/* End Vue Axios */

/* IziToast */
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
Vue.use(iziToast);
/* End IziToast */

/* Axios PLugin */
import AxiosPlugin from 'vue-axios-cors';
Vue.use(AxiosPlugin)
/* End Axios PLugin */

/* Vue Editor */
window.editor_apiKey  = 'xahz1dg338xnac8il0tkxph26xcaxqaewi3bd9cw9t4e6j7b';
window.editor_menubar = 'file edit view insert format tools table help';
window.editor_plugins = [
                         'advlist autolink lists link image charmap print preview anchor',
                         'searchreplace visualblocks code fullscreen',
                         'insertdatetime media table paste code help wordcount'
                        ];
window.editor_toolbar = 'undo redo | formatselect | bold italic backcolor | \
                         alignleft aligncenter alignright alignjustify | \
                         bullist numlist outdent indent | removeformat | help';
/* Vue End Editor */



window.api_token = "$2y$10$8lkX6uwEJqHat64SIFmsL.SJClPOf7rJhIxVsmjOSpdgsIPFUSXz.";
export default []