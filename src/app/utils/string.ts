export const textLimited = (text: string, size: number) => {
    if (text.length <= size) {
        return text;
    }

    return text.substring(0, size) + "...";
};
