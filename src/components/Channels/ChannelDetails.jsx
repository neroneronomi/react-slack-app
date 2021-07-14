import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import useFetchGet from '../../API/useFetchGet';
import AddMember from './AddMember';
import ChannelFeed from './ChannelFeed';
import ChannelChatbox from './ChannelChatbox';
import './ChannelDetails.scss'

const ChannelDetails = () => {
  const { id } = useParams();
  const { headers } = useContext(UserContext);
  const { data: channelDetails, isPending, error } = useFetchGet(
    `http://206.189.91.54//api/v1/channels/${id}`, headers)
  return (
    <>
    <div className="ChannelDetails">
      <div className="channel-header">
      { error && <h2>{ error }</h2> }
      { isPending && <h2>Loading...</h2> }
      { !isPending && <h2>{ channelDetails.data.name }</h2>}
      { !isPending && <h2>{ channelDetails.data.channel_members.length}</h2>}
      <AddMember />
      </div>
      <div className="channel-feed">
        <ChannelFeed channelDetails={channelDetails} id={id} headers={headers} />
      </div>
      <div className="channel-chat-box">
        <ChannelChatbox channelDetails={channelDetails} id={id} headers={headers} />
      </div>
    </div>

    </>
  )
}

export default ChannelDetails;
