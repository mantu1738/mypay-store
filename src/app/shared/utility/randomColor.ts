
/**
 * Generates a random color.
 * @example generateRandomColor() => rgb(0, 255, 0)
 * @method
 * @memberof Utility
 * @export
 * @see {@link https://stackoverflow.com/a/23095745/10247962|StackOverflow generate random color}
 */
export const generateRandomColor = () => {
    const minBrightness = 30;
    const maxBrightness = 200;

    const randomColor = () => Math.floor(Math.random() * 256);

    let color: any = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    // Ensure the color is not too bright or too dark
    const brightness = (color: any) => {
        const rgb = color.match(/\d+/g);
        return rgb ? 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2] : 0;
    };

    while (brightness(color) < minBrightness || brightness(color) > maxBrightness) {
        color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

    return color;
}

