import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import CreateChannel from './CreateChannel'

const CreateChModal = () => {
  return (
    <Popup
    trigger={<button type='button'><i class="fas fa-plus"></i></button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Create Channel</div>
        <div className="content">
        <CreateChannel />
        </div>
      </div>
    )}
  </Popup>
  )
}

export default CreateChModal;
