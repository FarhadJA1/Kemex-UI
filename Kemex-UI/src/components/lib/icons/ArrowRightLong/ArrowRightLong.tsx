interface IProps {
  color?: string
  width?: string
  height?: string
}

const ArrowRight = ({color='#e07d54', height='20', width='20'}:IProps) => {
  return (

    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title/>
      <g id="Complete">
        <g id="arrow-right">
          <g>
            <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            <line fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12"/>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default ArrowRight
