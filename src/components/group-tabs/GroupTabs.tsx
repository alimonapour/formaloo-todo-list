import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { v4 as uuidv4 } from 'uuid'
import { GroupTasks } from './group-tasks'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const GroupTabs = () => {
  let [groups] = useState({
    Work: {
      id: uuidv4(),
      title: 'Work',
    },
    Home: {
      id: uuidv4(),
      title: 'Home',
    },

    Learning: {
      id: uuidv4(),
      title: 'Learning',
    },
  })

  return (
    <div className='w-full max-w-md px-2 py-16 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
          {Object.values(groups).map((group) => (
            <Tab
              key={group.id}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
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
              <GroupTasks groupId={group.id} groupTitle={group.title} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
