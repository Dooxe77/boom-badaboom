import { ref, onMounted, onUnmounted } from 'vue'
import navLinks from '~/data/navigation'

export const useNavigation = () => {
  // Navigation state
  const showBackToTop = ref(false)
  const isMobileMenuOpen = ref(false)

  // Scroll handler
  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Mobile menu methods
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  // Lifecycle hooks
  const setupScrollListener = () => {
    window.addEventListener('scroll', handleScroll)
  }

  const cleanupScrollListener = () => {
    window.removeEventListener('scroll', handleScroll)
  }

  return {
    // State
    showBackToTop,
    isMobileMenuOpen,
    navLinks,

    // Methods
    handleScroll,
    scrollToTop,
    toggleMobileMenu,
    closeMobileMenu,
    setupScrollListener,
    cleanupScrollListener,
  }
}
