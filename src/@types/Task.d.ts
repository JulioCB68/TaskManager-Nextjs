declare type StatusType = 'backlog' | 'inProgress' | 'toDo' | 'done'

declare interface Task {
  id: number
  name: string
  description: string
  status: StatusType
  comments: number
  createdAt: string
  dateFinish?: string
}
