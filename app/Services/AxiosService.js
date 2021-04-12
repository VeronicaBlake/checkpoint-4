
// @ts-ignore
export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 8000
})

export const quotesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 8000
})

export const todoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/veronica/todos',
  timeout: 8000
})

