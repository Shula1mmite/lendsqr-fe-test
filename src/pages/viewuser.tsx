import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/topbar/sidebar";
import "../styles/viewuser.scss";

const ViewUser = () => {
  const navigate = useNavigate();

  return (
    <div className="viewuser-wrapper">
      <Sidebar />

      <div className="viewuser-content">
        {/* Back to Users */}
        <div className="back-to-users" onClick={() => navigate("/dashboard")}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z"
              fill="#545F7D"
            />
          </svg>
          <span>Back to Users</span>
        </div>
        {/* Header Section */}
        <div className="user-header">
          <h2>User Details</h2>
          <div className="action-buttons">
            <button className="blacklist">Blacklist User</button>
            <button className="activate">Activate User</button>
          </div>
        </div>

{/* ──────────────────────── WHITE CONTAINER ──────────────────────── */}
<div className="profile-container">

  {/* ───── PROFILE CARD ───── */}
  <div className="user-info-card">
    {/* Avatar + name */}
    <div className="user-basic">
      <div className="avatar">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.16" cx="50" cy="50" r="50" fill="#213F7D" />
          <path
            d="M36.0405 65.1796C36.4796 62.2202 37.7936 59.6264 39.9796 57.4C42.7405 54.6 46.0732 53.2 49.9796 53.2C53.886 53.2 57.2204 54.6 59.9796 57.4C62.1796 59.6266 63.5062 62.2204 63.9593 65.1796M58.1405 44.0204C58.1405 46.247 57.3468 48.1532 55.7593 49.7408C54.1734 51.3408 52.253 52.1408 50.0001 52.1408C47.7594 52.1408 45.8409 51.3408 44.2409 49.7408C42.6534 48.1533 41.8596 46.247 41.8596 44.0204C41.8596 41.7673 42.6534 39.8468 44.2409 38.2596C45.8409 36.6737 47.7596 35.8799 50.0001 35.8799C52.2532 35.8799 54.1737 36.6737 55.7593 38.2596C57.3468 39.8471 58.1405 41.7674 58.1405 44.0204Z"
            stroke="#213F7D"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="user-name">
        <h3>Grace Effiom</h3>
        <p>LSQFf587g90</p>
      </div>
    </div>

    {/* vertical divider */}
    <div className="divider" />

    {/* Tier */}
    <div className="user-tier">
      <span>User’s Tier</span>
      <div className="stars">
        {/* Filled star */}
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
        </svg>

        {/* Dim stars */}
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200" opacity="0.2"/>
        </svg>

        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200" opacity="0.2"/>
        </svg>
      </div>
    </div>

    {/* vertical divider */}
    <div className="divider" />

    {/* Account balance */}
    <div className="user-account">
      <h3>₦200,000.00</h3>
      <p>9912345678 / Providus Bank</p>
    </div>
  </div>

  {/* ───── TABS ───── */}
  <div className="user-tabs">
    <button className="tab active">General Details</button>
    <button className="tab">Documents</button>
    <button className="tab">Bank Details</button>
    <button className="tab">Loans</button>
    <button className="tab">Savings</button>
    <button className="tab">App and System</button>
  </div>

</div> 

                {/* GENERAL DETAILS CONTENT */}
        <div className="details-content">
          {/* Personal Information */}
          <div className="info-block">
            <h4 className="block-title">Personal Information</h4>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>Grace Effiom</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>grace@gmail.com</p>
              </div>
              <div className="info-item">
                <label>BVN</label>
                <p>07060780922</p>
              </div>
              <div className="info-item">
                <label>Gender</label>
                <p>Female</p>
              </div>
              <div className="info-item">
                <label>Marital Status</label>
                <p>Single</p>
              </div>
              <div className="info-item">
                <label>Children</label>
                <p>None</p>
              </div>
              <div className="info-item">
                <label>Type of Residence</label>
                <p>Parent’s Apartment</p>
              </div>
            </div>
          </div>

          {/* Education and Employment */}
          <div className="info-block">
            <h4 className="block-title">Education and Employment</h4>
            <div className="info-grid">
              <div className="info-item">
                <label>Level of Education</label>
                <p>B.Sc</p>
              </div>
              <div className="info-item">
                <label>Employment Status</label>
                <p>Employed</p>
              </div>
              <div className="info-item">
                <label>Sector of Employment</label>
                <p>FinTech</p>
              </div>
              <div className="info-item">
                <label>Duration of Employment</label>
                <p>2 years</p>
              </div>
              <div className="info-item">
                <label>Office Email</label>
                <p>grace@lendsqr.com</p>
              </div>
              <div className="info-item">
                <label>Monthly Income</label>
                <p>₦200,000.00 - ₦400,000.00</p>
              </div>
              <div className="info-item">
                <label>Loan Repayment</label>
                <p>40,000</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="info-block">
            <h4 className="block-title">Socials</h4>
            <div className="info-grid">
              <div className="info-item">
                <label>Twitter</label>
                <p>@grace_effiom</p>
              </div>
              <div className="info-item">
                <label>Facebook</label>
                <p>Grace Effiom</p>
              </div>
              <div className="info-item">
                <label>Instagram</label>
                <p>@grace_effiom</p>
              </div>
            </div>
          </div>

          {/* Guarantor */}
          <div className="info-block">
            <h4 className="block-title">Guarantor</h4>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>Debby Ogana</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>debby@gmail.com</p>
              </div>
              <div className="info-item">
                <label>Relationship</label>
                <p>Sister</p>
              </div>
            </div>

          </div>

              {/* Guarantor */}
          <div className="info-block">
            <h4 className="block-title"></h4>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>Debby Ogana</p>
              </div>
              <div className="info-item">
                <label>Phone Number</label>
                <p>07060780922</p>
              </div>
              <div className="info-item">
                <label>Email Address</label>
                <p>debby@gmail.com</p>
              </div>
              <div className="info-item">
                <label>Relationship</label>
                <p>Sister</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;