import { GroupsTabsPanels } from './components/TasksContainer'

function App() {
  return (
    <div className='App'>
      <div className='container w-[90%] lg:w-[60%] md:w-[80%] mx-auto my-2 p-5 border border-blue-600 rounded-md bg-white shadow-md shadow-gray-600 flex items-center flex-col'>
        <div className='border-b-2 border-indigo-400 w-[60%]'>
          <h1 className='text-xl font-medium leading-5 text-center p-2'>
            Todo List App
          </h1>
        </div>
        <GroupsTabsPanels />
      </div>
    </div>
  )
}

export default App
