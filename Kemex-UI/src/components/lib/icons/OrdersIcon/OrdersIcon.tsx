interface IProps {
  color?: string
  width?: string
  height?: string
}
const OrdersIcon = ({color='#fff', height='25', width='25'}:IProps) => {
  return (
    <svg fill={color} width={width} height={height} viewBox="0 0 512 512">
      <defs>
      </defs>
      <title>speech-bubble-10-glyph</title>
      <path className="cls-1"
            d="M469.33,213.63H241.78a42.71,42.71,0,0,0-42.67,42.67V370.08a42.72,42.72,0,0,0,42.67,42.67H466.91l8.33,8.35L512,457.93V256.3A42.71,42.71,0,0,0,469.33,213.63ZM398.22,370.08H312.89a14.22,14.22,0,0,1,0-28.44h85.33a14.22,14.22,0,0,1,0,28.44Zm0-42.67H312.89a14.22,14.22,0,0,1,0-28.44h85.33a14.22,14.22,0,1,1,0,28.44Zm0-42.67H312.89a14.22,14.22,0,1,1,0-28.44h85.33a14.22,14.22,0,1,1,0,28.44ZM241.78,185.19a71.11,71.11,0,0,0-71.11,71.11v71.11H45.11l-8.33,8.33L0,372.52V85.63A42.71,42.71,0,0,1,42.67,43H384a42.71,42.71,0,0,1,42.67,42.67v99.56Z" />
    </svg>

  )
}

export default OrdersIcon
