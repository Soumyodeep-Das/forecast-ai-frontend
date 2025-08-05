// components/AddToHomeScreenPrompt.tsx
import { useEffect, useState } from 'react'

export default function AddToHomeScreenPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    // @ts-ignore
    deferredPrompt.prompt()
    const { outcome } = await (deferredPrompt as any).userChoice
    console.log('User response to the install prompt:', outcome)
    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-zinc-900 shadow-md rounded-lg z-50">
      <p className="mb-2">Install Forecast Sense?</p>
      <button
        onClick={handleInstallClick}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Install
      </button>
    </div>
  )
}
