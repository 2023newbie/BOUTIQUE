import { Link, redirect } from 'react-router-dom'
import SideBarChat from '../components/SideBarChat'
import ChatBox from '../components/ChatBox'
import { useState } from 'react'
import getToken from '../utils/get-token'
import url from '../utils/url'

const Chat = () => {
  const [pointId, setPointId] = useState('')

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>Chat</div>
      <div>
        <Link style={{ textDecoration: 'none', color: '#666' }} to="/">
          Apps
        </Link>{' '}
        /{' '}
        <Link style={{ textDecoration: 'none', color: '#666' }} to="/chat">
          Chat
        </Link>
      </div>
      <div style={{marginTop: '16px', height: '80vh', border: '1px solid #ccc', display: 'flex' }}>
        <SideBarChat setPointId={setPointId} />
        {pointId !== '' && <ChatBox id={pointId} />}
      </div>
    </div>
  )
}

export default Chat

export async function loader() {
  const token = getToken()

  try {
    const res = await fetch(url.root + '/sessions', {
      headers: { 'Authorization': 'Bearer ' + token }
    })
    
    if (res.status === 403 || res.status === 401) {
      return redirect('/login')
    }

    return res
  } catch (err) {
    console.log(err);
  }
}
