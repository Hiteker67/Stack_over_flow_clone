import React from 'react'

const WidgetTags = () => {
    const tags= ['blockchain','css','express','html','javascript','mongodb','next.js','node.js','reactjs','redux','solidity']
  return (
    <div className='widget-tags'>
       <h4>watched tags</h4> 
       <div className='widget-tags-div'>
        {
            tags.map( (tag) => (
              <p key={tag}>{tag}</p>
            ))
        }
       </div>
    </div>
  )
}

export default WidgetTags