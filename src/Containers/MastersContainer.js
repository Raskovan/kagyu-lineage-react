
import React, {Component} from 'react';
import Masters from '../Components/Masters'
import MastersList from '../Components/MastersList'

import { Slider } from 'react-materialize';
import { Route } from 'react-router-dom'

class MastersContainer extends Component {
  state = {
    masters: [],
  }

  componentDidMount(){
    fetch(`https://kagyu-lineage.herokuapp.com/`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          masters: response
        }, () => {
          // console.log(this.state.masters)
        })
      })

  }

  render(){


    return (
      <div>
        < MastersList allMasters={this.state.masters}/>

      <Route exact path="/masters/:name" render={(renderProps) => {
            /// Find me the master for this id
            let name = renderProps.match.params.name

            // I have the name

            let foundMasterIndex = this.state.masters.findIndex((master) => {
              return master.name === name
            })

            let foundMaster = this.state.masters[foundMasterIndex]
            let nextMaster = this.state.masters[foundMasterIndex+1]
            // let previousMaster = this.state.master[foundMaster-1]

            // whats your index
            /// therefore whats the next index
            /// who is the next index
            // console.log(foundMaster)
            // console.log(name)
            return <Masters master={foundMaster} nextMaster={nextMaster} />
          } } /></div>
    )
    }
}

export default MastersContainer
