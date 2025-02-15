import Item from './item'

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  // ...
}

const List = ({ ...props }: Props) => {
  return <ul {...props}></ul>
}

List.Item = Item

export default List
