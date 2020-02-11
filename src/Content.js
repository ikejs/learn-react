import React from 'react';
import Project from './Project';
import './Content.css'
import data from './data'

function Content() {
    return (
      <div className="Content">
        {
          data.map((place, i) => {
            return (
              <Project 
                key={`${i}-${place.image}`} 
                title={place.title} 
                image={place.image} 
                link={`${i}`} 
              />
            )
          })
        }
      </div>
    )
}

export default Content