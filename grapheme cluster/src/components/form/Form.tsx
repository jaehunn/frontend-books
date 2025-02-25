interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  // ...
}

const Form = ({ ...props }: Props) => {
  return <form {...props} />
}

export default Form
