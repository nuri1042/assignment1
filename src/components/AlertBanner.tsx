import { useEffect } from "react";

interface AlertBannerProps {
  message: string;
  type?: "error" | "success" | "info";
  onClose: () => void;
}

export default function AlertBanner({
  message,
  type = "error",
  onClose,
}: AlertBannerProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    error: "bg-red-500",
    success: "bg-green-500",
    info: "bg-blue-500",
  }[type];

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 w-80`}
    >
      {message}
    </div>
  );
}