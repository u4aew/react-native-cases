import React, {createContext, useState, useCallback, ReactNode} from 'react';

type BottomSheetContextType = {
  isOpen: boolean;
  content: ReactNode | null;
  setContentBottomSheet: (content: ReactNode | null) => void;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  beforeCloseBottomSheet: () => void;
};

export const BottomSheetContext = createContext<BottomSheetContextType>({
  isOpen: false,
  content: null,
  setContentBottomSheet: () => {},
  openBottomSheet: () => {},
  closeBottomSheet: () => {},
  beforeCloseBottomSheet: () => {},
});

type Props = {
  children: ReactNode;
};

export const BottomSheetProvider: React.FC<Props> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const beforeCloseBottomSheet = useCallback(() => {}, []);
  const setContentBottomSheet = useCallback((content: ReactNode) => {
    setContent(content);
  }, []);
  const openBottomSheet = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeBottomSheet = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <BottomSheetContext.Provider
      value={{
        isOpen,
        openBottomSheet,
        closeBottomSheet,
        content,
        beforeCloseBottomSheet,
        setContentBottomSheet,
      }}>
      {children}
    </BottomSheetContext.Provider>
  );
};
