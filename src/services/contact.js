import http from "./http"

const send = params => {
  return new Promise((resolve, reject) => {
    const endpoint = "contact/send"

    const headers = {
      "access-control-allow-origin": "*",
    }

    http
      .post(endpoint, params, headers)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export default {
  send,
}
