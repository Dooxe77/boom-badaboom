import { ref, computed, type Ref } from 'vue'
import { events } from '../data/events'

export default function useGameMode() {
  // Competitive/Counter mode state
  const showCounterMode = ref(false)
  const playerCount = ref(3)
  const counterValue = ref(0)
  const thresholdValue = ref(20)
  const minThreshold = ref(10)
  const maxThreshold = ref(30)
  const counterHistory = ref<Array<{ turn: number; value: number; delta: number; timestamp: number }>>([])
  const showExplosion = ref(false)
  const gameOver = ref(false)
  const isExplosion = ref(false)
  const showHistoryModal = ref(false)
  const gameStartTime = ref<number | null>(null)
  const gameDuration = ref<number | null>(null)
  const currentTime = ref(Date.now())

  // Event deck management
  const currentEvent = ref<any>(null)
  const eventDeck = ref<any[]>([])
  const usedEvents = ref<any[]>([])
  const showEventModal = ref(false)
  const showEndGameModal = ref(false)
  const showGameStartModal = ref(false)
  const showCloseConfirmModal = ref(false)

  // Game mode selection
  const showGameModeSelection = ref(false)
  const showPlayerCountModal = ref(false)

  // Timer management
  let timerInterval: NodeJS.Timeout | null = null

  // Computed values
  const elapsedTime = computed(() => {
    if (!gameStartTime.value) return 0
    const endTime = gameDuration.value || currentTime.value
    return endTime - gameStartTime.value
  })

  const unifiedHistory = computed(() => {
    return counterHistory.value.map((entry, index) => ({
      ...entry,
      turn: index + 1,
      timestamp: entry.timestamp,
    }))
  })

  // Counter mode methods
  const openCounterMode = () => {
    showCounterMode.value = true
    document.body.style.overflow = 'hidden'
  }

  const closeCounterMode = () => {
    showCounterMode.value = false
    document.body.style.overflow = 'auto'
  }

  const triggerExplosion = () => {
    isExplosion.value = true
    showExplosion.value = true
    setTimeout(() => {
      showExplosion.value = false
      gameOver.value = true
      isExplosion.value = false
      gameDuration.value = Date.now()
      showEndGameModal.value = true
    }, 2000)
  }

  const adjustCounter = (delta: number) => {
    const newValue = Math.max(0, counterValue.value + delta)
    counterValue.value = newValue
    counterHistory.value.push({
      turn: counterHistory.value.length + 1,
      value: newValue,
      delta,
      timestamp: Date.now(),
    })

    if (newValue >= thresholdValue.value) {
      triggerExplosion()
    }
  }

  const adjustCounterRandom = (type: 'increment' | 'decrement') => {
    const randomValue = Math.floor(Math.random() * 5) + 1
    const delta = type === 'increment' ? randomValue : -randomValue
    adjustCounter(delta)
  }

  const adjustThreshold = (delta: number) => {
    const newThreshold = Math.min(
      maxThreshold.value,
      Math.max(minThreshold.value, thresholdValue.value + delta)
    )
    thresholdValue.value = newThreshold
  }

  const adjustThresholdRandom = (type: 'increment' | 'decrement') => {
    const randomValue = Math.floor(Math.random() * 5) + 1
    const delta = type === 'increment' ? randomValue : -randomValue
    adjustThreshold(delta)
  }

  const getCounterPosition = () => {
    const percentage = (counterValue.value / thresholdValue.value) * 100
    return Math.min(100, percentage)
  }

  const getThresholdPosition = () => {
    return 100
  }

  // Event management
  const initializeEventDeck = () => {
    const regularEvents = events.filter((e) => e.name !== 'Minuteur final')
    const shuffled = [...regularEvents].sort(() => Math.random() - 0.5)
    const selectedEvents = shuffled.slice(0, 9)

    const lastThree = selectedEvents.slice(-2)
    const finalTimer = events.find((e) => e.name === 'Minuteur final')
    const finalDeck = [...lastThree, finalTimer].sort(() => Math.random() - 0.5)

    eventDeck.value = [...selectedEvents.slice(0, -2), ...finalDeck]
    usedEvents.value = []
  }

  const drawNextEvent = () => {
    if (eventDeck.value.length === 0) {
      showEndGameModal.value = true
      return
    }

    const nextEvent = eventDeck.value.shift()
    currentEvent.value = nextEvent
    usedEvents.value.push(nextEvent)
    showEventModal.value = true

    if (nextEvent.name === 'Minuteur final') {
      setTimeout(() => {
        showEndGameModal.value = true
      }, 3000)
    }
  }

  const closeEventModal = () => {
    showEventModal.value = false
  }

  const endGame = () => {
    gameOver.value = true
    gameDuration.value = Date.now()
    showEndGameModal.value = true
  }

  const closeEndGameModal = () => {
    showEndGameModal.value = false
  }

  const startGame = () => {
    counterValue.value = playerCount.value
    thresholdValue.value = 20
    counterHistory.value = []
    gameOver.value = false
    gameStartTime.value = Date.now()
    gameDuration.value = null
    initializeEventDeck()
    showGameStartModal.value = false
  }

  const closeGameStartModal = () => {
    showGameStartModal.value = false
  }

  const quitGame = () => {
    showCloseConfirmModal.value = true
  }

  const confirmCloseGame = () => {
    closeCounterMode()
    showCloseConfirmModal.value = false
  }

  const cancelCloseGame = () => {
    showCloseConfirmModal.value = false
  }

  // Game mode selection
  const openGameModeSelection = () => {
    showGameModeSelection.value = true
  }

  const closeGameModeModal = () => {
    showGameModeSelection.value = false
  }

  const selectCompetitiveMode = () => {
    showGameModeSelection.value = false
    showPlayerCountModal.value = true
  }

  const selectPlayerCount = (count: number) => {
    playerCount.value = count
    showPlayerCountModal.value = false
    showGameStartModal.value = true
    openCounterMode()
    startGame()
  }

  const closePlayerCountModal = () => {
    showPlayerCountModal.value = false
  }

  const formatDuration = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return {
    // State
    showCounterMode,
    playerCount,
    counterValue,
    thresholdValue,
    minThreshold,
    maxThreshold,
    counterHistory,
    showExplosion,
    gameOver,
    isExplosion,
    showHistoryModal,
    gameStartTime,
    gameDuration,
    currentTime,
    currentEvent,
    eventDeck,
    usedEvents,
    showEventModal,
    showEndGameModal,
    showGameStartModal,
    showCloseConfirmModal,
    showGameModeSelection,
    showPlayerCountModal,

    // Computed
    elapsedTime,
    unifiedHistory,

    // Methods
    openCounterMode,
    closeCounterMode,
    triggerExplosion,
    adjustCounter,
    adjustCounterRandom,
    adjustThreshold,
    adjustThresholdRandom,
    getCounterPosition,
    getThresholdPosition,
    initializeEventDeck,
    drawNextEvent,
    closeEventModal,
    endGame,
    closeEndGameModal,
    startGame,
    closeGameStartModal,
    quitGame,
    confirmCloseGame,
    cancelCloseGame,
    openGameModeSelection,
    closeGameModeModal,
    selectCompetitiveMode,
    selectPlayerCount,
    closePlayerCountModal,
    formatDuration,
  }
}
