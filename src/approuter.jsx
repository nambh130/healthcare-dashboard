import React from "react";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth & User Pages
import Login from "./components/pages/login";
import ForgotPassword from "./components/pages/login/ForgotPassword";
import Signup from "./components/pages/login/Signup";
import Register from "./components/pages/login/Register";
import LockScreen from "./components/pages/login/LockScreen";
import ChangePassword from "./components/pages/login/ChangePassword";
import Error from "./components/pages/login/Error";
import ServerError from "./components/pages/login/ServerError";
import Profile from "./components/pages/login/Profile";
import EditProfile from "./components/pages/login/EditProfile";
import BlankPage from "./components/pages/login/BlankPage";

// Dashboard Pages
import DoctorDashboard from "./components/dashboard/doctor-dashboard/DoctorDashboard";
import AdminDashboard from "./components/dashboard/admin-dashboard/AdminDashboard";
import PatientDashboard from "./components/dashboard/patient-dashboard/PatientDashboard";

// Doctor Management
import DoctorList from "./components/doctor/DoctorList";
import AddDoctor from "./components/doctor/AddDoctor";
import EditDoctor from "./components/doctor/EditDoctor";
import DoctorProfile from "./components/doctor/DoctorProfile";
import DoctorSettings from "./components/dashboard/doctor-dashboard/DoctorSettings";

// Patient Management
import PatientsList from "./components/patients/PatientsList";
import AddPatients from "./components/patients/AddPatients";
import EditPatients from "./components/patients/EditPatients";
import PatientsProfile from "./components/patients/PatientsProfile";
import PatientSettings from "./components/patients/PatientSettings";

// Appointments
import AppoinmentList from "./components/appoinments/AppoinmentList";
import AddAppoinments from "./components/appoinments/AddAppoinments";
import EditAppoinments from "./components/appoinments/EditAppoinments";

// Doctor Schedule
import ScheduleList from "./components/doctor-schedule/ScheduleList";
import AddSchedule from "./components/doctor-schedule/AddSchedule";
import EditSchedule from "./components/doctor-schedule/EditSchedule";

// Department Management
import DepartmentList from "./components/department/DepartmentList";
import AddDepartment from "./components/department/AddDepartment";
import EditDepartment from "./components/department/EditDepartment";

// Staff Management
import StaffList from "./components/staff/StafList";
import AddStaff from "./components/staff/AddStaff";
import EditStaff from "./components/staff/EditStaff";
import StaffProfile from "./components/staff/StaffProfile";
import AddLeave from "./components/staff/AddLeave";
import EditLeave from "./components/staff/EditLeave";
import Leave from "./components/staff/Leave";
import Attendence from "./components/staff/Attendence";
import Holiday from "./components/staff/Holiday";
import StaffSettings from "./components/staff/StaffSettings";

// Asset Management
import Assets from "./components/assets/Assets";
import AddAsset from "./components/assets/AddAsset";
import EditAssets from "./components/assets/EditAssets";

// Accounting & Finance
import ProvidentFund from "./components/accounts/ProvidentFund";
import AddProviderFund from "./components/accounts/AddProviderFund";
import EditProvident from "./components/accounts/EditProvident";
import Invoice from "./components/accounts/Invoice";
import CreateInvoice from "./components/accounts/CreateInvoice";
import Payments from "./components/accounts/Payments";
import AddPayment from "./components/accounts/AddPayment";
import EditPayment from "./components/accounts/EditPayment";
import Expenses from "./components/accounts/Expenses";
import AddExpense from "./components/accounts/AddExpense";
import EditExpenses from "./components/expense-report/expenses/EditExpenses";
import Taxes from "./components/accounts/Taxes";
import AddTax from "./components/accounts/AddTax";
import EditTaxes from "./components/accounts/EditTaxes";

// Payroll
import EmployeeSalary from "./components/payroll/employee-salary/EmployeeSalary";
import AddEmployeeSalary from "./components/payroll/employee-salary/AddEmployeeSalary";
import EditEmployeeSalery from "./components/payroll/employee-salary/EditEmployeeSalery";
import Payslip from "./components/payroll/Payslip";

// Expense & Invoice Reports
import ExpensesReport from "./components/expense-report/expenses/ExpensesReport";
import AddExpenses from "./components/expense-report/expenses/AddExpenses";
import InvoiceReport from "./components/expense-report/invoice-report/InvoiceReport";

