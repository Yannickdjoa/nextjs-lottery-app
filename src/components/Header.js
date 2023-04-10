import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div>
            Decentralised lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
