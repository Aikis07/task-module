import axiosInstance from "@/API/AuthService/axiosInstance.js"

class AuthService {
  async getUser() {
    try {
      return axiosInstance.get('account')
        .then(response => {
          return response
        })
    } catch (error) {
      return error
    }
  }
}

export default new AuthService()