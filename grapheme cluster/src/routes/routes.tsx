import { Navigate, RouteObject } from 'react-router-dom'
import EmojiTextPage from '~/pages/emoji-text'
import Layout from '~/components/layout'
import HomePage from '~/pages/home'
import DynamicTextHeightPage from '~/pages/dynamic-text-height'

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
      {
        path: '/dynamic-text-height',
        element: <DynamicTextHeightPage />,
      },
    ],
  },
  { path: '*', element: <Navigate to="/" /> },
]

export default routes
