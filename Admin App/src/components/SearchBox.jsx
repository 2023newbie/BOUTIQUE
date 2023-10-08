import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
  margin: 0 16px;
  & .title {
    font-weight: 600;
    font-size: 1.4rem;
    margin: 16px 0;
  }
  & .search-box {
    margin-bottom: 24px;
  }
  & .search-box input {
    padding: 8px;
    width: 300px;
  }
`

const SearchBox = ({input, changeInput}) => {
  const navigate = useNavigate()

  return (
    <Div>
      <div className='title'>Products</div>
      <div className='search-box'>
        <input type="text" placeholder='Enter Search!' value={input} onChange={e => changeInput(e.target.value)} />
        <button onClick={() => navigate('/add-product')}>Add new</button>
      </div>
    </Div>
  )
}

export default SearchBox