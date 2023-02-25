import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        modal: null;
    },
    mutations: {
        setModal(state, payload) {
            state.modal = true;
        },
        removeModal(state) {
            state.modal = null;
        }
    },
    actions: {
    },
    modules: {
    }
})
