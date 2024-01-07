import React, { useState, useEffect } from 'react';
import '../ComStyle/CommunicationChannels.scss';

const CommunicationChannels = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    // Add more demo customers as needed
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch initial messages or set demo messages
    // For simplicity, we'll use static demo messages
    setMessages([
      { id: 1, sender: 'Customer 1', text: 'Hello!' },
      { id: 2, sender: 'You', text: 'Hi there!' },
      // Add more demo messages as needed
    ]);
  }, []);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
    // Fetch or set messages for the selected customer
    // For simplicity, we'll set static demo messages
    setMessages([
      { id: 1, sender: 'Customer', text: 'Hello!' },
      { id: 2, sender: 'You', text: 'Hi there!' },
      // Add more demo messages as needed
    ]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    // Simulate sending a message
    const updatedMessages = [...messages, { id: messages.length + 1, sender: 'You', text: newMessage.trim() }];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div className="chat-app-container">
      <div className="customer-list-container">
        <h5>Customer List</h5>
        <ul>
          {customers.map((customer) => (
            <li key={customer.id} onClick={() => handleCustomerClick(customer)}>
              {customer.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-container">
        <h5>{selectedCustomer ? `Chatting with ${selectedCustomer.name}` : 'Select a customer to chat'}</h5>
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={message.sender === 'You' ? 'sent' : 'received'}>
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}
        </div>
        <div className="message-input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationChannels;
