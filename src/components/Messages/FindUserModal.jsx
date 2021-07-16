import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import FindUser from './FindUser';


const FindUserModal = () => {
  return (
    <Popup
    trigger={<button title='button' type='button'><i className="fas fa-plus"></i></button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" title="close" onClick={close}>
          &times;
        </button>
        <div className="header">Add to contacts.</div>
        <div className="content">
        <FindUser />
        </div>
      </div>
    )}
  </Popup> 
  )
}

export default FindUserModal;
