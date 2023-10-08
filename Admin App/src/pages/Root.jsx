import styled from 'styled-components'
import { Outlet, redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import getToken from '../utils/get-token'

const Container = styled.div`
  display: flex;
`

const Aside = styled.aside`
  width: 15%;
  min-width: 100px;
`

const Content = styled.main`
  flex-grow: 1;
`

const Root = () => {
  return (
    <Container>
      <Aside>
        <Sidebar />
      </Aside>
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}

export default Root

export async function loader() {
  const token = getToken()
  try {
    const res = await fetch('https://asm3-nodejs-f00e5645d891.herokuapp.com/admin/login', {
      headers: { 'Authorization': 'Beaer ' + token }
    })

    if (res.status === 401 || res.status === 403) {
      return redirect('/login')
    }

    return res
  } catch (err) {
    console.log(err);
  }
}