import { FC } from "react";

type props = {
    count: number
}
export const  CountView:FC<props> = ({count}) => {
    return <p><span>カウント：</span><span>{count}</span></p>
}