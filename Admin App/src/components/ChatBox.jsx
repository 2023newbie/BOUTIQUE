import styled from 'styled-components'
import { FaUser, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useRef } from 'react'
import { useEffect } from 'react'
import openSocket from 'socket.io-client'
import getToken from '../utils/get-token'
import url from '../utils/url'

const Container = styled.div`
  padding-top: 32px;
  width: calc(100% - 15%);
  display: flex;
  flex-direction: column;
`

const Messages = styled.div`
  padding: 0 16px;
  height: 85%;
  overflow-y: scroll;
  border-bottom: 1px solid #ccc;
  & .mess {
    display: flex;
    align-items: center;
    margin: 16px 0;
    font-size: 0.9rem;
  }
  & .icon {
    margin: 0 8px;
  }
  & .owner {
    display: flex;
    justify-content: right;
  }
  & .mess.owner > .icon {
    display: none;
  }
  & .mess.owner > .content {
    background-color: #eef5ff;
  }
  & .content {
    padding: 6px 12px;
    background-color: #e4fbf8;
    color: #555;
  }
`

const Editor = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  & .input {
    width: 100%;
  }
  & .input input {
    border: none;
    outline: none;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
  & .input input::placeholder {
    color: #666;
  }
  & .icon {
    margin-right: 16px;
  }
  & .icon button {
    border-radius: 50%;
    border: none;
    background-color: #01caf1;
    color: #fff;
    padding: 8px;
  }
  & .icon button:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }
`

const ChatBox = ({ id }) => {
  const data = useLoaderData()
  const [content, setContent] = useState('')
  const [messages, setMessages] = useState(data)
  const containerMess = useRef()

  const sendMessage = () => {
    const token = getToken()
    const isMessageEmpty = content.trim() === ''
    if (!isMessageEmpty) {
      fetch(url.root + '/admin/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ message: content, userId: id })
      })
    }
  }

  const scrollBottom = () => {
    containerMess.current.scrollTop = containerMess.current.scrollHeight
  }

  useEffect(() => {
    const token = getToken()
    fetch(url.root + '/session/' + id, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(data => {
        setMessages(data.messages)
      })
      .catch(err => console.log(err))
  }, [id])

  useEffect(() => {
    const socket = openSocket(url.root + '/')
    socket.on('session', data => {
      if (data.action === 'post' && data.userId === id) {
        setMessages(data.messages)
      }
      if (data.action === 'remove') {
        setMessages([])
      }
    })
  }, [id])

  useEffect(() => {
    scrollBottom()
  }, [messages])

  return (
    <Container>
      <Messages ref={containerMess}>
        {messages.length > 0 && messages.map(mess => (
          <div className={mess.role === 'admin' ? 'mess owner' : 'mess'} key={mess._id}>
            <div className="icon">
              <FaUser />
            </div>
            <div className="content">{mess.role === 'client' ? 'Client' : 'You'}: {mess.message}</div>
          </div>
        ))}
      </Messages>
      <Editor>
        <div className="input">
          <input
            type="text"
            placeholder="Type and enter"
            defaultValue={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div className="icon">
          <button onClick={sendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </Editor>
    </Container>
  )
}

export default ChatBox
