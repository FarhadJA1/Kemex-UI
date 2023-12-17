interface IProps {
  color?: string
  width?: string
  height?: string
}

const MapIcon = ({ color = '#fff', height = '25', width = '25' }: IProps) => {
  return (
    <svg viewBox="0 0 576 512" width={width} height={height} fill={color}><path d="M0 114.4v349.5c0 11.32 11.49 19.04 22 14.84L160 416V32L10.06 99.59C3.984 102 0 107.9 0 114.4zM554 33.15L416 96v384l149.9-67.59C572 409.1 576 404.1 576 397.6V48.01C576 36.69 564.6 28.94 554 33.15zM192 415.1L384 480V95.1l-192.1-64L192 415.1z"/></svg>
  )
}

export default MapIcon
