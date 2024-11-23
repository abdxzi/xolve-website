import { Marquee } from "./Marquee";
import Image from "next/image";

import eth from "../public/images/chains/eth4.png";
import base from "../public/images/chains/base.png";
import arb from "../public/images/chains/arb.png";
import aptos from "../public/images/chains/aptos.png";
import bsc from "../public/images/chains/bsc.png";
import polygon from "../public/images/chains/pol.png";
import op from "../public/images/chains/op.png";
import ton from "../public/images/chains/TON.png";
import near from "../public/images/chains/near.png";
import avalanche from "../public/images/chains/avalanche.png";


const chains = [
    {
        image: <Image src={eth} className="h-full object-contain" alt="Ethereum" width={200} height={300} />
    },
    {
        image: <Image src={base} className="h-full object-contain" alt="Base" width={200} height={300} />
    },
    {
        image: <Image src={arb} className="h-full object-contain" alt="Arbitrum" width={200} height={300} />
    },
    {
        image: <Image src={aptos} className="h-full object-contain" alt="Aptos" width={200} height={300} />
    },
    {
        image: <Image src={bsc} className="h-full object-contain" alt="Binance Smart Chain" width={200} height={300} />
    },
    {
        image: <Image src={polygon} className="h-full object-contain" alt="Polygon" width={200} height={300} />
    },
    {
        image: <Image src={op} className="h-full object-contain" alt="Optimism" width={200} height={300} />
    },
    {
        image: <Image src={ton} className="h-full object-contain" alt="TON" width={200} height={300} />
    },
    {
        image: <Image src={near} className="h-full object-contain" alt="Near" width={200} height={300} />
    },
    {
        image: <Image src={avalanche} className="h-full object-contain" alt="Avalanche" width={200} height={300} />
    },
];

const firstRow = chains.slice(0, chains.length / 2);
const secondRow = chains.slice(chains.length / 2);



export default function ChainMarquee() {
    return (
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((chain, i) => (
                    <div key={i} className="flex items-center justify-center h-32 py-6 px-0">
                        {chain.image}
                    </div>
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((chain, i) => (
                    <div key={i} className="flex items-center justify-center h-32 py-6 px-0">
                        {chain.image}
                    </div>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030712] dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#030712] dark:from-background"></div>
        </div>
    );
}
