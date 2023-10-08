import styled from 'styled-components'
import { useLoaderData } from 'react-router-dom'
import numberToPrice from '../utils/number-to-price'

const Container = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 2px 2px 10px #ccc;
  & .title {
    font-weight: 500;
    color: #181717;
  }
  & .orders {
    border-collapse: collapse;
    width: 100%;
  }
  & .orders th {
    padding: 16px 8px;
    text-align: left;
    color: #52515d;
  }
  & .orders td {
    padding: 8px;
    color: #9598ac;
  }
  & .orders tbody tr:nth-child(odd) {
    background-color: #f4f8fb;
  }
  & .orders, th, td {
    border: 1px solid #ccc;
  }
  & .btn-view {
    background-color: #22ca80;
    color: #fff;
    padding: 8px 16px;
    border: none;
  }
  & .btn-view:hover {
    background-color: #80e0b6;
    cursor: pointer;
  }
`

const Orders = () => {
  const { latestOrders } = useLoaderData()

  return (
    <Container>
      <div className='title'>History</div>
      <table className='orders'>
        <thead>
          <tr>
            <th>ID User</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Total</th>
            <th>Delivery</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          { latestOrders.map(ord => {
            return (
              <tr key={ord._id}>
                <td>{ord.userId}</td>
                <td>{ord.full_name}</td>
                <td>{ord.phone}</td>
                <td>{ord.address}</td>
                <td>{numberToPrice(ord.totalPrice)}</td>
                <td>Chưa vận chuyển</td>
                <td>Chưa thanh toán</td>
                <td><button className='btn-view'>View</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}

export default Orders