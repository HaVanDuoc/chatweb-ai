import React from "react";
import "@/app/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ReduxProvider } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NextUIProvider>
                    <ReduxProvider>
                        <ToastContainer />
                        {children}
                    </ReduxProvider>
                </NextUIProvider>
            </body>
        </html>
    );
}
