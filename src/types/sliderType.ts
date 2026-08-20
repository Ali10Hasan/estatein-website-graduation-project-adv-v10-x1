import type { ReactNode } from "react";

export interface SliderControlsProps {
    canPrev: boolean;
    canNext: boolean;
    onPrev: () => void;
    onNext: () => void;
    formattedCurrent: string;
    formattedTotal: string;
    showNumberBetween?: boolean;
    fullWidth?: boolean;
}
export interface HeaderProp {
    title: string;
    desc: string;
    children: ReactNode[];
    desktopCards?: number;
    tabletCards?: number;
    mobileCards?: number;
    showButton?: boolean;
    buttonContent?: string;
    buttonClassName?: string;
}
export interface SliderProps {
    children: React.ReactNode[];
    currentIndex: number;
    gap?: number;
    desktopCards?: number;
    tabletCards?: number;
    mobileCards?: number;
    onVisibleCardsChange: (count: number) => void;
}