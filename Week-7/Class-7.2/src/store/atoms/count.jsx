import { atom, selector } from "recoil"; // import atom from recoil

export const countAtom = atom({
    key: "countAtom", // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value) 
})

export const evenSelector = selector({
    key: "evenSelector",
    get: ({ get }) => {
        const count = get(countAtom)
        return count % 2 === 0
    }
})