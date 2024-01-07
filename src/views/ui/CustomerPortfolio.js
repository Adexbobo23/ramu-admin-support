import React, { useState } from 'react';
import { Table, Button, Input } from 'reactstrap';
import '../ComStyle/CustomerPortfolio.scss';

const sampleData = [
  { id: 1, customerName: 'John Doe', stockSymbol: 'AAPL', shares: 50, averagePrice: 150.25 },
  { id: 2, customerName: 'Jane Doe', stockSymbol: 'GOOGL', shares: 30, averagePrice: 2800.75 },
  // Add more sample data as needed
];

const CustomerPortfolio = () => {
  const [portfolios, setPortfolios] = useState(sampleData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEdit = (id) => {
    // Add your edit logic here
    console.log(`Edit portfolio with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Add your delete logic here
    setPortfolios((prevPortfolios) => prevPortfolios.filter((portfolio) => portfolio.id !== id));
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredPortfolios = portfolios.filter((portfolio) =>
    Object.values(portfolio).some(
      (value) => value && value.toString().toLowerCase().includes(searchQuery)
    )
  );

  return (
    <div className="customer-portfolio">
      <h2>Customer Portfolios</h2>
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Stock Symbol</th>
            <th>Shares</th>
            <th>Average Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPortfolios.map((portfolio) => (
            <tr key={portfolio.id}>
              <td>{portfolio.id}</td>
              <td>{portfolio.customerName}</td>
              <td>{portfolio.stockSymbol}</td>
              <td>{portfolio.shares}</td>
              <td>{portfolio.averagePrice}</td>
              <td>
                <Button color="primary" onClick={() => handleEdit(portfolio.id)}>
                  Edit
                </Button>
                <Button color="danger" onClick={() => handleDelete(portfolio.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerPortfolio;
