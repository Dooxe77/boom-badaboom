// composables/usePWAUpdate.ts
export const usePWAUpdate = () => {
  const updateAvailable = ref(false)
  const updateSW = ref<(() => Promise<void>) | undefined>()

  // Forcer la vérification de mise à jour
  const checkForUpdate = async () => {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration()
      if (registration) {
        await registration.update()
      }
    }
  }

  // Forcer le rechargement sans cache
  const forceReload = () => {
    if ('caches' in window) {
      // Vider tous les caches
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name)
        })
      }).then(() => {
        window.location.reload()
      })
    } else {
      // Fallback : rechargement forcé
      window.location.reload()
    }
  }

  // Vérifier s'il y a une mise à jour au chargement
  onMounted(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Un nouveau service worker a pris le contrôle
        window.location.reload()
      })
    }
  })

  return {
    updateAvailable: readonly(updateAvailable),
    updateSW: readonly(updateSW),
    checkForUpdate,
    forceReload
  }
}