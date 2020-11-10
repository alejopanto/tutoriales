export default {
    namespaced: true,
    state: {
        contador: 0
    }, 
    mutations: {
        aumentarContador(state, valor){
            state.contador = state.contador + valor
        }
    }
}