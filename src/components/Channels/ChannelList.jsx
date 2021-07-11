import React, { useContext } from 'react'
import useFetchGet from '../../API/useFetchGet';
import { UserContext } from '../../context/userContext';
import './ChannelList.scss'
const ChannelList = () => {
    const { headers } = useContext(UserContext);
    const { data: channels, isPending, error } = useFetchGet(
        'http://206.189.91.54//api/v1/channels', headers)
    return (
        <div className='channel-list-container'>
            <h2>My Channels</h2>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {channels && channels.data.map((channel) => (
                <div className='channel-preview' key={channel.id}>
                    <h4>{channel.name}</h4>
                    <h4>{channel.id}</h4>  
                </div>
            ))}
        </div>
    )
}

export default ChannelList;
