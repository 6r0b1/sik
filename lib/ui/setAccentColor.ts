export const setAccentColor = () => {
    // set random accent color on page load
    const random = Math.floor(Math.random() * 6);
    const colors = [
        "#00fff7",
        "#ffcd68",
        "#e993ff",
        "#ff16dc",
        "#69c9f9",
        "#73ff71",
    ];
    document.documentElement.style.setProperty("--accent-01", colors[random]);
};
