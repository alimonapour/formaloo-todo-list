import { GroupTabs } from './group-tabs'
import { Header } from './header'

export const Main = () => {
  return (
    <div className='container mx-auto my-2 w-[90%] p-5 border flex items-center flex-col'>
      <Header />
      <GroupTabs />
    </div>
  )
}
