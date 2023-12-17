interface IProps {
  color?: string
  width?: string
  height?: string
}

const DoubleArrowIcon = ({ color = '#e07d54', height = '15', width = '15' }: IProps) => {
  return (
    <svg  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color}
         width={width} height={height}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export default DoubleArrowIcon
