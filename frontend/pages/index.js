import React from 'react'
import Items from '../components/Items'

const Home = props =>  (
  <div>
    <Items page={ parseFloat(props.page) || 1 }/>
  </div>
)
export default Home;