import router from '../../router'

export default{
    loginUser({commit, state, dispatch},data){
        console.log(data)
        const info = {
            name: data.username
        }
        commit('StateAssign', {currentUser: info})
        router.push('/paginas')
    },
    Logout({commit, state, dispatch}){
        commit('StateAssign', {currentUser: null})
        router.push('/login')
    }
}