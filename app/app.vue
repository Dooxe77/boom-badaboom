<template>
  <Analytics />
  <div class="min-h-screen bg-gray-50">
    <!-- Header Component -->
    <LayoutHeader @start-game="openGameModeSelection" />

    <!-- Navigation Component -->
    <LayoutNavigation />

    <div class="container mx-auto px-4 sm:px-6 py-8">
      <!-- Concept du Jeu -->
      <!-- GameConceptSection Component -->
      <GameConceptSection />
      <!-- BoxContentSection Component -->
      <BoxContentSection />
      <!-- GameSetupSection Component -->
      <GameSetupSection />
      <!-- VictorySection Component -->
      <VictorySection />
      <!-- CardsSection Component -->
      <CardsSection @card-click="openCardModal" />

      <!-- ContributorsSection Component -->
      <ContributorsSection />
    </div>

    <!-- Back to top button -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>

    <!-- CounterMode Component -->
    <CounterMode
      :show="showCounterMode"
      :elapsed-time="elapsedTime"
      :player-count="playerCount"
      :turn-number="turnNumber"
      :final-countdown-revealed="finalCountdownRevealed"
      :event-deck-length="eventDeck.length"
      :game-over="gameOver"
      :counter-value="counterValue"
      :threshold-value="thresholdValue"
      :min-threshold="minThreshold"
      :max-threshold="maxThreshold"
      :current-event="currentEvent"
      :is-explosion="isExplosion"
      :show-end-game-modal="showEndGameModal"
      :game-duration="gameDuration"
      @next-turn="finalCountdownRevealed ? endGame() : drawNextEvent()"
      @show-history="showHistoryModal = true"
      @close-confirm="showCloseConfirmModal = true"
      @adjust-counter="adjustCounter"
      @adjust-threshold="adjustThreshold"
      @quit-game="quitGame"
    />

    <!-- Section Contact -->
    <!-- ContactForm Component -->
    <ContactForm />

    <!-- Footer Component -->
    <LayoutFooter />

    <!-- CardModal Component -->
    <CardModal
      :show="showCardModal"
      :card="selectedCard"
      @close="closeCardModal"
    />

    <!-- HistoryModal Component -->
    <HistoryModal
      :show="showHistoryModal"
      :history="unifiedHistory"
      @close="showHistoryModal = false"
    />

    <!-- GameCloseConfirmModal Component -->
    <GameCloseConfirmModal
      :show="showCloseConfirmModal"
      @cancel="cancelCloseGame"
      @confirm="confirmCloseGame"
    />
  </div>

  <!-- GameModeModal Component -->
  <GameModeModal
    :show="showGameModeModal"
    @close="closeGameModeModal"
    @select-competitive="selectCompetitiveMode"
  />

  <!-- EventCard Component -->
  <EventCard
    :show="showEventModal"
    :event="currentEvent"
    :turn-number="turnNumber"
    :pulse="eventModalPulse"
    @close="closeEventModal"
  />

  <!-- EndGameModal Component -->
  <EndGameModal
    :show="showEndGameModal"
    :game-duration="gameDuration"
    @quit="quitGame"
  />

  <!-- PlayerCountModal Component -->
  <PlayerCountModal
    :show="showPlayerCountModal"
    @select="selectPlayerCount"
    @back="
      closePlayerCountModal();
      openGameModeSelection();
    "
  />

  <!-- GameStartModal Component -->
  <GameStartModal
    :show="showGameStartModal"
    @close="closeGameStartModal"
    @start="startGame"
  />
</template>

<style scoped>
/* Custom cursor for images */
.cursor-zoom-in {
  cursor: zoom-in;
}

/* Custom sizes for tokens */
.w-18 {
  width: 4.5rem;
}
.h-18 {
  height: 4.5rem;
}
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 30px rgba(0, 0, 0, 0.15);
}

/* Modal scroll improvements for mobile */
.max-h-\[90vh\] {
  max-height: 90vh;
}

@media (max-height: 600px) {
  .max-h-\[90vh\] {
    max-height: 95vh;
  }
}

