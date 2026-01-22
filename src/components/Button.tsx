import React from "react";

interface ButtonProps {
    children?: any;
    label: string;
    onClick?: (e?: any) => any;
    onMouseEnter?: (e: any) => any,
    onMouseLeave?: (e: any) => any,
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "danger" | "theme" | "theme2" | "outline-theme" | "thin-gradient-border";
    size?: "sm" | "md" | "lg" | "xl";
    disabled?: boolean;
    classNameC?: string; 
    icon?: React.ReactNode;
}

export default function Button({
    children,
    label,
    onClick,
    onMouseEnter,
    onMouseLeave,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    classNameC = "",
    icon,
}: ButtonProps) {

    const styles: Record<string, string> = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
        secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm hover:shadow-md",
        danger: "bg-gradient-to-r from-red-500 to-cyan-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg",
        theme: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-500 text-white",
        theme2: "bg-black text-white hover:bg-gray-900 shadow-lg",
        'thin-gradient-border': `
      bg-white max-h-[32px]
      text-blue-600
      hover:text-blue-700
      hover:bg-gray-50
      border
      border-gray-200
    `,
    };

    const sizes: Record<string, string> = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
        xl: "px-6 py-3 text-lg",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            className={`
                relative rounded-xl inline-flex items-center justify-center gap-2 font-medium transition-all duration-300
                hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500/40
                ${styles[variant]}
                ${sizes[size]}
                ${disabled ? "opacity-50 cursor-not-allowed hover:translate-y-0 before:opacity-30" : ""}
                ${variant === 'thin-gradient-border' ?
                    'group before:absolute before:-inset-[2px] before:rounded-[13.5px] before:bg-gradient-to-r before:from-blue-500 before:to-cyan-500  before:content-[""] before:-z-10' :
                    ''}
                ${classNameC}
                `}
        >
            {children}
            {icon && <span className="flex items-center relative z-10">{icon}</span>}
            <span className="relative z-10">{label}</span>
        </button>
    );
}