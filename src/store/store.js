import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            Lists: [
                {
                    content: 'Vuex를 이용한 Todo List 페이지입니다.',
                    done: false
                },
                {
                    content: '할일을 입력해주세요.',
                    done: false
                }
            ]
        }
    },
    plugins: [
        createPersistedState({
            paths: ["Lists"],
        })
    ],
    mutations: {
        addList(state, data) {
            state.Lists = [{ content: data, done: false }, ...state.Lists];
        },
        deleteList(state, data) {
            state.Lists.splice(state.Lists.indexOf(data), 1);
        },
        toggleList(state, data) {
            data.done = !data.done;
        },
    }
})

export default store