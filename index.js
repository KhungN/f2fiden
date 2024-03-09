export const generatePassword = (length) => {
    if (length < 8 || length > 20) {
      throw new Error('Invalid password length. Please choose a length between 8 and 20 characters.');
    }
  
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
};
  