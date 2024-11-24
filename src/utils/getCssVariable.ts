export const getCssVariable = (variableName: string): string => {
    console.log(
        getComputedStyle(document.documentElement).getPropertyValue(
            variableName
        )
    );
    return getComputedStyle(document.documentElement).getPropertyValue(
        variableName
    );
};
