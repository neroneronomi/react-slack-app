import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FindUser from "./FindUser";

const FindUserModal = () => {
  return (
    <Popup
      trigger={
        <button type="button">
          <i className="fas fa-plus"></i>
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">Send a direct message</div>
          <br></br>
          <div className="content">
            <FindUser close={close}/>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default FindUserModal;
