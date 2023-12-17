interface IProps {
  color?: string
  width?: string
  height?: string
}

const OrdersIcon = ({ color = '#fff', height = '25', width = '25' }: IProps) => {
  return (
    <svg height={height} viewBox='0 0 24 24' width={width} fill={color}>
      <path
        d='M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z' />
    </svg>
  )
}

export default OrdersIcon