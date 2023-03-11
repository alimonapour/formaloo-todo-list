export enum Status {
  pending,
  done,
}

export interface TaskType {
  id: string
  title: string
  createdAt: string
  status: Status
  groupId: string
}
