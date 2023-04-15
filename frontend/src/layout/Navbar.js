import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
           ASE ASS
          </Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="btn btn-outline-dark mr-auto" to="/adduser">Add User</Link>
        </nav>
    </div>
  )
}
