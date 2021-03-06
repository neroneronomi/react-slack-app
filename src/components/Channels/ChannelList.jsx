import { Link } from "react-router-dom";

const ChannelList = ({ channels }) => {
  return (
    <>
      {(() => {
        if (channels.errors === "No available channels.") {
          return <h4 className="no-contacts-caption">{channels.errors}</h4>;
        } else {
          return (
            <div>
              {channels &&
                channels.data.map((channel) => (
                  <div className="channel-preview" key={channel.id}>
                    <div className="mychannels">
                      <Link to={`/client/channels/${channel.id}`}>
                        <span># &nbsp; &nbsp; {channel.name}</span>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          );
        }
      })()}
    </>
  );
};

export default ChannelList;
