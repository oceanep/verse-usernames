export const validateUsername = (username:string):boolean => {
    const regex = new RegExp('^[a-zA-Z0-9]+$');
    return regex.test(username);
};