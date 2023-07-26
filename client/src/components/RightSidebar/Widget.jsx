import React from 'react'
import './RightSidebar.css'
import message from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/black-logo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
             <img src={pen} alt="pen" width="18px" />
             <p>How Intuit improves security, latency, and development velocity with...</p>
          </div>
          <div className="right-sidebar-div-2">
            <img src={pen} alt="pen" width="18px" />
            <p>Minimizing the downsides of dynamic programming</p>
          </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
             <img src={message} alt="message" width="18px" />
             <p>2022  'Community-a-thon' Recap....</p>
          </div>
          <div className="right-sidebar-div-2">
            <img src={blackLogo} alt="blackLogo" width="18px" />
            <p>Temporary policy: ChatGPT is banned</p>
          </div>
          <div className="right-sidebar-div-2">
            <img src={blackLogo} alt="blackLogo" width="18px" />
            <p>Introducing a new close reason specifically for non-English questions</p>
          </div>
          <div className="right-sidebar-div-2">
            <img src={blackLogo} alt="blackLogo" width="18px" />
            <p>The [colon] tag is   being burninated.....</p>
          </div>
          <div className="right-sidebar-div-2">
            <img src={blackLogo} alt="blackLogo" width="18px" />
            <p>We're bringing advertisements for technology courses to Stack Overflow</p>
          </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
             <p>38</p>
             <p>Why was the spam flag declined, yet the question marked as spam?</p>
          </div>
          <div className="right-sidebar-div-2">
            <p>20</p>
            <p>What is the best course of action when a user has high enough rep to...</p>
          </div>
          <div className="right-sidebar-div-2">
            <p>14</p>
            <p>Is a link to the 'How to ask' hepl page a useful comment?</p>
          </div>
        </div>
    </div>
  )
}

export default Widget