export interface AuthMeResponse {
  resultCode: number
  messages: string[]
  data: {
    id: number
    email: string
    login: string
  }
}
export interface BaseResponse<T = {}> {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}

export type messageType = 'error' | 'success' | 'warning'