/* Custom arrow border sizes */
.border-l-3 {
  border-left-width: 6px;
}
.border-r-3 {
  border-right-width: 6px;
}
.border-t-5 {
  border-top-width: 8px;
}

/* Enhanced glow effects */
.token-glow-blue {
  filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.7));
}
.token-glow-yellow {
  filter: drop-shadow(0 0 18px rgba(234, 179, 8, 0.8));
}
.token-glow-red {
  filter: drop-shadow(0 0 25px rgba(239, 68, 68, 0.9));
}
</style>

<script setup>
import '../assets/styles/global.css'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Analytics } from '@vercel/analytics/vue'
import { events } from './data/events'

// Back to top functionality
const showBackToTop = ref(false);

// Card modal functionality
const selectedCard = ref(null);
const showCardModal = ref(false);

// Counter mode functionality
const showCounterMode = ref(false);
const playerCount = ref(3); // Nombre de joueurs (3, 4 ou 5)
const counterValue = ref(0);
const thresholdValue = ref(20);
const minThreshold = ref(10);
const maxThreshold = ref(30);
const counterHistory = ref([]);
const showExplosion = ref(false);
const gameOver = ref(false);
const isExplosion = ref(false);
const showHistoryModal = ref(false);
const gameStartTime = ref(null);
const gameDuration = ref(null);
const currentTime = ref(Date.now());

// Event system
const currentEvent = ref(null);
const eventDeck = ref([]);
const usedEvents = ref([]);
const turnNumber = ref(0);
const showEventModal = ref(false);
const eventModalPulse = ref(false);
const showGameStartModal = ref(false);
const finalCountdownRevealed = ref(false);
const showCloseConfirmModal = ref(false);
const showEndGameModal = ref(false);

// Game mode selection
const showGameModeModal = ref(false);
const showPlayerCountModal = ref(false);

// Timer interval reference for cleanup
let timerInterval = null;

// Computed property for current elapsed time
const elapsedTime = computed(() => {
  if (!gameStartTime.value || gameOver.value) return null;
  const elapsed = Math.max(0, currentTime.value - gameStartTime.value);
  return formatDuration(elapsed);
});

// Computed property for unified history (events + counter changes)
const unifiedHistory = computed(() => {
  const allItems = [...usedEvents.value, ...counterHistory.value];

  // Sort by timestamp (convert to comparable format)
  return allItems.sort((a, b) => {
    const timeA = new Date(`1970-01-01 ${a.timestamp}`);
    const timeB = new Date(`1970-01-01 ${b.timestamp}`);
    return timeA - timeB;
  });
});

