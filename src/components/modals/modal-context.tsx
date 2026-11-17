"use client";

import * as React from "react";

interface ModalContextType {
  isBrandModalOpen: boolean;
  openBrandModal: () => void;
  closeBrandModal: () => void;
  isCreatorModalOpen: boolean;
  openCreatorModal: () => void;
  closeCreatorModal: () => void;
}

const ModalContext = React.createContext<ModalContextType>({
  isBrandModalOpen: false,
  openBrandModal: () => {},
  closeBrandModal: () => {},
  isCreatorModalOpen: false,
  openCreatorModal: () => {},
  closeCreatorModal: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isBrandModalOpen, setIsBrandModalOpen] = React.useState(false);
  const [isCreatorModalOpen, setIsCreatorModalOpen] = React.useState(false);

  // Close modals on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsBrandModalOpen(false);
        setIsCreatorModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isBrandModalOpen || isCreatorModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBrandModalOpen, isCreatorModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isBrandModalOpen,
        openBrandModal: () => setIsBrandModalOpen(true),
        closeBrandModal: () => setIsBrandModalOpen(false),
        isCreatorModalOpen,
        openCreatorModal: () => setIsCreatorModalOpen(true),
        closeCreatorModal: () => setIsCreatorModalOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModals = () => React.useContext(ModalContext);
