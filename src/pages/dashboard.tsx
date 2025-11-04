import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/topbar/sidebar";
import userIcon from "../assets/user.png";
import user2Icon from "../assets/user2.png";
import loansIcon from "../assets/loans.png";
import savingsIcon from "../assets/savings.png";
import filterIcon from "../assets/filter.png";
import "../styles/dashboard.scss";
import { useNavigate } from "react-router-dom";


interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

const Dashboard = () => {
  const cards = [
    { icon: userIcon, label: "USERS", value: "2,453", bg: "#DF18FF" },
    { icon: user2Icon, label: "ACTIVE USERS", value: "2,453", bg: "#396AFF" },
    { icon: loansIcon, label: "USERS WITH LOANS", value: "12,453", bg: "#FF8A00" },
    { icon: savingsIcon, label: "USERS WITH SAVINGS", value: "102,453", bg: "#00C1A1" },
  ];

  const [users] = useState<User[]>([
    { id: "1", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2023 10:00 AM", status: "Inactive" },
    { id: "2", organization: "Irorun", username: "Debby Ogana", email: "debby@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2023 10:00 AM", status: "Pending" },
    { id: "3", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2023 10:00 AM", status: "Blacklisted" },
    { id: "4", organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07033092626", dateJoined: "Apr 10, 2023 10:00 AM", status: "Pending" },
    { id: "5", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2023 10:00 AM", status: "Active" },
    { id: "6", organization: "Lendstar", username: "Tosin Dokunmu", email: "tosin@lendstar.com", phone: "08060780900", dateJoined: "Apr 10, 2023 10:00 AM", status: "Active" },
    { id: "7", organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2023 10:00 AM", status: "Blacklisted" },
    { id: "8", organization: "Lendstar", username: "Tosin Dokunmu", email: "tosin@lendstar.com", phone: "08060780900", dateJoined: "Apr 10, 2023 10:00 AM", status: "Inactive" },
  ]);

  const [showMenu, setShowMenu] = useState<string | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const filterTriggerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();


  // Close filter on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node) &&
        filterTriggerRef.current &&
        !filterTriggerRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    };
    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilter]);

  const headers = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
    "",
  ];

  const toggleFilter = () => setShowFilter((prev) => !prev);

  const handleFilterSubmit = () => {
    // TODO: Apply filters
    setShowFilter(false);
  };

  const handleReset = () => {
    // TODO: Reset form
    setShowFilter(false);
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      <div className="dashboard-content">
        <h2 className="dashboard-title">Users</h2>

        <div className="content-container">
          {/* Metric Cards */}
          <div className="cards-row">
            {cards.map((c, i) => (
              <div key={i} className="metric-card">
                <div className="icon-wrapper">
                  <div className="icon-bg" style={{ background: c.bg }} />
                  <img src={c.icon} alt={c.label} className="icon-img" />
                </div>
                <div className="metric-label">{c.label}</div>
                <div className="metric-value">{c.value}</div>
              </div>
            ))}
          </div>

          {/* Table + Pagination */}
          <div className="table-with-pagination">
            <div className="table-container">
              <div className="table-header">
                {headers.map((label, i) => (
                  <div key={i} className={`header-cell ${label === "ORGANIZATION" ? "filter-trigger" : ""}`} ref={label === "ORGANIZATION" ? filterTriggerRef : null}>
                    <span>{label}</span>
                    {label && (
                      <img
                        src={filterIcon}
                        alt="filter"
                        className="filter-icon"
                        onClick={toggleFilter}
                      />
                    )}
                  </div>
                ))}
              </div>

              {users.map((user) => (
                <div key={user.id} className="table-row">
                  <div>{user.organization}</div>
                  <div>{user.username}</div>
                  <div>{user.email}</div>
                  <div>{user.phone}</div>
                  <div>{user.dateJoined}</div>
                  <div>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </div>
                  <div className="menu-cell">
                    <button
                      className="menu-btn"
                      onClick={() => setShowMenu(showMenu === user.id ? null : user.id)}
                    >
                      <span></span><span></span><span></span>
                    </button>
                    {showMenu === user.id && (
                      <div className="dropdown-menu">
                        <button onClick={() => navigate('/viewuser')}>View Details</button>
                        <button>Blacklist User</button>
                        <button>Activate User</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination-bar">
              <div className="pagination-info">
                Showing
                <select className="page-size-select">
                  <option>100</option>
                </select>
                out of <strong>100</strong>
              </div>
              <div className="pagination-controls">
                <button className="page-btn prev" disabled>&lt;</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <span className="page-ellipsis">...</span>
                <button className="page-btn">15</button>
                <button className="page-btn">16</button>
                <button className="page-btn next">&gt;</button>
              </div>
            </div>
          </div>
        </div>

        {/* FILTER PANEL – DROPDOWN FROM ORGANIZATION COLUMN */}
        {showFilter && (
          <div className="filter-panel-wrapper" ref={filterRef}>
            <div className="filter-panel">
              <div className="filter-group">
                <label>Organization</label>
                <select defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Lendsqr</option>
                  <option>Irorun</option>
                  <option>Lendstar</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Username</label>
                <input type="text" placeholder="Username" />
              </div>
              <div className="filter-group">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="filter-group">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="filter-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="filter-group">
                <label>Status</label>
                <select defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Pending</option>
                  <option>Blacklisted</option>
                </select>
              </div>
              <div className="filter-actions">
                <button className="reset-btn" onClick={handleReset}>
                  Reset
                </button>
                <button className="filter-btn" onClick={handleFilterSubmit}>
                  Filter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;