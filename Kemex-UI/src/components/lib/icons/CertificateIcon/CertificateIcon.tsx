interface IProps {
  color?: string
  width?: string
  height?: string
}

const CertificateIcon = ({ color = '#e07d54', height = '30', width = '30' }: IProps) => {
  return (
    <svg viewBox='0 0 20 20' height={height} width={width} fill={color}>
      <path
        d='m15 8c1.933 0 3.5 1.567 3.5 3.5 0 .9538-.3815 1.8184-1.0002 2.4497l.0002 4.0503c0 .412-.4704.6472-.8.4l-1.4-1.05c-.1778-.1333-.4222-.1333-.6 0l-1.4 1.05c-.3296.2472-.8.012-.8-.4v-4.0505c-.6186-.6313-1-1.4958-1-2.4495 0-1.933 1.567-3.5 3.5-3.5zm1.5 6.6632c-.4546.216-.9632.3368-1.5.3368-.4603714 0-.8993633-.0886041-1.3018618-.2500688l-.1981382-.0867312v2.0868l1.2428-.7457c.1319167-.0791667.2912639-.0923611.4323241-.0395833l.0820759.0395833 1.2428.7457zm-.5-11.6632c1.1046 0 2 .89543 2 2v3.14584c-.2999-.26839-.6359-.49716-1-.67808v-2.46776c0-.55228-.4477-1-1-1h-12c-.55228 0-1 .44772-1 1v8c0 .5523.44772 1 1 1h7.2578c.0758.1133.1567.223.2422.3287v.6713h-7.5c-1.10457 0-2-.8954-2-2v-8c0-1.10457.89543-2 2-2zm-1 6c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5zm-5.5 2c.27614 0 .5.2239.5.5 0 .2454222-.17687704.4496-.41012499.4919429l-.08987501.0080571h-4c-.27614 0-.5-.2239-.5-.5 0-.2454222.17687704-.4496.41012499-.4919429l.08987501-.0080571zm5-5c.2761 0 .5.22386.5.5s-.2239.5-.5.5h-9c-.27614 0-.5-.22386-.5-.5s.22386-.5.5-.5z'
        fill={color} />
    </svg>
  )
}

export default CertificateIcon