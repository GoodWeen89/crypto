import { createContext, useEffect, useState, useContext } from "react";
import { fakeAssets, fakeFetchCrypto } from "../../api";
import { percentDifferece } from '../../utils'

const CryptoContext = createContext({
    crypto: [],
    assets: [],
    loading: false,
})

export function CryptoContextProvider({children} ) {
    const [loading, setLoading] = useState(false)
    const [crypto, setCrypto] = useState([])
    const [assets, setAssets] = useState([])

    function mapAssets(assets, result) {
        return assets.map(asset => {
            const coin = result.find(coin => coin.id === asset.id)

            return {
                grow: asset.price < coin.price,
                growPercent: percentDifferece(asset.price, coin.price),
                totalAmount: asset.amount * coin.price,
                totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                name: coin.name,
                ... asset
            }
        })
    }

    useEffect(() => {
        async function preload() {
            setLoading(true)

            const {result} = await fakeFetchCrypto()
            const assets = await fakeAssets()
            setAssets(mapAssets(assets, result))
            setCrypto(result)

            setLoading(false)
        }
        preload()
    }, [])

    function addAsset(newAsset) {
        setAssets((prev) => mapAssets([...prev, newAsset], crypto))
    }

    return <CryptoContext.Provider value={{loading, crypto, assets, addAsset}}>{children}</CryptoContext.Provider> 
}

export default CryptoContext

export function useCrypto() {
    return useContext(CryptoContext)
}