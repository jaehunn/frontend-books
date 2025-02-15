interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  // ...
}

const InputText = ({ ...props }: Props) => {
  return <input type="text" {...props} />
}

export default InputText
