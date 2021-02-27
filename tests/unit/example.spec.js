import { shallowMount } from '@vue/test-utils'
import List from '@/views/mailable/List.vue'

describe(List, () => {
  
    let http;
    let store;

    beforeAll(() => {
        http = new MockAdapter(axios);
        store = new Vuex.Store(storeConfig());
    });

    afterEach(() => {
        http.reset();
    });

    afterAll(() => {
        http.restore();
    });

    it('calls inbox api and sets the flash messages', () => {
        const fakeData = { 
            api_token: ''
         };
        http.onPost('/v1/inbox').reply(200, { data: fakeData });
        return store.dispatch('inbox')
            .then(() => expect(store.state.messages).toHaveLength(1));
    });
  
})

