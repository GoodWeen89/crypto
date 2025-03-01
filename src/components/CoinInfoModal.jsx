import {Divider, Flex, Tag, Typography} from 'antd'
import CoinInfo from './CoinInfo'


export default function CoinInfoModal({coin}) {
    return (
        <>
            <CoinInfo coin={coin} withSymbol/>
            <Divider />
            <Typography.Paragraph style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <Flex>
                    <Typography.Text style={{width: '50px'}} strong>1 hour: </Typography.Text>
                    <Tag style={{marginLeft: '10px'}} color={coin.priceChange1h < 0 ? 'red' : 'green'}>{coin.priceChange1h}%</Tag>
                </Flex>
                <Flex>
                    <Typography.Text style={{width: '50px'}} strong>1 day: </Typography.Text>
                    <Tag style={{marginLeft: '10px'}} color={coin.priceChange1d < 0 ? 'red' : 'green'}>{coin.priceChange1d}%</Tag>
                </Flex>
                <Flex>
                    <Typography.Text style={{width: '50px'}} strong>1 week: </Typography.Text>
                    <Tag style={{marginLeft: '10px'}} color={coin.priceChange1w < 0 ? 'red' : 'green'}>{coin.priceChange1w}%</Tag>
                </Flex>
            </Typography.Paragraph>
            <Divider />
            <Typography.Paragraph>
                <Typography.Text strong>Price: {coin.price.toFixed(2)}$</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Price BTC: {coin.priceBtc}</Typography.Text>
            </Typography.Paragraph> 
            <Typography.Paragraph>
                <Typography.Text strong>Market Cap: {coin.marketCap.toFixed(2)}$</Typography.Text>
            </Typography.Paragraph>
            {coin.contractAddress && (
                <Typography.Paragraph>
                    <Typography.Text strong>Contract Address: {coin.contractAddress}</Typography.Text>
                </Typography.Paragraph>
            )}
        </>
    )
}