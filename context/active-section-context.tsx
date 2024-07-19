"use client";

import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function activeSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // when clilck header section links need keep track time of the last click to prevent the active section from changing so active section wont change and not show the undesrible behaviour in the links when click but it work also scrolling
    // timeOfLastClick updated from header component using its seter  funciton on the links clicks then check all through the components

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }
    return context;
}
