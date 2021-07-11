import { Link } from "react-router-dom";

const ChannelList = ({ channels }) => {
  return (
    <>
      <h2>My Channels</h2>
      {(() => {
        if (channels.errors === 'No available channels.') {
          return <h4>{channels.errors}</h4>
          } else {
          return <div>
          {channels && channels.data.map((channel) => (
            <div className='channel-preview' key={channel.id}>
              <Link to={`/client/channels/${channel.id}`}>
              <span>{channel.name}</span>
              </Link>
            </div>
          ))}
          </div>;
          }
      })()}     
    </>
    )
}

export default ChannelList;
