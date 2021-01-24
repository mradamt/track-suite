import React, { useState } from 'react'
import StopwatchList from './StopwatchList'
// import Charts from './Charts'
import Categories from './Categories'
import Tags from './Tags'
import DateRange from './DateRangePicker'


import './Reports.scss'


const Reports = (props: any) => {

  // Update start_time if InputClock is manually adjusted
  const updateEntry = (key: string, value: Date | string | number) => {
    props.updateEntry({
      ...props,
      [key]: value
    })
  };

  

  return (
    <>
      <div className='analytics-filters stopwatch'>
        <div className='analytics-filters-title'>
          <div className='stopwatch-group'>
            <div>APPLY FILTERS</div>
          </div>
        </div>
        <div className='analytics-filters-selectors'>
          <div className='stopwatch-group'>
            <Categories 
              allCategories={props.allCategories}
              updateAllCategories={props.updateAllCategories}
              category={props.category}
              onChange={updateEntry}
            />
          </div>
          <div className='stopwatch-group sw-tags'>
            <Tags
              allTags={props.allTags}
              updateAllTags={props.updateAllTags}
              tags={props.tags}
              onChange={updateEntry}
            />
          </div>
          <div>
            <DateRange />
          </div>
        </div>
      </div>

      <div className='analytics-tabs-container'>
        {}
        <div className='analytics-tab analytics-tab-selected'>DATA</div>
        <div className='analytics-tab '>CHARTS</div>
      </div>
      <section className='section-sw-entries'>
        <StopwatchList
          allCategories={props.allCategories}
          allTags={props.allTags}
          filteredEntries={props.filteredEntries}
        />
      </section>

      <section className='section-sw-charts'>
        hi i'm a chart
      </section>

    </>
  )
}

export default Reports;