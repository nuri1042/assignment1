import { useState } from "react";

export const useAlert = () => {
    const [alert, setAlert] = useState<{
      message: string;
      type: "error" | "success" | "info";
    } | null>(null);
  
    const showAlert = (
      message: string,
      type: "error" | "success" | "info" = "error"
    ) => {
      setAlert({ message, type });
    };
  
    const hideAlert = () => {
      setAlert(null);
    };
  
    return { alert, showAlert, hideAlert };
  };