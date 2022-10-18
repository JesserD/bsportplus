export const FirstLetterToUpperCase = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export const AddSpaceBeforeUpperCase = (word: string) => {
    return word.replace(/([A-Z])/g, ' $1').trim();
};

export const NormaliseString = (str: string) => {
    str = AddSpaceBeforeUpperCase(str);
    str = FirstLetterToUpperCase(str);
    return str;
};