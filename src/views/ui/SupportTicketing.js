// SupportTicketing.jsx
import React, { useState } from 'react';
import { Button, Badge, Table } from 'reactstrap';
import '../ComStyle/SupportTicketing.scss';

const SupportTicketing = () => {
  const [tickets, setTickets] = useState([
    { id: 1, title: 'Issue 1', status: 'Open', users: ['User1', 'User2'] },
    { id: 2, title: 'Issue 2', status: 'Pending', users: ['User3', 'User4'] },
    { id: 3, title: 'Issue 3', status: 'Resolved', users: ['User5', 'User6'] },
    // Add more demo tickets as needed
  ]);

  const handleResolveTicket = (ticketId) => {
    // Update the status of the selected ticket to "Resolved"
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status: 'Resolved' } : ticket
    );
    setTickets(updatedTickets);
  };

  return (
    <div className="support-ticketing">
      <h5>Support Ticketing System</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Users</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.title}</td>
              <td>
                <Badge color={getStatusBadgeColor(ticket.status)}>{ticket.status}</Badge>
              </td>
              <td>
                <ul>
                  {ticket.users.map((user, index) => (
                    <li key={index}>{user}</li>
                  ))}
                </ul>
              </td>
              <td>
                {ticket.status === 'Pending' && (
                  <Button color="success" onClick={() => handleResolveTicket(ticket.id)}>
                    Resolve
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const getStatusBadgeColor = (status) => {
  switch (status) {
    case 'Open':
      return 'danger';
    case 'Pending':
      return 'warning';
    case 'Resolved':
      return 'success';
    default:
      return 'primary';
  }
};

export default SupportTicketing;
