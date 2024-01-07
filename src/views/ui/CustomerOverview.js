import React, { useState, useEffect } from "react";
import { Table, Form, FormGroup, Label, Input, Button, Modal, ModalBody } from "reactstrap";
import { CSVLink } from "react-csv";
import ReactPaginate from "react-js-pagination";
import "../ComStyle/CustomerOverview.scss";

const CustomerDetailsModal = ({ customer, isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        <h5>Customer Overview</h5>
        <br />
        <p>Name: {`${customer.first_name} ${customer.last_name}`}</p>
        <p>Email: {customer.email}</p>
        <p>Phone Number: {customer.phone_number}</p>
        <h6>Recent Purchases:</h6>
        <Table striped>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {customer.recentPurchases.map((purchase, index) => (
              <tr key={index}>
                <td>{purchase.productName}</td>
                <td>${purchase.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h6>Communication/Support History:</h6>
        <Table striped>
          <thead>
            <tr>
              <th>Date</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {customer.communicationHistory.map((communication, index) => (
              <tr key={index}>
                <td>{communication.date}</td>
                <td>{communication.message}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>
    </Modal>
  );
};

const CustomerOverview = () => {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isCustomerDetailsModalOpen, setIsCustomerDetailsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
  const [totalItemsCount, setTotalItemsCount] = useState(0);

  const generateDemoData = () => {
    // Generate demo data (replace this with your actual demo data)
    const demoCustomers = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      first_name: `Customer${index + 1}`,
      last_name: `Last${index + 1}`,
      email: `customer${index + 1}@example.com`,
      phone_number: `123-456-789${index}`,
      recentPurchases: [
        { productName: `Product A${index + 1}`, amount: 100 },
        { productName: `Product B${index + 1}`, amount: 150 },
      ],
      communicationHistory: [
        { date: '2022-01-01', message: 'First contact' },
        { date: '2022-01-15', message: 'Follow-up' },
      ],
    }));
    setCustomers(demoCustomers);
    setTotalItemsCount(demoCustomers.length);
  };

  useEffect(() => {
    generateDemoData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    generateDemoData(); // For demo purposes, regenerate demo data on search
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const toggleCustomerDetailsModal = () => {
    setIsCustomerDetailsModalOpen(!isCustomerDetailsModalOpen);
  };

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
    setIsCustomerDetailsModalOpen(true);
  };

  return (
    <div className="customer-list-container">
      <h1>All Customers</h1>
      <Form onSubmit={handleSearch}>
        <FormGroup>
          <Label for="searchQuery">Search Customer</Label>
          <div className="search-form">
            <Input
              type="text"
              name="searchQuery"
              id="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <Button type="submit" className="search-button">
              Search
            </Button>
          </div>
        </FormGroup>
      </Form>
      <Table striped className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers
            .slice((activePage - 1) * itemsCountPerPage, activePage * itemsCountPerPage)
            .map((customer) => (
              <tr key={customer.id} onClick={() => handleCustomerClick(customer)}>
                <td>{`${customer.first_name} ${customer.last_name}`}</td>
                <td>{customer.email}</td>
                <td>{customer.phone_number}</td>
                <td>
                  <div className="action-buttons">
                    <Button
                      className="view-details-btn"
                      color="success"
                    >
                      View Details
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="pagination-container">
        <ReactPaginate
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
      {selectedCustomer && (
        <CustomerDetailsModal
          customer={selectedCustomer}
          isOpen={isCustomerDetailsModalOpen}
          toggle={toggleCustomerDetailsModal}
        />
      )}
    </div>
  );
};

export default CustomerOverview;
