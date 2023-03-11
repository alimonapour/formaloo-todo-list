export enum Status {
  pending,
  done,
}

export interface TaskType {
  id: string
  title: string
  creationDate: string
  status: Status
  group: string
}
