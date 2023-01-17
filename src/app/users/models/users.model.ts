export interface User {
  name: string
  id: number
  photos: {
    small: string | null,
    large: string | null
  }
  followed: boolean
}

export interface UsersResponse {
  items: User[]
  totalCount: string
}
