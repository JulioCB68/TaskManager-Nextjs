type StatusType = 'backlog' | 'inProgress' | 'toDo' | 'done'

export const statusLabels: Record<StatusType, string> = {
  backlog: 'Backlog',
  inProgress: 'In Progress',
  toDo: 'To Do',
  done: 'Done',
}

export const statusBackgrounds: Record<StatusType, string> = {
  backlog: 'bg-backlog',
  inProgress: 'bg-inProcess',
  toDo: 'bg-toDo',
  done: 'bg-done',
}

export const statusColors: Record<StatusType, string> = {
  backlog: 'text-backlog',
  inProgress: 'text-inProcess',
  toDo: 'text-toDo',
  done: 'text-done',
}
