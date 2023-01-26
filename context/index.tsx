import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import Toast from "..";
import type { StatusProps } from "..";

interface ToastCtxValue {
    showToast: (text: string, status: StatusProps, time?: number) => void
}

interface ToastCtxProps {
    children: React.ReactNode
    duration?: number
}

const ToastCtx = createContext({} as ToastCtxValue);

function ToastProvider({ children, duration = 4 }: PropsWithChildren<ToastCtxProps>) {
    const [status, setStatus] = useState<StatusProps | "">("");
    const [text, setText] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const showToast = useCallback((text: string, status: StatusProps, time?: number) => {
        if (time) duration = time;

        setStatus(() => status);
        setText(() => text);
        setIsVisible(() => true);
    }, []);

    useEffect(() => {
        if (isVisible) setTimeout(() => setIsVisible(false), duration * 1000);
    }, [isVisible]);

    return (
        <ToastCtx.Provider value={useMemo(() => ({ showToast }), [ showToast ])}>
            { children }
            <Toast visible={isVisible} text={text} status={status as StatusProps} />
        </ ToastCtx.Provider>
    );
}

const useToast = () => {
    const ctx = useContext(ToastCtx);

    if (!ctx) throw new Error("useToast must be used within a ToastProvider");

    return ctx;
};

export { ToastProvider, useToast };
export default ToastCtx;
