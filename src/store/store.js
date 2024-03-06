import { createStore } from 'vuex'
import { uuidv4 } from '../utils'

const storage = {
    load () {
        return JSON.parse(localStorage.getItem('store') || '[]' )
    },
    save (data) {
        localStorage.setItem('store', JSON.stringify(data))
    }
}

export default createStore({
    strict: true,
    state: {
        todos: [],
        filter: 'all'
    },
    getters: {
    },
    mutations: {
        SET_TODOS (state, data) {
            state.todos = data
            storage.save(state.todos)
        },
        ADD_TODO (state, data) {
            const newData = {...data, id: uuidv4()}
            state.todos = [...state.todos, newData]
            storage.save(state.todos)
        },
        UPDATE_TODO (state, { id, data }) {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: data.completed,
                        content: data.content
                    };
                }
                return todo;
            })
            state.todos = newTodos
            storage.save(state.todos)
        },
        REMOVE_TODO (state, id) {
            const newTodos = state.todos.filter((todo) => {
                return todo.id !== id;
            })
            state.todos = newTodos
            storage.save(newTodos)
        },
        SET_FILTER (state, filter) {
            state.filter = filter
        }
    },
    actions: {
        INIT_TODO ({ commit }) {
            commit('SET_TODOS', storage.load())
        }
    },
    modules: {
    }
})
