import { GroupsTabsPanels } from './components/TasksContainer'
import { AppHeader } from './components/Header/Header'

function App() {
  return (
    <div className='App'>
      <div className='container w-[90%] lg:w-[60%] md:w-[80%] mx-auto my-2 p-5 border border-blue-600 rounded-md bg-white shadow-md shadow-gray-600 flex items-center flex-col'>
        <AppHeader />
        <GroupsTabsPanels />
      </div>
    </div>
  )
}

export default App
