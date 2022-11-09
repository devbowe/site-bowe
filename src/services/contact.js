import http from "./http"

const send = params => {
  return new Promise((resolve, reject) => {
    const endpoint = "contact/send"
    http
      .post(endpoint, params)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export default {
  send,
}
