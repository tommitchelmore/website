import classNames from "classnames";
import { ComponentProps, ComponentPropsWithoutRef, ElementType } from "react";

const defaultItemTag = "a" as const
type DefaultItemTag = typeof defaultItemTag

type NavigationItemOwnProps<T extends ElementType> = {
    as?: T
}

type NavigationItemProps<T extends ElementType> = NavigationItemOwnProps<T> &
    Omit<ComponentProps<T>, keyof NavigationItemOwnProps<T>>

function NavigationItem<T extends ElementType = DefaultItemTag>({as, className, ...props}: NavigationItemProps<T> & 
    Omit<ComponentPropsWithoutRef<T>, keyof NavigationItemOwnProps<T>>) {

    const El = as || defaultItemTag

    const classes = classNames([
        className,
        "text-text font-medium hover:text-white transition-colors"
    ])

    return (
        <li>
            <El {...props} className={classes}>
            </El>
        </li>
    );
}

export default NavigationItem;