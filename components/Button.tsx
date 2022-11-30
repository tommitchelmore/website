import classNames from "classnames";
import {
    ComponentProps,
    ComponentPropsWithoutRef,
    ElementType,
} from "react";
import { IconContext } from "react-icons";

const defaultButtonTag = "button" as const;
type DefaultButtonTag = typeof defaultButtonTag;

type ButtonVariant = "filled" | "outlined";

type ButtonOwnProps<T extends ElementType> = {
    as?: T;
    variant?: ButtonVariant;
    icon?: React.ReactNode;
};

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
    Omit<ComponentProps<T>, keyof ButtonOwnProps<T>>;

function Button<T extends ElementType = DefaultButtonTag>({
    className,
    children,
    variant,
    icon,
    as,
    ...props
}: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>) {

    const El = as || defaultButtonTag;

    const classes = classNames({
        "h-10 rounded-full flex items-center justify-center font-medium text-white":
            true,
        "px-6": icon === undefined,
        "pl-4 pr-6 gap-2": icon !== undefined,
        "bg-accent-gradient":
            variant === "filled" || !variant,
        "bg-transparent border-2 border-accent": variant === "outlined",
    });

    return (
        <El className={`${classes} ${className}`} {...props}>
            <IconContext.Provider value={{ size: "18" }}>{icon}</IconContext.Provider>
            {children}
        </El>
    );
}

export default Button;
