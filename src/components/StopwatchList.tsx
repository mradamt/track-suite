import React, { useState } from 'react'
import StopwatchListItem from './StopwatchListItem'

interface Tag {
  id: number | null,
  label: string | null,
  value?: string,
  color: string | null
}

interface Category {
  id: number | null,
  label: string | null,
  value?: string,
  color: string | null
}

interface Data {
  id: number,
  category: Category | null,
  tags: Tag[] | null,
  start_time: Date | null,
  end_time: Date | null,
  intensity: number | null
  cumulative_pause_duration: number | null
}

interface Entries {
  [key: string]: Data
}

const dummyCategories: Category[] = [
  {id: 0, label: 'Waffles', value: 'waffles', color: '#efefef'},
  {id: 1, label: 'pancakes', value: 'pancakes', color: '#efefef'},
  {id: 2, label: 'sneezing', value: 'sneezing', color: '#efefef'},
]

const dummyTags: Tag[] = [
  {id: 0, label: 'food', value: 'food', color: '#ee0'},
  {id: 1, label: 'dessert', value: 'dessert', color: '#e0e'},
  {id: 2, label: 'icecream', value: 'icecream', color: '#e0e'},
]

const dummyTime: Data = {
  id: 1,
  category: dummyCategories[1],
  tags: [dummyTags[0], dummyTags[1]],
  start_time: new Date(1611021345965),
  end_time: new Date(1611029345965),
  intensity: 90,
  cumulative_pause_duration: 0,
};

const dummyTimes: Entries = {
  '0': {...dummyTime, id: 0, start_time: new Date(1611020000000), end_time: new Date(1611021000000)},
  '1': {...dummyTime, id: 1, start_time: new Date(1611022000000), end_time: new Date(1611023000000)},
  '2': {...dummyTime, id: 2, start_time: new Date(1611024000000), end_time: new Date(1611025000000)},
  '3': {...dummyTime, id: 3, start_time: new Date(1411024000000), end_time: new Date(1411027000000)},
}

const StopwatchList = () => {

  const [entries, setEntries] = useState(dummyTimes);
  const [allCategories, setAllCategories] = useState(dummyCategories);
  const [allTags, setAllTags] = useState(dummyTags);

  const updateEntry = (newObj: any) => {
    console.log('updated entry:', newObj);
    setEntries(prev => {
      return {
        ...prev,
        [newObj.id]: newObj
      }
    })
  }

  const entriesList = Object.values(entries).map((entry: Data) => <StopwatchListItem
      key={entry.id}
      id={entry.id}

      allCategories={allCategories}
      updateAllCategories={setAllCategories}
      allTags={allTags}
      updateAllTags={setAllTags}

      category={entry.category}
      tags={entry.tags}
      start_time={entry.start_time}
      end_time={entry.end_time}
      intensity={entry.intensity}
      cumulative_pause_duration={entry.cumulative_pause_duration}
      updateEntry={updateEntry}
    />
  )

  return (
    <section className="entries">
      <h4 className="entries__header text--light">Entry</h4>
      <ul className="entries__list">{ entriesList }</ul>
    </section>
  )
}

export default StopwatchList;