import React from 'react'
import ListItem from './ListItem'


function SimpleList(props) {
  const { data, onDelete, onLabelClick } = props

  return (
    <div className='app-list'>
      {data.map(item => (
       <ListItem
          key={item.id}
          title={item.title}
          desc={item.desc}
          isActive={item.isActive}
          onDelete={() => onDelete(item)}
          onLabelClick={onLabelClick}
        />
      ))}
    </div>
  )
}

export default SimpleList
