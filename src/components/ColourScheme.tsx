import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { ColourScheme } from '../assets/colours'

import logoUrlBlue from '/logo1/logo1.png'
import logoUrlGreen from '/logo3/logo3.png'
import logoUrlRed from '/logo2/logo2.png'
import faviconUrlBlue from "/logo1/favicon.ico";
import faviconUrlGreen from "/logo3/favicon.ico";
import faviconUrlRed from "/logo2/favicon.ico";

import logoDarkBlue from "/logodarkblue.svg";
import logoLightBlue from "/logolightblue.svg";
import logoDarkGreen from "/logodarkgreen.svg";
import logoLightGreen from "/logolightgreen.svg";
import logoDarkRed from "/logodarkred.svg";
import logoLightRed from "/logolightred.svg";

interface ColourState {
    mainLight: string,
    mainDark: string,
    highlightOnLight: string,
    highlightOnDark: string,
    subheadingText: string,
    textColour: string,
    codeBackground: string,
    sectionBackground: string,
    logoUrl: string,
    faviconUrl: string,
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
                logoUrl: logoLightGreen,
                faviconUrl: faviconUrlGreen,
                changeToLightRed: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightRed.mainLight,
                    mainDark: ColourScheme.lightRed.mainDark,
                    highlightOnLight: ColourScheme.lightRed.highlightOnLight,
                    highlightOnDark: ColourScheme.lightRed.highlightOnDark,
                    subheadingText: ColourScheme.lightRed.subheadingText,
                    logoUrl: logoLightRed,
                    faviconUrl: logoLightRed,
                })),
                changeToLightGreen: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightGreen.mainLight,
                    mainDark: ColourScheme.lightGreen.mainDark,
                    highlightOnLight: ColourScheme.lightGreen.highlightOnLight,
                    highlightOnDark: ColourScheme.lightGreen.highlightOnDark,
                    subheadingText: ColourScheme.lightGreen.subheadingText,
                    logoUrl: logoLightGreen,
                    faviconUrl: logoLightGreen,
                })),
                changeToLightBlue: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightBlue.mainLight,
                    mainDark: ColourScheme.lightBlue.mainDark,
                    highlightOnLight: ColourScheme.lightBlue.highlightOnLight,
                    highlightOnDark: ColourScheme.lightBlue.highlightOnDark,
                    subheadingText: ColourScheme.lightBlue.subheadingText,
                    logoUrl: logoLightBlue,
                    faviconUrl: logoLightBlue,
                })),
                changeToDarkRed: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkRed.mainLight,
                    mainDark: ColourScheme.darkRed.mainDark,
                    highlightOnLight: ColourScheme.darkRed.highlightOnLight,
                    highlightOnDark: ColourScheme.darkRed.highlightOnDark,
                    subheadingText: ColourScheme.darkRed.subheadingText,
                    logoUrl: logoDarkRed,
                    faviconUrl: logoDarkRed,
                })),
                changeToDarkGreen: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkGreen.mainLight,
                    mainDark: ColourScheme.darkGreen.mainDark,
                    highlightOnLight: ColourScheme.darkGreen.highlightOnLight,
                    highlightOnDark: ColourScheme.darkGreen.highlightOnDark,
                    subheadingText: ColourScheme.darkGreen.subheadingText,
                    logoUrl: logoDarkGreen,
                    faviconUrl: logoDarkGreen,
                })),
                changeToDarkBlue: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkBlue.mainLight,
                    mainDark: ColourScheme.darkBlue.mainDark,
                    highlightOnLight: ColourScheme.darkBlue.highlightOnLight,
                    highlightOnDark: ColourScheme.darkBlue.highlightOnDark,
                    subheadingText: ColourScheme.darkBlue.subheadingText,
                    logoUrl: logoDarkBlue,
                    faviconUrl: logoDarkBlue,
                })),
            }),
        {
            name: 'colour-storage',
        }
    )
))

export default useColourStore;