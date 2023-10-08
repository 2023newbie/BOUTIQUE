import styled from 'styled-components'

const Table = styled.table`
  width: calc(100% - 32px);
  color: #666;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin: 16px;
  & tr:nth-child(odd) {
    background-color: #f4f8fb;
  }
  & th {
    text-align: left;
    padding: 16px 8px;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  & td {
    padding: 8px;
    border: 1px solid #ccc;
    vertical-align: top;
  }
  & .btn {
    margin: 0 4px;
    border: none;
    color: #fff;
    padding: 8px;
    outline: none;
  }
  & .btn-green {
    background-color: green;
  }
  & .btn-red {
    background-color: red;
  }
  & .btn:hover {
    cursor: pointer;
  }
`

const TableProducts = ({products}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Category</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {products.map(prod => {
          return <tr key={prod._id}>
            <td>{prod._id}</td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td><img src={prod.img1} alt={prod.name} width='100px' /></td>
            <td>{prod.category}</td>
            <td>
              <button className='btn btn-green'>Update</button>
              <button className='btn btn-red'>Delete</button>
            </td>
          </tr>
        })}
      </tbody>
    </Table>
  )
}

export default TableProducts