"use client";

import { Toaster } from "react-hot-toast";

export default function Toast() {
    return (
        <Toaster
            position="bottom-right"
            toastOptions={{
                duration: 4000,
                style: {
                    background: "#333",
                    color: "#fff",
                },
                success: {
                    style: {
                        background: "#10B981",
                    },
                },
                error: {
                    style: {
                        background: "#EF4444",
                    },
                },
            }}
        />
    );
}
