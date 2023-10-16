const hasNumber = (str: string) => {
    return /[0-9]/.test(str);
};

const hasUpperCase = (str: string) => {
    return /[A-Z]/.test(str);
};

const hasSpecialCharacter = (str: string) => {
    return /[`!@#$%^&*]/.test(str);
};

const hasConsecutiveLetters = (str: string) => {
    return /([a-zA-Z])\1{2,}/.test(str);
}
export { hasNumber, hasUpperCase, hasSpecialCharacter, hasConsecutiveLetters }