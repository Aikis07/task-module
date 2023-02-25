export default {
    namespaced: true,
    state: {
        modal: null,
    },
    mutations: {
        setModal(state, payload) {
            state.modal = payload
        },
        removeModal(state) {
            state.modal = null;
        }
    },
    actions: {
    },
    modules: {
    }
}
