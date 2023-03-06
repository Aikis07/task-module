import Vue from 'vue'
import Vuex from 'vuex'
import modals from '@/store/modules/modals.js'
import AuthService from '@/API/AuthService/AuthService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    courses: [
      {
        id: 1,
        name: "JavaScript Ninja",
        language: 'javascript',
        event: "javascript-ninja"
      },
      {
        id: 2,
        name: "Основы C# ч.1. Фундамент и основы",
        language: "csharp",
        event: "csharp-foundation"
      },
      {
        id: 3,
        name: "C# самый быстрый и ужасный курс",
        language: "c++",
        event: "c++"
      },
      {
        id: 4,
        name: "Vue.js Advanced",
        language: "vue",
        event: "vue-advanced"
      },
      {
        id: 5,
        name: "Javascript-axao",
        language: "axao",
        event: "javascript-axao"
      }
    ],
    tasks: [
      {
        name: "Создайте массив из простых чисел",
        description: "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
        course: "javascript-axao",
        id: 1,
        experience: 'basic',
        statistic: {
          views: 700,
          completed: 400,
          tryes: 200
        },
        rating: "popular", // это топ/полезное: popular/basic+
      },
      {
        name: "Создайте массив из простых чисел",
        description: "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
        course: "javascript-axao",
        id: 2,
        experience: 'basic+',
        statistic: {
          views: 500,
          completed: 400,
          tryes: 200
        },
        rating: "basic+", // это топ/полезное: popular/basic+
      },
      {
        name: "Создайте массив из простых чисел",
        description: "Необходимо создать массив из простых чисел, допустим: 1,2,3,4,5,6. После выполнения задачи нажмите кнопку 'Тестировать'!",
        course: "c++",
        id: 3,
        experience: 'advanced',
        statistic: {
          views: 500,
          completed: 400,
          tryes: 200
        },
        rating: "basic+", // это топ/полезное: popular/basic+
      }
    ]
  },
  getters: {
    getCoursesByLang(state) {
      return (lang) => {
        return state.tasks.filter(c => c.course === lang)
      }
    },
    getCoursesByExp(state) {
      return (exp) => {
        return state.tasks.filter(e => e.experience === exp)
      }
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async getUserToken({ commit }) {
      const response = await AuthService.getUser()
      if (response.status === 200) {
        commit('setUser', response.data)
      } else {
        console.log(response.data)
      }
      return response
    },
  },
  modules: {
    modals
  }
})
