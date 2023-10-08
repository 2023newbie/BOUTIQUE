import { Form, redirect, useActionData } from 'react-router-dom'

const Login = () => {
  const data = useActionData()

  return (
    <Form method='post'>
      <h1>Login</h1>
      {data?.msg && <div style={{color: 'red'}}>{data.msg}</div>}
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name='email'/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name='password'/>
      </div>
      <div>
        <button>Login</button>
      </div>
    </Form>
  )
}

export default Login

export async function action({ request, params }) {
  try {
    const data = await request.formData()
    const formData = {
      email: data.get('email'),
      password: data.get('password')
    }
    
    const res = await fetch('https://asm3-nodejs-f00e5645d891.herokuapp.com/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.status === 401) {
      return { msg: 'Unauthorized.' }
    }

    const resData = await res.json()
    document.cookie = "TokenAdmin=" + resData.token + ";max-age=" + 60 * 60
    return redirect('/')
  } catch (err) {
    console.log(err)
  }
}