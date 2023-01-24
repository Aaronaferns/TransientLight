import React from 'react'
import "../styles/Tabs.css"
import { useState } from 'react';

const Tabs = () => {
    const [ toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="tabsContainer">
        <div className="bloc-tabs">
            <div className={toggleState===1?"tab active-tab":"tab"}> 
            <button onClick={()=>toggleTab(1)}>  Tab 1</button>
          
            </div>
            <div className={toggleState===2?"tab active-tab":"tab"}> 
            <button onClick={()=>toggleTab(2)}>Tab 2</button>
            
            </div>
        </div>   
        <div className="content-tabs">
            <div  className={toggleState===1?"content active-content":"content"}>
                <h3>Heading 1</h3>
                <p>this is the content for tab1.</p>
            </div>
            <div  className={toggleState===2?"content active-content":"content"}>
                <h3>Heading 2</h3>
                <p>this is the content for tab2.</p>
            </div>
        </div>
    </div>
  )
}

export default Tabs