// Invoice Management
import OverDue from "./components/invoice/invoice-list/overdue-invoice/OverDue";
import InvoiceList from "./components/invoice/invoice-list/InvoiceList";
import PaidInvoice from "./components/invoice/invoice-list/paid-invoice/PaidInvoice";
import DraftInvoice from "./components/invoice/invoice-list/draft-invoice/DraftInvoice";
import RecurringInvoice from "./components/invoice/invoice-list/recurring-invoice/RecurringInvoice";
import CancelledInvoice from "./components/invoice/invoice-list/cancelled-invoice/CancelledInvoice";
import InvoiceGrid from "./components/invoice/invoice-grid/InvoiceGrid";
import AddInvoices from "./components/invoice/add-invoices/AddInvoices";
import EditInvoices from "./components/invoice/edit-invoices/EditInvoices";
import InvoiceDetails from "./components/invoice/invoice-details/InvoiceDetails";

// Invoice Settings
import InvoiceGeneralSettings from "./components/invoice/invoice-settings/general-settings/InvoiceGeneralSettings";
import TaxSettings from "./components/invoice/invoice-settings/tax-settings/TaxSettings";
import BankSettings from "./components/invoice/invoice-settings/bank-settings/BankSettings";

// Email
import Inbox from "./components/email/Inbox";
import ComposeMail from "./components/email/ComposeMail";
import MailView from "./components/email/MailView";

// Chat and Calls
import Chat from "./components/chat/Chat";
import IncomingCall from "./components/chat/IncomingCall";
import VoiceCall from "./components/call/VoiceCall";
import VideoCall from "./components/call/VideoCall";

// User Activity
import UserActivity from "./components/activity/UserActivity";

// Settings
import Setting from "./components/settings/Setting";
import Localization from "./components/settings/Localization";
import PaymentSetting from "./components/settings/PaymentSetting";
import SettingsEmail from "./components/settings/SettingsEmail";
import SettingsSocialMedia from "./components/settings/SettingsSocialMedia";
import SettingsSocialLinks from "./components/settings/SettingsSocialLinks";
import SettingsSeo from "./components/settings/SettingsSeo";
import SettingsTheme from "./components/settings/SettingsTheme";
import SettingsChangePassword from "./components/settings/SettingsChangePassword";
import SettingsOthers from "./components/settings/SettingsOthers";

// Forms
import BasicInput from "./components/forms/BasicInput";
import InputGroups from "./components/forms/InputGroups";
import HorizontalForm from "./components/forms/HorizontalForm";
import VerticalForm from "./components/forms/VerticalForm";

// Tables
import BasicTable from "./components/tables/BasicTable";
import DataTable from "./components/tables/DataTable";

// UI Elements
import UiKit from "./components/ui-elements/UiKit";
import Typography from "./components/ui-elements/Typography";
import Tab from "./components/ui-elements/Tab";

// Calendar
import Calendar from "./components/calendar/Calendar";

// Gallery
import GalleryImage from "./components/pages/gallery/Gallery";

