import React from 'react'
import Navigation from '../shared/Navigation'
import ListActivities from '../shared/ListActivities'
import ActivitiesForm from '../shared/ActivityForm'
import "../../estilos.scss";

export default function Activities() {
    return (
        <div>
          <Navigation />
            <div className="page-header">
              <div>Activities</div>
            </div>
            <div className="container">
                <div className="col-20">
                  <ActivitiesForm />
                </div>
                <div className="col-80">
                  <ListActivities />
                </div>
            </div>
        </div>
    ) 
}
