interface IProps {
  color?: string
  width?: string
  height?: string
}

const DetergentIcon = ({ color = '#6a6f83', height = '50', width = '50' }: IProps) => {
  return (
    <svg viewBox='0 0 1014.667 1067.209' width={width} height={height} fill={color}>
      <path
        d='M172.444 460.042h239.87v238.246l152.398 188.018c13.473 16.238 21.648 37.293 21.648 60.257 0 .374-.002.747-.006 1.12v-.057c-.124 27.41-11.437 52.15-29.604 69.914l-.018.018c-17.525 17.14-41.532 27.714-68.008 27.714-.85 0-1.7-.01-2.545-.033l.124.002H97.147C43.432 1044.95 0 1001.338 0 947.582c0-23.168 8.067-44.45 21.545-61.194l-.147.19 151.046-188.154zm172.237 67.632H240.077V722.14L74.602 928.915c-4.057 5.044-6.518 11.52-6.538 18.572v.004c.075 16.535 13.38 29.937 29.872 30.165H487.88c.256.008.556.012.858.012 16.684 0 30.21-13.525 30.21-30.21v-.507-.366c0-6.583-2.35-12.617-6.26-17.308l.036.044v-.27L344.68 722.273zm119.936.902H120.142v-67.632h344.474zM894.76 73.636h.248c32.602 0 62.148 13.08 83.676 34.28l-.015-.014c22.222 21.786 35.997 52.118 35.997 85.668 0 66.228-53.68 119.92-119.906 119.935H428.548V73.635H894.76zm0 172.237c28.653-.306 51.763-23.605 51.763-52.302 0-28.886-23.418-52.304-52.305-52.304-.19 0-.38 0-.57.003h-397.47v104.604zM498.432 365.807H430.8V21.333h67.633zM292.38 356.34h-86.12v-67.633h86.12zm86.118-171.787h-86.12V116.92h86.12z' />
    </svg>
  )
}

export default DetergentIcon