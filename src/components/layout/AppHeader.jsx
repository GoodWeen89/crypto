import { Layout, Select, Space, Button, Modal, Drawer,  } from 'antd'
import { useCrypto } from '../context/crypto-context';
import { useEffect, useState } from 'react';
import CoinInfoModal from '../CoinInfoModal';
import AddAssetForm from '../AddAssetForm';


const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 60,
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

export default function AppHeader() {
    const [select, setSelect] = useState(false)
    const [modal, setSModal] = useState(null)
    const [coin, setCoin] = useState(false)
    const [drawer, setDrawer] = useState(false)
    const {crypto} = useCrypto()

    useEffect(() => {
        const keypress = event => {
            if (event.key === '/') {
                setSelect((prev) => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    }, [])

    function handleSelect(value) {
        setCoin(crypto.find(coin => coin.id === value))
        setSModal(true)
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                width: '250px',
                }}
                open={select}
                value={'Select coin'}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                <Space>
                    <img 
                        style={{
                            width: '20px'
                        }} 
                        src={option.data.icon} 
                        alt={option.data.label} 
                    />
                    {' '}{option.data.label}
                </Space>
                )}
            />
            <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>
            <Modal 
                open={modal} 
                onCancel={() => setSModal(false)}
                footer={null}
            >
                <CoinInfoModal coin={coin}/>
            </Modal>
            <Drawer 
                width={600}
                title="Add Asset" 
                onClose={() => setDrawer(false)} 
                open={drawer}
                destroyOnClose
            >
                <AddAssetForm onClose={() => setDrawer(false)} />
            </Drawer>
        </Layout.Header>
    )
}