import { createContext, useContext, useState } from "react";

const Context = createContext();

export function AccentProvider({ children }) {
    // random numbere between 0 and 5
    const random = Math.floor(Math.random() * 6);
    const colors = [
        "#00fff7",
        "#ffcd68",
        "#e993ff",
        "#ff16dc",
        "#69c9f9",
        "#73ff71",
    ];
    const [accent, setAccent] = useState(colors[random]);
    return (
        <Context.Provider value={[accent, setAccent]}>
            {children}
        </Context.Provider>
    );
}

export function useAccentContext() {
    return useContext(Context);
}
