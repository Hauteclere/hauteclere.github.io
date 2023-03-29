import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { ColourScheme } from '../assets/colours'

interface ColourState {
    mainLight: string,
    mainDark: string,
    highlightOnLight: string,
    highlightOnDark: string,
    subheadingText: string,
    textColour: string,
    codeBackground: string,
    sectionBackground: string,
    changeToLightRed: () => void,
    changeToLightGreen: () => void,
    changeToLightBlue: () => void,
    changeToDarkRed: () => void,
    changeToDarkGreen: () => void,
    changeToDarkBlue: () => void
}

const useColourStore = create<ColourState>()(
    devtools(
        persist(
            (set) => ({
                mainLight: ColourScheme.lightGreen.mainLight,
                mainDark: ColourScheme.lightGreen.mainDark,
                highlightOnLight: ColourScheme.lightGreen.highlightOnLight,
                highlightOnDark: ColourScheme.lightGreen.highlightOnDark,
                subheadingText: ColourScheme.lightGreen.subheadingText,
                textColour: ColourScheme.textColour,
                codeBackground: ColourScheme.codeBackground,
                sectionBackground: ColourScheme.sectionBackground,
                changeToLightRed: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightRed.mainLight,
                    mainDark: ColourScheme.lightRed.mainDark,
                    highlightOnLight: ColourScheme.lightRed.highlightOnLight,
                    highlightOnDark: ColourScheme.lightRed.highlightOnDark,
                    subheadingText: ColourScheme.lightRed.subheadingText
                })),
                changeToLightGreen: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightGreen.mainLight,
                    mainDark: ColourScheme.lightGreen.mainDark,
                    highlightOnLight: ColourScheme.lightGreen.highlightOnLight,
                    highlightOnDark: ColourScheme.lightGreen.highlightOnDark,
                    subheadingText: ColourScheme.lightGreen.subheadingText
                })),
                changeToLightBlue: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightBlue.mainLight,
                    mainDark: ColourScheme.lightBlue.mainDark,
                    highlightOnLight: ColourScheme.lightBlue.highlightOnLight,
                    highlightOnDark: ColourScheme.lightBlue.highlightOnDark,
                    subheadingText: ColourScheme.lightBlue.subheadingText
                })),
                changeToDarkRed: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkRed.mainLight,
                    mainDark: ColourScheme.darkRed.mainDark,
                    highlightOnLight: ColourScheme.darkRed.highlightOnLight,
                    highlightOnDark: ColourScheme.darkRed.highlightOnDark,
                    subheadingText: ColourScheme.darkRed.subheadingText
                })),
                changeToDarkGreen: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkGreen.mainLight,
                    mainDark: ColourScheme.darkGreen.mainDark,
                    highlightOnLight: ColourScheme.darkGreen.highlightOnLight,
                    highlightOnDark: ColourScheme.darkGreen.highlightOnDark,
                    subheadingText: ColourScheme.darkGreen.subheadingText
                })),
                changeToDarkBlue: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkBlue.mainLight,
                    mainDark: ColourScheme.darkBlue.mainDark,
                    highlightOnLight: ColourScheme.darkBlue.highlightOnLight,
                    highlightOnDark: ColourScheme.darkBlue.highlightOnDark,
                    subheadingText: ColourScheme.darkBlue.subheadingText
                })),
            }),
        {
            name: 'colour-storage',
        }
    )
))

export default useColourStore;