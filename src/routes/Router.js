import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard.js";
import Users from "../views/Account.js";
import Transactions from "../views/ui/Transactions.js";
import ReportAnalysis from "../views/ui/Reports-analysis.js";
import UserList from "../views/ui/Userlist.js";
import UserDetails from "../views/ui/Userdetails.js";
import TransactionDetails from "../views/ui/TransactionsDetails.js";
import RefundCancellation from "../views/ui/RefundCancellation.js";
import MyAccount from "../views/ui/MyAccount.js";
import EditProfile from "../views/ui/EditProfile.js";
import Logout from "../views/ui/Logout.js";
import UserActivityMonitoring from "../views/ui/UserActivityMonitoring.js";
import NotificationManagement from "../views/ui/NotificationManagement.js";
import WalletManagement from "../views/ui/WalletManagement.js";
import AdminLogin from "../views/ui/AdminLogin.js";
import ContactFormData from "../views/ui/ContactFormData.js";
import ReportSpamData from "../views/ui/ReportSpamData.js"
import CustomerPortfolio from "../views/ui/CustomerPortfolio.js";
import CustomerOverview from "../views/ui/CustomerOverview.js";
import CommunicationChannels from "../views/ui/CommunicationChannels.js";
import ReferralComponent from "../views/ui/ReferralComponent.js";
import SupportTicketing from "../views/ui/SupportTicketing.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/user-management", exact: true, element: <Users /> },
      { path: "/notifications", exact: true, element: <NotificationManagement /> },
      { path: "/transactions", exact: true, element: <Transactions /> },
      { path: "/report-analysis", exact: true, element: <ReportAnalysis /> },
      { path: "/user-list", exact: true, element: <UserList /> },
      { path: "/role-details", exact: true, element: <UserDetails /> },
      { path: "/transaction-details", exact: true, element: <TransactionDetails /> },
      { path: "/refund-cancellation", exact: true, element: <RefundCancellation /> },
      { path: "/my-account", exact: true, element: <MyAccount /> },
      { path: "/edit-profile", exact: true, element: <EditProfile /> },
      { path: "/logout", exact: true, element: <Logout /> },
      { path: "/user-activity", exact: true, element: <UserActivityMonitoring /> },
      { path: "/wallets", exact: true, element: <WalletManagement /> },
      { path: "/login", exact: true, element: <AdminLogin /> },
      { path: "/contact", exact: true, element: <ContactFormData/> },
      { path: "/report-scam", exact: true, element: <ReportSpamData /> },
      { path: "/all-portfolio", exact: true, element: <CustomerPortfolio /> },
      { path: "/all-overview", exact: true, element: <CustomerOverview/> },
      { path: "/channels", exact: true, element: <CommunicationChannels/> },
      { path: "/referral", exact: true, element: <ReferralComponent /> },
      { path: "/ticket", exact: true, element: <SupportTicketing /> },
    ],
  },
];

export default ThemeRoutes;