const handleScroll = () => {
  showBackToTop.value = window.pageYOffset > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Card modal functions
const openCardModal = (cardImage, cardName) => {
  // Use placeholder if image doesn't exist
  const imagePath = cardImage || "/placeholder-card.png";
  selectedCard.value = { image: imagePath, name: cardName };
  showCardModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeCardModal = () => {
  showCardModal.value = false;
  selectedCard.value = null;
  document.body.style.overflow = "auto";
};

// Counter mode functions
const openCounterMode = () => {
  showCounterMode.value = true;

  // Initialize counter values
  counterValue.value = playerCount.value;
  thresholdValue.value = 20;
  counterHistory.value = [];
  showExplosion.value = false;
  gameOver.value = false;
  isExplosion.value = false;
  gameStartTime.value = null;
  gameDuration.value = null;

  // Initialize event system
  currentEvent.value = null;
  usedEvents.value = [];
  turnNumber.value = 0;
  showEventModal.value = false;
  showGameStartModal.value = true;
  eventModalPulse.value = false;
  finalCountdownRevealed.value = false;
  showCloseConfirmModal.value = false;
  showEndGameModal.value = false;
  initializeEventDeck();

  document.body.style.overflow = "hidden";
  // Timer will start when user clicks "C'est parti!"
};

const closeCounterMode = () => {
  showCounterMode.value = false;
  document.body.style.overflow = "auto";
};

const quitGame = () => {
  // Fermer toutes les modals
  showCounterMode.value = false;
  showEndGameModal.value = false;
  showHistoryModal.value = false;
  showEventModal.value = false;
  showPlayerCountModal.value = false;

  // Remettre à zéro tous les états du jeu
  counterValue.value = playerCount.value;
  thresholdValue.value = 20;
  minThreshold.value = 10;
  maxThreshold.value = 30;
  counterHistory.value = [];
  showExplosion.value = false;
  gameOver.value = false;
  gameStartTime.value = null;
  gameDuration.value = null;

  // Remettre à zéro le système d'événements
  currentEvent.value = null;
  eventDeck.value = [];
  usedEvents.value = [];

  // Restaurer le scroll
  document.body.style.overflow = "auto";
};

const triggerExplosion = () => {
  gameOver.value = true;
  isExplosion.value = true;

  // Calculer la durée de la partie
  if (gameStartTime.value) {
    const duration = Date.now() - gameStartTime.value;
    gameDuration.value = formatDuration(duration);
  }

  // Aller directement à la modale de fin de partie sans écran intermédiaire
  showExplosion.value = false;
};

const formatDuration = (ms) => {
  // Ensure we never have negative time
  const safeDuration = Math.max(0, ms);
  const seconds = Math.floor(safeDuration / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes > 0) {
    return `${minutes}m ${remainingSeconds.toString().padStart(2, "0")}s`;
  }
  return `${remainingSeconds}s`;
};

const adjustCounter = (delta) => {
  const newValue = Math.max(0, counterValue.value + delta); // Minimum à 0

  counterHistory.value.push({
    action: delta > 0 ? `+${delta}` : `${delta}`,
    oldValue: counterValue.value,
    newValue: newValue,
    timestamp: new Date().toLocaleTimeString(),
    type: "counter",
  });
  counterValue.value = newValue;

  // Check for explosion
  if (counterValue.value >= thresholdValue.value) {
    triggerExplosion();
  }
};

const adjustThreshold = (delta) => {
  const newValue = thresholdValue.value + delta;
  if (newValue >= minThreshold.value && newValue <= maxThreshold.value) {
    const oldValue = thresholdValue.value;
    thresholdValue.value = newValue;

    // Enregistrer dans l'historique
    counterHistory.value.push({
      action: delta > 0 ? `Capacité +${delta}` : `Capacité ${delta}`,
      oldValue: oldValue,
      newValue: newValue,
      timestamp: new Date().toLocaleTimeString(),
      type: "threshold",
    });
  }
};

// Handle escape key for modal
const handleEscape = (event) => {
  if (event.key === "Escape") {
    if (showCloseConfirmModal.value) {
      cancelCloseGame();
    } else if (showEndGameModal.value) {
      closeEndGameModal();
    } else if (showPlayerCountModal.value) {
      closePlayerCountModal();
    } else if (showGameModeModal.value) {
      closeGameModeModal();
    } else if (showCounterMode.value) {
      showCloseConfirmModal.value = true; // Show confirmation instead of direct close
    } else if (showCardModal.value) {
      closeCardModal();
    } else if (showEventModal.value) {
      showEventModal.value = false;
    } else if (showGameStartModal.value) {
      closeGameStartModal();
    }
  }
};

// Event management functions
const initializeEventDeck = () => {
  // Get all events except "Minuteur final"
  const normalEvents = events.filter(
    (event) => event.name !== "Minuteur final"
  );
  const finalEvent = events.find((event) => event.name === "Minuteur final");

  // Shuffle normal events and take 9 (to make 10 total with final event)
  const shuffledEvents = [...normalEvents].sort(() => Math.random() - 0.5);
  const selectedNormalEvents = shuffledEvents.slice(0, 9);

  // Create deck with 10 cards total
  const deck = [...selectedNormalEvents];

  // Insert final event at position 7, 8, or 9 (0-indexed) which corresponds to turns 8, 9, or 10
  const finalPositions = [7, 8, 9]; // Positions 8, 9, 10 in 1-indexed terms
  const finalPosition =
    finalPositions[Math.floor(Math.random() * finalPositions.length)];

  // Insert the final event at the chosen position
  deck.splice(finalPosition, 0, finalEvent);

  eventDeck.value = deck;
};

const drawNextEvent = () => {
  if (eventDeck.value.length === 0 || gameOver.value) return;

  turnNumber.value += 1;
  const drawnEvent = eventDeck.value.shift();
  currentEvent.value = drawnEvent;

  // Add timestamp and turn number to the event for history
  const eventWithTimestamp = {
    ...drawnEvent,
    timestamp: new Date().toLocaleTimeString(),
    turn: turnNumber.value,
    type: "event",
  };

  usedEvents.value.push(eventWithTimestamp);
  showEventModal.value = true;
  eventModalPulse.value = true;

  // Check if the final countdown has been revealed
  if (drawnEvent.name === "Minuteur final") {
    finalCountdownRevealed.value = true;
  }

  // Remove pulse effect after 2 seconds
  setTimeout(() => {
    eventModalPulse.value = false;
  }, 2000);
};

const closeEventModal = () => {
  showEventModal.value = false;
};

const endGame = () => {
  // Stop the timer and calculate final duration
  if (gameStartTime.value && !gameOver.value) {
    const now = Date.now();
    const duration = now - gameStartTime.value;
    gameDuration.value = formatDuration(duration);
    gameOver.value = true;
  }
  showEndGameModal.value = true;
};

const closeEndGameModal = () => {
  showEndGameModal.value = false;
};

const startGame = () => {
  showGameStartModal.value = false;
  // Set both times synchronously to ensure they start together
  const now = Date.now();
  gameStartTime.value = now;
  currentTime.value = now;

  // Automatically trigger the first event
  setTimeout(() => {
    drawNextEvent();
  }, 500); // Small delay to ensure modal is closed
};

const closeGameStartModal = () => {
  showGameStartModal.value = false;
  // Don't start timer when just closing the modal
};

const confirmCloseGame = () => {
  showCloseConfirmModal.value = false;
  closeCounterMode();
};

const cancelCloseGame = () => {
  showCloseConfirmModal.value = false;
};

// Game mode selection functions
const openGameModeSelection = () => {
  showGameModeModal.value = true;
  document.body.style.overflow = "hidden";
};
const closeGameModeModal = () => {
  showGameModeModal.value = false;
  document.body.style.overflow = "auto";
};
const selectCompetitiveMode = () => {
  closeGameModeModal();
  showPlayerCountModal.value = true;
  document.body.style.overflow = "hidden";
};

// Player count selection functions
const selectPlayerCount = (count) => {
  playerCount.value = count;
  closePlayerCountModal();
  openCounterMode();

  // Ajouter l'initialisation dans l'historique APRÈS l'ouverture du mode
  counterHistory.value.push({
    action: "Initialisation compteur",
    oldValue: 0,
    newValue: count,
    timestamp: new Date().toLocaleTimeString(),
    type: "init",
    icon: "🎯",
  });
};

const closePlayerCountModal = () => {
  showPlayerCountModal.value = false;
  document.body.style.overflow = "auto";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleEscape);

  // Start timer interval on client side only
  timerInterval = setInterval(() => {
    currentTime.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleEscape);

  // Clean up timer interval
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

// SEO
useHead({
  title: "Boom Badaboom - Règles du Jeu | Jeu de cartes à rôles cachés",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les règles complètes de Boom Badaboom, un jeu de cartes à rôles cachés mêlant bluff, tension et stratégie pour 1-5 joueurs.",
    },
    {
      name: "keywords",
      content:
        "Boom Badaboom, jeu de cartes, rôles cachés, bluff, stratégie, règles du jeu",
    },
    { property: "og:title", content: "Boom Badaboom - Règles du Jeu" },
    {
      property: "og:description",
      content:
        "Jeu de cartes à rôles cachés mêlant bluff, tension et stratégie",
    },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
  ],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "icon", type: "image/png", href: "/logo.png" },
    { rel: "apple-touch-icon", href: "/logo.png" },
    { rel: "shortcut icon", href: "/favicon.ico" },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

@media print {
  .nav,
  .back-to-top {
    display: none !important;
  }

  .content {
    box-shadow: none !important;
    margin: 0 !important;
  }
}
</style>
