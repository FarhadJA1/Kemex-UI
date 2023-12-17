interface IProps {
  color?: string
  width?: string
  height?: string
}

const AddIcon = ({ color = '#e07d54', height = '16', width = '16' }: IProps) => {
  return (
    <svg  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} width={width} height={height}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}

export default AddIcon
