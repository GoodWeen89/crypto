import {Layout} from 'antd'

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#002950',
  };

export default function AppFooter() {
    return (
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    )
}