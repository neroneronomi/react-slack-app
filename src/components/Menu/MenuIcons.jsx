import { useContext } from 'react'
import { UserContext } from '../../context/userContext';

const MenuIcons = () => {
  const { headers } = useContext(UserContext)
  return (
    <div className='menu-icons'>
      <h2>{headers.uid}</h2>

    <div className="menu-info">
      <div className="info"><i className="far fa-comment-dots"></i> Threads</div>
      <div className="info"><i className="far fa-comments"></i> ALL DMs</div>
      <div className="info"><i className="fas fa-at"></i> Mentions & reactions</div>
      <div className="info"><i className="far fa-bookmark"></i> Saved Items</div>
      <div className="info"><i className="fas fa-ellipsis-v"></i> More</div>
  </div>
  </div>
  )
}

export default MenuIcons;
