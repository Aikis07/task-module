import axios from "axios";
const token = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, "$1")

const instance = axios.create({
  baseURL: 'http://codepeak.ru:7000/auth/',
  timeout: 5000,
  headers: {
      Authorization: token !== undefined ? `Bearer ${token}` : null
  }
})

export default instance