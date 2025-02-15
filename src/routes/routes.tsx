import { Navigate, RouteObject } from 'react-router-dom'
import EmojiTextPage from '~/pages/emoji-text'
import Layout from '~/components/layout'
import HomePage from '~/pages/home'

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/emoji-text',
        element: <EmojiTextPage />,
      },
    ],
  },
  { path: '*', element: <Navigate to="/" /> },
]

export default routes
