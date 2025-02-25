import { Link } from 'react-router-dom'
import List from '~/components/list'

const NavList = () => {
  return (
    <List>
      <List.Item>
        <Link to="/emoji-text">Emoji Text</Link>
      </List.Item>
    </List>
  )
}

export default NavList
