import React, { useContext } from 'react'
import useFetchGet from '../../API/useFetchGet';
import { UserContext } from '../../context/userContext';
import './ChannelDetails.scss'

const ChannelDetails = () => {
  const { headers } = useContext(UserContext);
  const { data: activeChannel, isPending, error } = useFetchGet(
      `http://206.189.91.54//api/v1/channels/${15}`, headers)
      // console.log(isPending)
      // console.log(error)
      // console.log(data)
    return (
        <div className='channel-details-container'>
            <h2>Active Channel</h2>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {activeChannel && <div>{ activeChannel.data.name }</div>}
        </div>
    )
}

export default ChannelDetails