//Accounts
const Approuter = () => {
  // eslint-disable-next-line no-unused-vars
  // const config = "/react/template"
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* Auth & User Pages */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lockscreen" element={<LockScreen />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/error" element={<Error />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/blank-page" element={<BlankPage />} />

          {/* Dashboard Pages */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />

          {/* Doctor Management */}
          <Route path="/doctor-list" element={<DoctorList />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/edit-doctor" element={<EditDoctor />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/doctor-setting" element={<DoctorSettings />} />

          {/* Patient Management */}
          <Route path="/patients-list" element={<PatientsList />} />
          <Route path="/add-patients" element={<AddPatients />} />
          <Route path="/edit-patients" element={<EditPatients />} />
          <Route path="/patients-profile" element={<PatientsProfile />} />
          <Route path="/patient-settings" element={<PatientSettings />} />

          {/* Appointments */}
          <Route path="/appoinment-list" element={<AppoinmentList />} />
          <Route path="/add-appoinments" element={<AddAppoinments />} />
          <Route path="/edit-appoinments" element={<EditAppoinments />} />

          {/* Doctor Schedule */}
          <Route path="/schedule-list" element={<ScheduleList />} />
          <Route path="/add-schedule" element={<AddSchedule />} />
          <Route path="/edit-schedule" element={<EditSchedule />} />

          {/* Department Management */}
          <Route path="/department-list" element={<DepartmentList />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/edit-department" element={<EditDepartment />} />

          {/* Staff Management */}
          <Route path="/staff-list" element={<StaffList />} />
          <Route path="/add-staff" element={<AddStaff />} />
          <Route path="/edit-staff" element={<EditStaff />} />
          <Route path="/staff-profile" element={<StaffProfile />} />
          <Route path="/add-leave" element={<AddLeave />} />
          <Route path="/edit-leave" element={<EditLeave />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/staff-settings" element={<StaffSettings />} />

          {/* Asset Management */}
          <Route path="/assets" element={<Assets />} />
          <Route path="/add-asset" element={<AddAsset />} />
          <Route path="/edit-assets" element={<EditAssets />} />

          {/* Accounting & Finance */}
          <Route path="/provident-fund" element={<ProvidentFund />} />
          <Route path="/add-provider-fund" element={<AddProviderFund />} />
          <Route path="/edit-provident" element={<EditProvident />} />
          <Route path="/invoice-list" element={<Invoice />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/add-payment" element={<AddPayment />} />
          <Route path="/edit-payment" element={<EditPayment />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/add-tax" element={<AddTax />} />
          <Route path="/edit-taxes" element={<EditTaxes />} />

          {/* Payroll */}
          <Route path="/employee-salary" element={<EmployeeSalary />} />
          <Route path="/add-salary" element={<AddEmployeeSalary />} />
          <Route path="/edit-salary" element={<EditEmployeeSalery />} />
          <Route path="/payslip" element={<Payslip />} />

          {/* Expense & Invoice Reports */}
          <Route path="/expense-report" element={<ExpensesReport />} />
          <Route path="/add-expense" element={<AddExpenses />} />
          <Route path="/invoice-report" element={<InvoiceReport />} />
          <Route path="/edit-expenses" element={<EditExpenses />} />

          {/* Invoice Management */}
          <Route path="/invoice-list" element={<InvoiceList />} />
          <Route path="/overdue-invoice" element={<OverDue />} />
          <Route path="/paid-invoice" element={<PaidInvoice />} />
          <Route path="/draft-invoice" element={<DraftInvoice />} />
          <Route path="/recurring-invoice" element={<RecurringInvoice />} />
          <Route path="/cancelled-invoice" element={<CancelledInvoice />} />
          <Route path="/invoice-grid" element={<InvoiceGrid />} />
          <Route path="/add-invoice" element={<AddInvoices />} />
          <Route path="/edit-invoice" element={<EditInvoices />} />
          <Route path="/invoice-details" element={<InvoiceDetails />} />

          {/* Invoice Settings */}
          <Route path="/invoice-settings" element={<InvoiceGeneralSettings />} />
          <Route path="/tax-settings" element={<TaxSettings />} />
          <Route path="/bank-settings" element={<BankSettings />} />

          {/* Email */}
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/compose-mail" element={<ComposeMail />} />
          <Route path="/mail-view" element={<MailView />} />

          {/* Chat and Calls */}
          <Route path="/chat" element={<Chat />} />
          <Route path="/incoming-call" element={<IncomingCall />} />
          <Route path="/voice-call" element={<VoiceCall />} />
          <Route path="/video-call" element={<VideoCall />} />

          {/* User Activity */}
          <Route path="/user-activity" element={<UserActivity />} />

          {/* Settings */}
          <Route path="/settings" element={<Setting />} />
          <Route path="/localization" element={<Localization />} />
          <Route path="/payment-setting" element={<PaymentSetting />} />
          <Route path="/settings-email" element={<SettingsEmail />} />
          <Route path="/settings-social-media" element={<SettingsSocialMedia />} />
          <Route path="/settings-social-link" element={<SettingsSocialLinks />} />
          <Route path="/settings-seo" element={<SettingsSeo />} />
          <Route path="/settings-theme" element={<SettingsTheme />} />
          <Route path="/settings-change-password" element={<SettingsChangePassword />} />
          <Route path="/settings-others" element={<SettingsOthers />} />

          {/* Forms */}
          <Route path="/basic-input" element={<BasicInput />} />
          <Route path="/input-group" element={<InputGroups />} />
          <Route path="/horizontal-form" element={<HorizontalForm />} />
          <Route path="/vertical-form" element={<VerticalForm />} />

          {/* Tables */}
          <Route path="/basic-table" element={<BasicTable />} />
          <Route path="/data-table" element={<DataTable />} />

          {/* UI Elements */}
          <Route path="/ui-kit" element={<UiKit />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/tab" element={<Tab />} />

          {/* Calendar */}
          <Route path="/calendar" element={<Calendar />} />

          {/* Gallery */}
          <Route path="/gallery" element={<GalleryImage />} />
        </Routes>
      </BrowserRouter>
      <div className="sidebar-overlay"></div>
    </>
  );
};

export default Approuter;
