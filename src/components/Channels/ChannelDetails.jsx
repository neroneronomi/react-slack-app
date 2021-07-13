import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import useFetchGet from '../../API/useFetchGet';
import AddMember from './AddMember';

const ChannelDetails = () => {
  const { id } = useParams();
  const { headers } = useContext(UserContext);
  const { data: channelDetails, isPending, error } = useFetchGet(
    `http://206.189.91.54//api/v1/channels/${id}`, headers)
  return (
    <>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { !isPending && 
      <div className="channel_details_container">
        <div className="pair">
        <div className="channel_name"><h4>{ channelDetails.data.name }</h4></div>
      <AddMember/>
        </div>

      <div className="members_container"><h4>{ channelDetails.data.channel_members.length}</h4></div>
      </div>
      }
    </>
  )
}

export default ChannelDetails;
