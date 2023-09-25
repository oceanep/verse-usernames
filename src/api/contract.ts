import { parseEther } from "viem";

import { default as ABI } from '../contracts/abi_VerseUsernameAR.json';

export const verseUsernameARConfig = (username:string, userAddress:string, ipfsHash:string) => ({
    address: '0x00B1cbd1D9195EC7b4dd46BA0F942Db2f43917E1' as `0x${string}`,
    abi: ABI,
    functionName: 'register',
    args: [username, userAddress, ipfsHash],
    value: parseEther('0.001')
});