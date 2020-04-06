export class Block {
    difficulty:number;
    extraData:string;
    gasLimit:number;
    gasUsed:number;
    hash:string;
    logsBloom:string;
    miner:string;
    mixHash:string;
    nonce:string;
    number:number;
    parentHash:string;
    receiptsRoot:string;
    sha3Uncles:string;
    size:number;
    stateRoot:string;
    timestamp:number;
    totalDifficulty:number;
    transactions:any[];
    transactionsRoot:string;
    uncles:any[];
}