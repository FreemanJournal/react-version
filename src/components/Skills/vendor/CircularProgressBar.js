import React, { Component } from 'react';
//import react-circular module and style
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";


class CircularProgressBar extends Component {

  
    
    render() {
     
        return (
          <>
            <div style={{ }} className="py-10 w-2/4 inline-flex">
              <VisibilitySensor>
                {({ isVisible }) => {
                  const percentage = isVisible ? this.props.aptitude : 0;
                  return (
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={percentage}
                      duration={.5}
                      easingFunction={easeQuadInOut}
                    >
                      {(value) => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({ pathTransition: "none" })}
                          />
                        );
                      }}
                    </AnimatedProgressProvider>
                  );
                }}
              </VisibilitySensor>
              
            </div>
          </>
        );
    }
}

export default CircularProgressBar;
