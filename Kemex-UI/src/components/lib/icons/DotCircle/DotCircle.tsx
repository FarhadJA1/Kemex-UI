interface IProps {
  color?: string
  width?: string
  height?: string
}

const DotCircle = ({ color = '#e07d54', height = '30', width = '30' }: IProps) => {
  return (
    <svg viewBox='0 0 640 512' height={height} width={width} fill={color}>
      <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z' />
    </svg>
  )
}

export default DotCircle
