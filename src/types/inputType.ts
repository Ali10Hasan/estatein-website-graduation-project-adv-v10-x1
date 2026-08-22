import type { ReactNode } from "react";

export interface InputProps {
    label?: string;
    name: string;
    icon?: ReactNode
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    radioPlaceholder?: string,
    type?: string;
    className?: string;
    id?: string
}

export interface TextareaProps {
    label: string
    name: string
    value?: string
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}