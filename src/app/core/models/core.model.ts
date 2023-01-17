export interface AuthMeResponse {
  resultCode: number
  messages: string[]
  data: {
    id: number
    email: string
    login: string
  }
}
