import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar border-b  border-primary shadow-md bg-base-100">
    <div className="flex-1 justify-center">
      <a className="btn btn-ghost normal-case text-xl">Leadzen</a>
    </div>
  </nav>
  )
}

export default Navbar