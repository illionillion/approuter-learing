'use client'
import { FC, useState } from "react";

export const CountApp:FC = () => {
    const [count, setCount] = useState<number>(0)
    const handlePlus = () => {
        setCount(prev => prev + 1)
    }
    const handleMinus = () => {
        if (count === 0) return
        setCount(prev => prev - 1)
    }
    return <>
        <p><span>カウント：</span><span>{count}</span></p>
        <div className="flex gap-3">
            <input type="button" onClick={handlePlus} value='+' />
            <input type="button" onClick={handleMinus} value='-' />
        </div>
    </>
}