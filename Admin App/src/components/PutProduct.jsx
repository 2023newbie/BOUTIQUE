import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import url from '../utils/url'

const Wrapper = styled.div`
  background-color: #f9fbfd;
  padding: 20px 32px;
  & .info-term {
    margin-bottom: 16px;
  }
  & .subtitle {
    font-weight: 500;
    color: #515964;
    margin-bottom: 8px;
  }
  & .input input::placeholder, textarea::placeholder {
    color: #737b89;
  }
  & .input input, textarea {
    box-sizing: border-box;
    padding: 8px;
    width: 60%;
  }
  & .submit button {
    background-color: #5f76e8;
    color: #fff;
    padding: 12px 20px;
    border: none;
  }
  & .submit button:hover {
    background-color: #8395ed;
    cursor: pointer;
  }
`

const PutProduct = ({method}) => {
  const formRef = useRef()

  const submitForm = async e => {
    e.preventDefault()
    const form = formRef.current
    const url = form.action
    const formData = new FormData(form)
    try {
      const res = await fetch(url, { method: 'POST', body: formData })
      if (res.status === 201) {
        alert('create success.')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Wrapper>
      <form ref={formRef} onSubmit={submitForm} method='post' encType='multipart/form-data' action={url.root + '/admin/product'}>
        <div className="info-term">
          <div className="subtitle">
            <label htmlFor="name">Product Name</label>
          </div>
          <div className="input">
            <input type="text" placeholder='Enter Product Name' id='name' name='name'/>
          </div>
        </div>
        <div className="info-term">
          <div className="subtitle">
            <label htmlFor="category">Category</label>
          </div>
          <div className="input">
            <input type="text" placeholder='Enter Category' id='category' name='category'/>
          </div>
        </div>
        <div className="info-term">
          <div className="subtitle">
            <label htmlFor="price">Price</label>
          </div>
          <div className="input">
            <input type="number" placeholder='Enter Price' id='price' name='price'/>
          </div>
        </div>
        <div className="info-term">
          <div className="subtitle">
            <label htmlFor="short">Short Description</label>
          </div>
          <div className="input">
            <textarea name="short" id="short" cols="30" rows="3" placeholder='Enter Short Description'></textarea>
          </div>
        </div>
        <div className="info-term">
          <div className="subtitle">
            <label htmlFor="long">Long Description</label>
          </div>
          <div className="input">
            <textarea name="long" id="long" cols="30" rows="5" placeholder='Enter Long Description'></textarea>
          </div>
        </div>
        <div className="info-term">
          <div className="subtitle">
            <label htmlFor="file">Upload image (4 images)</label>
          </div>
          <div className="input">
            <input id='file' type="file" name='file' multiple/>
          </div>
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </Wrapper>
  )
}

export default PutProduct