import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{ padding: '0px 20px' }}>
      <Outlet />
    </div>
  )
}

export default Layout
