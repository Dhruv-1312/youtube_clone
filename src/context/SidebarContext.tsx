import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react"

type SidebarProviderProps = {
  children: ReactNode
}

type SidebarContextType = {
  isLargeOpen: boolean
  isSmallOpen: boolean
  toggle: () => void
  close: () => void
  closeOnVideoDetails: () => void
  restoreSidebarState: () => void
}

const SidebarContext = createContext<SidebarContextType | null>(null)

export function useSidebarContext() {
  const value = useContext(SidebarContext)
  if (value == null) throw Error("Cannot use outside of SidebarProvider")

  return value
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true)
  const [isSmallOpen, setIsSmallOpen] = useState(false)

  // Use refs to store the previous state
  const previousLargeOpenRef = useRef(true)
  const previousSmallOpenRef = useRef(false)

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false)
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])

  function isScreenSmall() {
    return window.innerWidth < 1024
  }

  const toggle = useCallback(() => {
    if (isScreenSmall()) {
      setIsSmallOpen(s => !s)
    } else {
      setIsLargeOpen(l => !l)
    }
  }, [isScreenSmall])

  const close = useCallback(() => {
    if (isScreenSmall()) {
      setIsSmallOpen(false)
    } else {
      setIsLargeOpen(false)
    }
  }, [isScreenSmall])

  

  const closeOnVideoDetails = useCallback(() => {
    // Store current state before closing
    previousLargeOpenRef.current = isLargeOpen
    previousSmallOpenRef.current = isSmallOpen

    // Close sidebar on both large and small screens
    setIsLargeOpen(false)
    setIsSmallOpen(false)
  }, [isLargeOpen, isSmallOpen])

  const restoreSidebarState = useCallback(() => {
    // Restore the previous sidebar state
    setIsLargeOpen(previousLargeOpenRef.current)
    setIsSmallOpen(previousSmallOpenRef.current)
  }, [])

  return (
    <SidebarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggle,
        close,
        closeOnVideoDetails,
        restoreSidebarState, // Add the new method to the context
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}