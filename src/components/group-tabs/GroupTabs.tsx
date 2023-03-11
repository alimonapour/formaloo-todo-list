import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { v4 as uuidv4 } from 'uuid'
import { WorkTasks } from './work-tasks/WorkTasks'
import { HomeTasks } from './home-tasks'
import { LearningTasks } from './learning-tasks'

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
          <Tab.Panel>
            <WorkTasks groupTitle={groups.Work.title} />
          </Tab.Panel>
          <Tab.Panel>
            <HomeTasks groupTitle={groups.Home.title} />
          </Tab.Panel>
          <Tab.Panel>
            <LearningTasks groupTitle={groups.Learning.title} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
