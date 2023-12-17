interface IProps {
  color?: string
  width?: string
  height?: string
}

const AntiFreezeIcon = ({ color = '#6a6f83', height = '50', width = '50' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1"
         xmlns="http://www.w3.org/2000/svg" fill={'none'} stroke={color}>
      <defs>
      </defs>
      <line className="cls-1" x1="12" y1="23.5" x2="12" y2="15.83" />
      <line className="cls-1" x1="12" y1="8.17" x2="12" y2="0.5" />
      <polyline className="cls-1" points="15.83 1.46 12 5.29 8.17 1.46" />
      <polyline className="cls-1" points="8.17 22.54 12 18.71 15.83 22.54" />
      <line className="cls-1" x1="8.17" y1="12" x2="0.5" y2="12" />
      <line className="cls-1" x1="23.5" y1="12" x2="15.83" y2="12" />
      <polyline className="cls-1" points="22.54 15.83 18.71 12 22.54 8.17" />
      <polyline className="cls-1" points="1.46 8.17 5.29 12 1.46 15.83" />
      <line className="cls-1" x1="9.29" y1="14.71" x2="5.29" y2="18.71" />
      <line className="cls-1" x1="18.71" y1="5.29" x2="14.71" y2="9.29" />
      <line className="cls-1" x1="20.63" y1="2.42" x2="20.63" y2="4.33" />
      <line className="cls-1" x1="3.38" y1="19.67" x2="3.38" y2="21.58" />
      <line className="cls-1" x1="9.29" y1="9.29" x2="5.29" y2="5.29" />
      <line className="cls-1" x1="18.71" y1="18.71" x2="14.71" y2="14.71" />
      <line className="cls-1" x1="21.58" y1="20.63" x2="19.67" y2="20.63" />
      <line className="cls-1" x1="4.33" y1="3.38" x2="2.42" y2="3.38" />
      <path className="cls-1" d="M15.83,12a3.82,3.82,0,1,1-1.12-2.71A3.86,3.86,0,0,1,15.83,12Z" />
    </svg>
  )
}

export default AntiFreezeIcon
