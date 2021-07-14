import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CreateChannel from "./CreateChannel";

const CreateChModal = () => {
  return (
    <Popup
    trigger={<button type='button'><i className="fas fa-plus"></i></button>}
    modal
    nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">Create a channel</div>
          <div className="caption">
            Channels are where your team communicates. They’re best when
            organized around a topic — #marketing, for example.
          </div>
          <br></br>
          <div className="content">
            <CreateChannel />
          </div>
        </div>
    )}
    </Popup> 
  )
}
export default CreateChModal;
