import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import useFetchGet from '../../API/useFetchGet';
const ChannelDetails = () => {
  const { id } = useParams();
  const { headers } = useContext(UserContext);
  const { data: channelDetails, isPending, error } = useFetchGet(
      `http://206.189.91.54//api/v1/channels/${id}`, headers)
  return (
    <div className='channel-details-container'>
      <h2>Channel Details - { id }</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { channelDetails && 
      <div>
        <h4>{ channelDetails.data.name }</h4>
      </div> 
      }
    </div>
  )
}

export default ChannelDetails;
