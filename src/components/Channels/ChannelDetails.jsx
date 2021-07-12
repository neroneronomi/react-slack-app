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
    console.log(channelDetails)
  return (
    <>
      <h2>Channel Details</h2>
      <AddMember />
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { channelDetails && 
      <div>
        <h4>{ channelDetails.data.name }</h4>
      </div> 
      }
    </>
  )
}

export default ChannelDetails;
