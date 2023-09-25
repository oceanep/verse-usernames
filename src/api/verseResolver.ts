import axios from 'axios';

const resolverEndpoint = 'https://verse-resolver-l6c2rma45q-uc.a.run.app';

export const usernameAvailable = async (chain:string, username:string) => {
    try {
      const response = await axios.get(`${resolverEndpoint}/username/${chain}/${username}`);
      return response;
    } catch(e) {
        console.log('There was an error: ', e);
        return undefined;
    }
};

export const getUsername = async (chain:string, address:string) => {
    try {
      const response = await axios.get(`${resolverEndpoint}/username/${chain}/${address}`);
      return response;
    } catch(e) {
        console.log('There was an error: ', e);
        return undefined;
    }
};

export const uploadMetadata = async (chain:string, username:string, address:string) => {
    try {
        const response = await axios.get(`${resolverEndpoint}/getIPFSHash/${chain}/${username}/${address}`);
        return response;
    } catch(e) {
        console.log('There was an error: ', e);
        return undefined;
    }
};