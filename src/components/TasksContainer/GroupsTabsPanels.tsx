import { Tab } from '@headlessui/react'
import { GroupTasks } from './GroupTasks'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const groups = {
  Work: {
    id: '1',
    title: 'Work',
  },
  Home: {
    id: '2',
    title: 'Home',
  },

  Learning: {
    id: '3',
    title: 'Learning',
  },
}

export const GroupsTabsPanels = () => {
  return (
    <div className='w-full max-w-md px-2 py-16 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-md bg-blue-900/20 p-1 bg-gradient-to-r from-sky-500 to-indigo-500'>
          {Object.values(groups).map((group) => (
            <Tab
              key={group.id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-md py-2.5 text-sm font-medium leading-5',
                  'ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-blue-700',
                )
              }
            >
              {group.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(groups).map((group) => (
            <Tab.Panel key={group.id}>
              <GroupTasks groupId={group.id} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
