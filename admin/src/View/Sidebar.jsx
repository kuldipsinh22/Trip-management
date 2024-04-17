import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [admin_id, setId] = useState(sessionStorage.getItem("admin"));
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));
  return (
    <div>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          {role_id == 1 ? (
            <>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Admin">
                  <i class="bi bi-grid"></i>
                  <span>Admin</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Company">
                  <i class="bi bi-grid"></i>
                  <span>Company</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/User">
                  <i class="bi bi-grid"></i>
                  <span>User</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Contact_us">
                  <i class="bi bi-grid"></i>
                  <span>Contact_us</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Add_About/3">
                  <i class="bi bi-grid"></i>
                  <span>About_us</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Tour_packages">
                  <i class="bi bi-grid"></i>
                  <span>Tour_packages</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Add_contact">
                  <i class="bi bi-envelope"></i>
                  <span>Contact</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Booking">
                  <i class="bi bi-grid"></i>
                  <span>Booking</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Tour_packages">
                  <i class="bi bi-grid"></i>
                  <span>Tour_packages</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link collapsed" to="/Highlights">
                  <i class="bi bi-grid"></i>
                  <span>Highlights</span>
                </Link>
              </li>
            </>
          )}

          <li class="nav-heading">Pages</li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
              <i class="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-faq.html">
              <i class="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-contact.html">
              <i class="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-register.html">
              <i class="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" to="/Login">
              <i class="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-error-404.html">
              <i class="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-blank.html">
              <i class="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
