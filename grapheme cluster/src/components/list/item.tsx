import React from 'react'

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  // ...
}

const Item = ({ ...props }: Props) => {
  return <li {...props} />
}

export default Item
