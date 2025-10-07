import { ref } from 'vue'

export default function useModal() {
  // Card modal state
  const showCardModal = ref(false)
  const selectedCard = ref<{ image: string; name: string } | null>(null)

  // Card modal methods
  const openCardModal = (cardImage: string, cardName: string) => {
    selectedCard.value = { image: cardImage, name: cardName }
    showCardModal.value = true
    document.body.style.overflow = 'hidden'
  }

  const closeCardModal = () => {
    showCardModal.value = false
    selectedCard.value = null
    document.body.style.overflow = 'auto'
  }

  // Escape key handler
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      if (showCardModal.value) {
        closeCardModal()
      }
    }
  }

  return {
    // State
    showCardModal,
    selectedCard,

    // Methods
    openCardModal,
    closeCardModal,
    handleEscape,
  }
}
