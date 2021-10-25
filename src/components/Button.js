import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { LeftOutlined } from '@ant-design/icons'


export default ({ children }) => {
  const history = useHistory()

  const goToHome = () => history.push('/')

  return <Button onClick={goToHome}>
    <LeftOutlined style={{ fontSize: 44, color: '#1ed760' }} />
  </Button>
}

const Button = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  cursor: pointer;
`