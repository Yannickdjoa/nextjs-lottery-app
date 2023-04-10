import Image from "next/image"
import { Inter } from "next/font/google"
// import ManualHeader from "@/components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <div>
            <header>
                <title>smart contract lottery</title>
                <meta name="description" content="Our smart contract app" />
                <link rel="icon" href="/favicon.ico" />
            </header>
            {/*<ManualHeader />*/}
            <Header />
            <LotteryEntrance/>
        </div>
    )
}
