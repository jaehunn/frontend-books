interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  // ...
}

const Label = ({ ...props }: Props) => {
  return <label {...props} />
}

export default Label
