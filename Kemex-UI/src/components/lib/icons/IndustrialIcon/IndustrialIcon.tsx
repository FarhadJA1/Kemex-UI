interface IProps {
  color?: string
  width?: string
  height?: string
}

const IndustrialIcon = ({ color = '#6a6f83', height = '50', width = '50' }: IProps) => {
  return (
    <svg  viewBox='0 0 32 32' fill={color} width={width} height={height}>
      <path
        d='m1.64 1c0-.199.161-.36.36-.36s.36.161.36.36c0 1.133.824 1.64 1.64 1.64 1.62 0 2.358 1.223 2.358 2.36 0 .199-.161.36-.36.36s-.359-.161-.359-.36c0-.816-.507-1.64-1.639-1.64-1.137 0-2.36-.738-2.36-2.36zm3.36.36c1.801 0 2.64.839 2.64 2.64 0 .199.161.36.36.36s.36-.161.36-.36c0-2.198-1.162-3.36-3.36-3.36-.199 0-.36.161-.36.36s.161.36.36.36zm26.36 15.64v14c0 .199-.161.36-.36.36h-30v-.72h2.64v-2.28h-1.64c-.085 0-.168-.03-.233-.086-.716-.609-1.127-1.438-1.127-2.274s.411-1.665 1.126-2.274c.066-.056.149-.086.234-.086h1.64v-11.476c-.759-.699-1.5-2.018-1.5-3.164 0-1.211.829-2.618 1.631-3.278.064-.053.146-.082.229-.082h4c.083 0 .165.029.229.082.802.66 1.631 2.067 1.631 3.278 0 1.146-.741 2.465-1.5 3.164v4.538c.207-.041.421-.062.64-.062h1c.353 0 .64-.287.64-.64v-9c0-1.853 1.507-3.36 3.36-3.36h2c1.853 0 3.36 1.507 3.36 3.36v1.64h.64c.199 0 .36.161.36.36v21.64h1.279v-13.64c0-.199.161-.36.36-.36h9c.2 0 .361.161.361.36zm-9 10.64h8.279v-10.28h-8.279zm0 3h8.279v-2.28h-8.279zm-6-21.28v21.28h3.28v-21.28zm-.72-.36c0-.199.161-.36.36-.36h.64v-1.64c0-.353-.287-.64-.64-.64h-2c-.353 0-.64.287-.64.64v9c0 1.853-1.507 3.36-3.36 3.36h-1c-.353 0-.64.287-.64.64v3.64h1.64c.085 0 .168.03.233.086.716.609 1.126 1.438 1.126 2.274s-.411 1.665-1.126 2.274c-.065.056-.148.086-.233.086h-1.64v2.279h7.28zm-9.28 11v3.64h1.28v-3.64c0-.75.61-1.36 1.36-1.36h1c1.456 0 2.64-1.184 2.64-2.64v-9c0-.75.61-1.36 1.36-1.36h2c.75 0 1.36.61 1.36 1.36v1.64h1.279v-1.64c0-1.456-1.184-2.64-2.64-2.64h-2c-1.456 0-2.64 1.185-2.64 2.64v9c0 .75-.61 1.36-1.36 1.36h-.999c-1.456 0-2.64 1.184-2.64 2.64zm-.72 0c0-1.369.823-2.549 2-3.072v-4.568h-3.28v11.28h1.281zm-1.506-8.36h3.731c.631-.574 1.275-1.702 1.275-2.64s-.644-2.066-1.274-2.64h-3.732c-.63.574-1.274 1.702-1.274 2.64s.644 2.066 1.274 2.64zm5.729 16c.489-.456.777-1.061.777-1.64s-.289-1.184-.777-1.64h-7.726c-.489.456-.777 1.061-.777 1.64s.289 1.184.777 1.64zm-5.503 3h3.28v-2.28h-3.28z' />
      <path d='m0 0h32v32h-32z' fill='none' />
    </svg>
  )
}

export default IndustrialIcon