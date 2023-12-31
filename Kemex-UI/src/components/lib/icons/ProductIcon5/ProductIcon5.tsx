interface IProps {
  color?: string
  width?: string
  height?: string
}

const ProductIcon5 = ({ color = '#6a6f83', height = '50', width = '50' }: IProps) => {
  return (
    <svg fill={color} height={height} width={width} xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 496 496">
<g>
	<g>
		<g>
			<path d="M472,293.68V0H24v293.68C8.912,311.856,0,335.08,0,360c0,25.208,9.024,48.336,24,66.36V496h448v-69.64
				c14.976-18.024,24-41.152,24-66.36C496,335.08,487.088,311.856,472,293.68z M40,16h416v160h-16h-96H152V32H56v144H40V16z
				 M400,208v-16h24v32h-8h-48h-8v-32h24v16H400z M424,240h16h16v38.192c-9.432-7.368-20.176-13.24-32-17.048V240z M440,224v-32h16
				v32H440z M72,160v-16h48v-16H72V48h64v144H72v-16h48v-16H72z M136,208h16v-16h192v32H136V208z M40,192h16v16h16v16H40V192z
				 M40,240h32v21.144c-11.824,3.816-22.568,9.68-32,17.048V240z M16,360c0-40.088,27.144-75.088,66-85.104l6-1.552V208h32v65.344
				l6,1.552c38.856,10.016,66,45.016,66,85.104c0,48.52-39.48,88-88,88S16,408.52,16,360z M456,480H256v-16h-16v16H40v-38.2
				c17.672,13.856,39.856,22.2,64,22.2c57.344,0,104-46.656,104-104c0-45.296-29.304-85.088-72-98.856V240h104v208h16V240h88h16
				v21.144c-42.696,13.776-72,53.56-72,98.856c0,57.344,46.656,104,104,104c24.144,0,46.328-8.344,64-22.2V480z M392,448
				c-48.52,0-88-39.48-88-88c0-40.088,27.144-75.088,66-85.104l6-1.552V240h32v33.344l6,1.552c38.856,10.016,66,45.016,66,85.104
				C480,408.52,440.52,448,392,448z"/>
      <path d="M408,32H200v128h208V32z M328,144H216V48h112V144z M392,144h-48V48h48V144z"/>
      <rect x="360" y="64" width="16" height="16"/>
      <rect x="360" y="96" width="16" height="16"/>
      <rect x="232" y="64" width="80" height="16"/>
      <rect x="232" y="96" width="80" height="16"/>
      <rect x="96" y="416" width="16" height="16"/>
      <rect x="128" y="416" width="16" height="16"/>
      <rect x="64" y="416" width="16" height="16"/>
      <rect x="384" y="416" width="16" height="16"/>
      <rect x="416" y="416" width="16" height="16"/>
      <rect x="352" y="416" width="16" height="16"/>
		</g>
	</g>
</g>
</svg>
  )
}

export default ProductIcon5
