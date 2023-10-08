import styled from 'styled-components'
import { FaUserPlus, FaDollarSign, FaFile } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import numberToPrice from '../utils/number-to-price'

const Container = styled.div`
  display: flex;
  box-shadow: 2px 2px 10px #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 16px;
  & .child-box {
    flex-grow: 1;
    background-color: #fff;
    padding: 16px;
    display: flex;
    align-items: center;
  }
  & .child-box:nth-child(2) {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  & .summary {
    flex-grow: 1;
  }
  & .icon {
    color: #868c93;
  }
  & .specific {
    font-size: 1.4rem;
    font-weight: 500;
    color: #3d3d46;
  }
  & .subtitle {
    font-size: 0.9rem;
    color: #b9c1d2;
  }
`

const InfoBoard = () => {
  const data = useLoaderData()

  return (
    <Container>
      <div className='child-box'>
        <div className='summary'>
          <div className='specific'>{data.clientsQty}</div>
          <div className='subtitle'>Clients</div>
        </div>
        <div className='icon'><FaUserPlus /></div>
      </div>
      <div className='child-box'>
        <div className='summary'>
          <div className='specific'>{numberToPrice(data.earnings)} VND</div>
          <div className='subtitle'>Earnings of Month</div>
        </div>
        <div className='icon'><FaDollarSign /></div>
      </div>
      <div className='child-box'>
        <div className='summary'>
          <div className='specific'>{data.newOrdersQty}</div>
          <div className='subtitle'>New Order</div>
        </div>
        <div className='icon'><FaFile /></div>
      </div>
    </Container>
  )
}

export default InfoBoard