import { NextPage } from "next"
import { CountApp } from "./components/CountApp"

const Hello:NextPage = () => {
    return <main className="w-screen flex min-h-screen flex-col items-center justify-center p-24">
        <h1>カウントアプリ</h1>
        <CountApp/>
    </main>
}

export default Hello