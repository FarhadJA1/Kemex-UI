interface IProps {
  color?: string
  width?: string
  height?: string
}

const ArrowRight = ({color='#e07d54', height='12', width='12'}:IProps) => {
  return (
    <svg fill={'none'} viewBox='0 0 24 24' strokeWidth='1.5'  height={height} width={width} stroke={color}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
    </svg>

  )
}

export default ArrowRight
