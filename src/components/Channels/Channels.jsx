import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
// import useFetchGet from "../../API/useFetchGet";
import ChannelList from "./ChannelList";
import CreateChannelModal from "./CreateChannelModal";

const Channels = () => {
  const { headers } = useContext(UserContext);
  const [stateChannels, setStateChannels] = useState(false);
  const handleChannels = (e) => {
    setStateChannels(!stateChannels);
  };
  // const { data: channels, isPending, error,} = 
  // useFetchGet("http://206.189.91.54//api/v1/channels", headers);
  const [channels, setChannels] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    fetch(
      `http://206.189.91.54//api/v1/channels`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setChannels(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error);
      });
    // eslint-disable-next-line
  }, [channels]);
  return (
    <div className="channel">
      <div className="toggle-channel">
        <h4 onClick={handleChannels}>
          <i
            className={
              stateChannels
                ? "fas fa-caret-right fa-rotate-90"
                : "fas fa-caret-right"
            }
          ></i>{" "}
          Channels
        </h4>
        <CreateChannelModal />
      </div>
      <div className={stateChannels ? "channel-list-active" : "channel-list"}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {!isPending && <ChannelList channels={channels} />}
      </div>
    </div>
  );
};

export default Channels;
