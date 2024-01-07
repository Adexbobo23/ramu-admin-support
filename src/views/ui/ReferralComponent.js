import React, { useState } from 'react';
import { Button, Alert, FormGroup, Label, Input } from 'reactstrap';
import '../ComStyle/ReferralComponent.scss';

const ReferralComponent = () => {
  const [isReferralSent, setIsReferralSent] = useState(false);
  const [isAdminResponse, setIsAdminResponse] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    // Add more demo users as needed
  ];

  const admins = [
    { id: 101, name: 'Admin 1', email: 'admin1@example.com' },
    { id: 102, name: 'Admin 2', email: 'admin2@example.com' },
    // Add more demo admins as needed
  ];

  const handleReferCase = () => {
    // Add logic to refer the case to the admin and trigger notifications
    // For demonstration, we'll just toggle state variables
    setIsReferralSent(true);

    // Simulate admin response after a delay
    setTimeout(() => {
      setIsAdminResponse(true);
    }, 2000);
  };

  const handleUserChange = (event) => {
    const userId = parseInt(event.target.value);
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
  };

  const handleAdminChange = (event) => {
    const adminId = parseInt(event.target.value);
    const admin = admins.find((a) => a.id === adminId);
    setSelectedAdmin(admin);
  };

  return (
    <div className="referral-component">
      <h5>Case Referral</h5>

      <FormGroup>
        <Label for="userSelect">Select User:</Label>
        <Input type="select" name="userSelect" id="userSelect" onChange={handleUserChange}>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Input>
      </FormGroup>

      {!isReferralSent && selectedUser && (
        <>
          <FormGroup>
            <Label for="adminSelect">Select Admin:</Label>
            <Input type="select" name="adminSelect" id="adminSelect" onChange={handleAdminChange}>
              <option value="">Select Admin</option>
              {admins.map((admin) => (
                <option key={admin.id} value={admin.id}>
                  {admin.name}
                </option>
              ))}
            </Input>
          </FormGroup>

          <Button color="success" onClick={handleReferCase}>
            Refer Case to Admin
          </Button>
        </>
      )}

      {isReferralSent && (
        <Alert color="success">
          Case has been referred to {selectedAdmin ? selectedAdmin.name : 'the admin'}. You will receive a notification once they respond.
        </Alert>
      )}

      {isAdminResponse && (
        <Alert color="info">
          {selectedAdmin ? `${selectedAdmin.name} has responded to the referred case.` : 'Admin has responded to the referred case.'}
          Support staff, check the case for updates.
        </Alert>
      )}
    </div>
  );
};

export default ReferralComponent;
