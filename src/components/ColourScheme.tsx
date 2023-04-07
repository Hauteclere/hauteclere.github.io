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
    logoBackground: string,
    logoForeground: string,
    logoDark: string,
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
                logoBackground: ColourScheme.lightGreen.logoBackground,
                logoForeground: ColourScheme.lightGreen.logoForeground,
                logoDark: ColourScheme.lightGreen.logoDark,
                faviconUrl: faviconUrlBlue,
                changeToLightRed: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightRed.mainLight,
                    mainDark: ColourScheme.lightRed.mainDark,
                    highlightOnLight: ColourScheme.lightRed.highlightOnLight,
                    highlightOnDark: ColourScheme.lightRed.highlightOnDark,
                    subheadingText: ColourScheme.lightRed.subheadingText,
                    logoBackground: ColourScheme.lightRed.logoBackground,
                    logoForeground: ColourScheme.lightRed.logoForeground,
                    logoDark: ColourScheme.lightRed.logoDark,
                    faviconUrl: faviconUrlBlue,
                })),
                changeToLightGreen: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightGreen.mainLight,
                    mainDark: ColourScheme.lightGreen.mainDark,
                    highlightOnLight: ColourScheme.lightGreen.highlightOnLight,
                    highlightOnDark: ColourScheme.lightGreen.highlightOnDark,
                    subheadingText: ColourScheme.lightGreen.subheadingText,
                    logoBackground: ColourScheme.lightGreen.logoBackground,
                    logoForeground: ColourScheme.lightGreen.logoForeground,
                    logoDark: ColourScheme.lightGreen.logoDark,
                    faviconUrl: faviconUrlBlue,
                })),
                changeToLightBlue: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.lightBlue.mainLight,
                    mainDark: ColourScheme.lightBlue.mainDark,
                    highlightOnLight: ColourScheme.lightBlue.highlightOnLight,
                    highlightOnDark: ColourScheme.lightBlue.highlightOnDark,
                    subheadingText: ColourScheme.lightBlue.subheadingText,
                    logoBackground: ColourScheme.lightBlue.logoBackground,
                    logoForeground: ColourScheme.lightBlue.logoForeground,
                    logoDark: ColourScheme.lightBlue.logoDark,
                    faviconUrl: faviconUrlBlue,
                })),
                changeToDarkRed: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkRed.mainLight,
                    mainDark: ColourScheme.darkRed.mainDark,
                    highlightOnLight: ColourScheme.darkRed.highlightOnLight,
                    highlightOnDark: ColourScheme.darkRed.highlightOnDark,
                    subheadingText: ColourScheme.darkRed.subheadingText,
                    logoBackground: ColourScheme.darkRed.logoBackground,
                    logoForeground: ColourScheme.darkRed.logoForeground,
                    logoDark: ColourScheme.darkRed.logoDark,
                    faviconUrl: faviconUrlBlue,
                })),
                changeToDarkGreen: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkGreen.mainLight,
                    mainDark: ColourScheme.darkGreen.mainDark,
                    highlightOnLight: ColourScheme.darkGreen.highlightOnLight,
                    highlightOnDark: ColourScheme.darkGreen.highlightOnDark,
                    subheadingText: ColourScheme.darkGreen.subheadingText,
                    logoBackground: ColourScheme.darkGreen.logoBackground,
                    logoForeground: ColourScheme.darkGreen.logoForeground,
                    logoDark: ColourScheme.darkGreen.logoDark,
                    faviconUrl: faviconUrlBlue,
                })),
                changeToDarkBlue: () => set((state: ColourState) => ({
                    mainLight: ColourScheme.darkBlue.mainLight,
                    mainDark: ColourScheme.darkBlue.mainDark,
                    highlightOnLight: ColourScheme.darkBlue.highlightOnLight,
                    highlightOnDark: ColourScheme.darkBlue.highlightOnDark,
                    subheadingText: ColourScheme.darkBlue.subheadingText,
                    logoBackground: ColourScheme.darkBlue.logoBackground,
                    logoForeground: ColourScheme.darkBlue.logoForeground,
                    logoDark: ColourScheme.darkBlue.logoDark,
                    faviconUrl: faviconUrlBlue,
                })),
            }),
        {
            name: 'colour-storage',
        }
    )
))

export default useColourStore;