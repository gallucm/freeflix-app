const bcrypt = require('bcryptjs'); 

export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

export const comparePassword = (password, hash) => {
    const isEqual = bcrypt.compareSync(password, hash);

    return isEqual;    
}