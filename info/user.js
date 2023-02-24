import { defineStore } from 'pinia'
import AuthService from "@/api/auth/AuthService";

export const useUserStore = defineStore('useUserStore', {
  state: () => {
    return {
      user: null,
      token: null
    }
  },
  actions: {
    setUser(payload) {
      this.user = payload;
    },
    setToken(token) {
      const setToken = useCookie('token');
      setToken.value = { token: JSON.stringify(token) };
      this.token = token;
    },
    async login(data) {
      try {
        const response = await AuthService.login(data);
        this.setUser(response.account);
        this.setToken(response.token);
      } catch (err) {
        console.error(err);
      }
    },
    async register(data) {
      try {
        const response = await AuthService.register(data);
        this.setUser(response.account);
        this.setToken(response.token);
      } catch (err) {
        console.error(err)
      }
    },
    changeUserAvatar(avatar) {
      // Тут получаю аватарку новую, нужно отправить на сервер и заменить текующую у человека
    },
    deleteUserAvatar() {
      // тут удаляю аватарку, нужен запрос на сервер который удалит аватарку;
      this.user.avatarPhoto = null;

      return true;
    }
  }
})