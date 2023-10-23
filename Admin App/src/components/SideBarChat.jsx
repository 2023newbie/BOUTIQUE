import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import openSocket from 'socket.io-client'
import { useState } from 'react'
import url from '../utils/url'

const Input = styled.input`
  box-sizing: border-box;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  outline: none;
  &::placeholder {
    color: #666;
  }
`

const User = styled.div`
  display: flex; 
  padding: 8px; 
  align-items: center; 
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`

const SideBarChat = ({ setPointId }) => {
  const data = useLoaderData()
  const [sessions, setSessions] = useState(data)

  useEffect(() => {
    const socket = openSocket(url.root)
    socket.on('session', data => {
      if (data.action === 'remove') {
        setSessions(prevState => {
          return prevState.filter(ses => ses.userId !== data.userId)
        })
      }
      if (data.action === 'create') {
        setSessions(prevState => {
          const result = prevState.filter(ses => ses.userId !== data.userId)
          return [
            ...result,
            { userId: data.userId, _id: data._id }
          ]
        })
      }
    })
  }, [])

  return (
    <aside style={{width: '15%', minWidth: '200px', borderRight: '1px solid #ccc', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{padding: '16px', borderBottom: '1px solid #ccc'}}>
        <Input type="text" placeholder='Search Contact' />
      </div>
      <div style={{ overflowY: 'scroll', flexGrow: 1 }}>
        {Array.isArray(sessions) && sessions.map(item => {
          return (
            <User key={item._id} onClick={() => setPointId(item.userId)}>
              <div style={{ padding: '0 8px', fontSize: '1.2rem' }}><FaUser /></div>
              <div style={{ lineBreak: 'anywhere', padding: '0 8px', fontSize: '0.9rem', color: '#666' }}>{item.userId}</div>
            </User>
          )
        })}
      </div>
    </aside>
  )
}

export default SideBarChat