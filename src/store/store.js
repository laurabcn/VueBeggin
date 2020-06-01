import Vue from 'vue'
import Vuex from 'vuex'
import * as user from './modules/user'
import * as event from './modules/event'
import * as notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        event,
        notification
    },
    state: {
        categories: [
            'sustainability',
            'nature',
            'animal welfare',
            'housing',
            'education',
            'food',
            'community'
        ],}
    });





/** catLength(){
        return this.$store.getters.catLength
      },
      ...mapGetters(['getEventById']),
      ...mapState(['user', 'categories'])
 ***** TODO ******
 *
 data
 todos: [
 { id: 1, text: '.1..', done: true },
 { id: 2, text: '.2..', done: false },
 { id: 3, text: '.3..', done: true },
 { id: 4, text: '.4..', done: false },
 ],
 getters

 doneTodos : state => {
            return state.todos.filter(todo => todo.done)
        },
 activeTodosCount: state => {
            return state.todos.filter(todo => !todo.done).length
        },**/