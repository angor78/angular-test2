export interface BaseResponse<T = {}> {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}
