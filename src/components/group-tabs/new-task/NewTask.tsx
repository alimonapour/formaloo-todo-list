import { ChangeEvent, FormEvent } from 'react'

interface PropTypes {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  addTask: (event: FormEvent<HTMLFormElement>) => void
  task: string
}

export const NewTask = ({ handleChange, addTask, task }: PropTypes) => {
  return (
    <form onSubmit={addTask} className='w-full flex flex-col items-center'>
      <input
        autoFocus
        className='w-full border px-2 py-1 rounded-md focus:outline-none'
        type='text'
        required
        value={task}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='w-full border bg-blue-600 rounded-md px-2 py-1 my-2 text-white'
      >
        Add
      </button>
    </form>
  )
}
