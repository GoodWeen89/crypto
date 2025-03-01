import {Layout, Typography} from 'antd'
import { useCrypto } from '../context/crypto-context'
import Portfoliochart from '../PortfolioChart'
import AssetsTable from '../AssetsTable'

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    padding: '1rem',
    backgroundColor: '#001529',
}

export default function AppContent() {
    const { assets, crypto } = useCrypto()

    const cryptoPriceMap = crypto.reduce((acc, c) => {
        acc[c.id] = c.price
        return acc
    }, {})

    return (
        <Layout.Content style={contentStyle}>
            <Typography.Title 
                style={{
                    color: '#fff', 
                    textAlign: 'start',
                    margin: '0'
                }} 
                level={3}
            >
                Portfolio: {''} 
                {assets
                    .map((asset) => asset.amount * cryptoPriceMap[asset.id])
                    .reduce((acc, v) => (acc += v), 0)
                    .toFixed(2)
                }$
            </Typography.Title>
            <Portfoliochart />
            <AssetsTable />
        </Layout.Content>
    )
}