import React from 'react'
import CreateChannel from '../Channels/CreateChannel'
import ChannelList from '../Channels/ChannelList'
import './MenuTab.scss'

const MenuTab = () => {
  return (
    <div className='menu-tab-container'>
      <CreateChannel />
      <ChannelList />
    </div>
  )
}

export default MenuTab
