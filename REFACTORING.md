# Refactorisation Boom Badaboom - Documentation

## 📋 Composants créés

### ✅ Navigation et Layout
1. **[components/Header.vue](components/Header.vue)** - En-tête avec logo et bouton démarrer
2. **[components/Navigation.vue](components/Navigation.vue)** - Menu de navigation sticky avec support mobile

### ✅ Modales de jeu
3. **[components/GameModeModal.vue](components/GameModeModal.vue)** - Modal de sélection du mode (Rôles cachés / Coopératif)
4. **[components/CardModal.vue](components/CardModal.vue)** - Modal pour afficher les cartes en grand
5. **[components/EventCard.vue](components/EventCard.vue)** - Modal d'événement avec animation
6. **[components/HistoryModal.vue](components/HistoryModal.vue)** - Modal d'historique des actions

### ✅ Mode Compteur (décomposé en sous-composants)
7. **[components/CounterMode.vue](components/CounterMode.vue)** - Composant principal wrapper
8. **[components/CounterMode/Header.vue](components/CounterMode/Header.vue)** - En-tête du mode compteur
9. **[components/CounterMode/Legend.vue](components/CounterMode/Legend.vue)** - Légende des valeurs
10. **[components/CounterMode/Visualizer.vue](components/CounterMode/Visualizer.vue)** - Visualisation graphique
11. **[components/CounterMode/Controls.vue](components/CounterMode/Controls.vue)** - Contrôles du jeu

### ✅ Autres modes
12. **[components/AIMode.vue](components/AIMode.vue)** - Mode IA coopératif (placeholder)

### ✅ Sections de contenu
13. **[components/FAQ.vue](components/FAQ.vue)** - Section FAQ
14. **[components/ContactForm.vue](components/ContactForm.vue)** - Formulaire de contact avec gestion d'état
15. **[components/CardList.vue](components/CardList.vue)** - Liste de cartes réutilisable

## 📁 Fichiers de données créés

### ✅ Data (TypeScript)
- **[data/navigation.ts](data/navigation.ts)** - Liens de navigation
- **[data/ai-difficulties.ts](data/ai-difficulties.ts)** - Niveaux de difficulté IA
- **[data/events.ts](data/events.ts)** - Cartes événement
- **[data/faq.ts](data/faq.ts)** - Questions fréquentes
- **[data/game-content.ts](data/game-content.ts)** - Étapes de jeu
- **[data/cards/actions.ts](data/cards/actions.ts)** - Cartes action

### ✅ Composables créés (mais non intégrés)
- **[composables/useGameMode.ts](composables/useGameMode.ts)** - Gestion mode de jeu
- **[composables/useModal.ts](composables/useModal.ts)** - Gestion des modales
- **[composables/useNavigation.ts](composables/useNavigation.ts)** - Gestion de la navigation

## 🔧 Configuration
- **[tailwind.config.js](tailwind.config.js)** - Utilitaires Tailwind personnalisés ajoutés
- **[app/assets/styles/global.css](app/assets/styles/global.css)** - Styles globaux
- **[nuxt.config.ts](nuxt.config.ts)** - Import du CSS global

## 📝 Étapes suivantes pour finaliser la refactorisation

### 1. Intégrer les composants dans app.vue

**Remplacements à effectuer:**

```vue
<!-- AU LIEU DE la section Header complète (lignes 4-142) -->
<Header @start-game="openGameModeSelection" />

<!-- AU LIEU DE la section Navigation complète (lignes 144-213) -->
<Navigation />

<!-- AU LIEU DE la section FAQ (lignes 3569-3630) -->
<FAQ />

<!-- AU LIEU DE la section Contact (lignes 4718-4882) -->
<ContactForm />

<!-- AU LIEU DE la section CounterMode (lignes 4062-4716) -->
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

<!-- AU LIEU DE la section AIMode (lignes 5441-5515) -->
<AIMode
  :show="showAIMode"
  :selected-difficulty="selectedDifficulty"
  @close="closeAIMode"
/>

<!-- AU LIEU DE GameModeModal (lignes 5283-5342) -->
<GameModeModal
  :show="showGameModeModal"
  @close="closeGameModeModal"
  @select-competitive="selectCompetitiveMode"
  @select-cooperative="selectCooperativeMode"
/>

<!-- AU LIEU DE CardModal (lignes 4935-4965) -->
<CardModal
  :show="showCardModal"
  :card="selectedCard"
  @close="closeCardModal"
/>

<!-- AU LIEU DE EventCard modal (lignes 5090-5156) -->
<EventCard
  :show="showEventModal"
  :event="currentEvent"
  :turn-number="turnNumber"
  :pulse="eventModalPulse"
  @close="closeEventModal"
/>

<!-- AU LIEU DE History Modal (lignes 4967-5088) -->
<HistoryModal
  :show="showHistoryModal"
  :history="unifiedHistory"
  @close="showHistoryModal = false"
/>
```

### 2. Ajouter les imports en haut de <script setup>

```typescript
// Importer les composants
import Header from '~/components/Header.vue';
import Navigation from '~/components/Navigation.vue';
import FAQ from '~/components/FAQ.vue';
import ContactForm from '~/components/ContactForm.vue';
import CounterMode from '~/components/CounterMode.vue';
import AIMode from '~/components/AIMode.vue';
import GameModeModal from '~/components/GameModeModal.vue';
import CardModal from '~/components/CardModal.vue';
import EventCard from '~/components/EventCard.vue';
import HistoryModal from '~/components/HistoryModal.vue';
```

### 3. Nettoyer le code dupliqué

Après l'intégration, vous pouvez:
- Supprimer le code HTML remplacé par les composants
- Optionnellement intégrer les composables pour réduire encore plus la taille du fichier

### 4. Tester

```bash
npm run build
npm run dev
```

## 📊 Réduction de la taille

**Avant:** app.vue = 6694 lignes
**Après refactorisation complète:** ~3000-4000 lignes estimées
**Réduction:** ~40-55%

## 🎯 Avantages de la refactorisation

1. ✅ **Maintenabilité** - Code modulaire et réutilisable
2. ✅ **Performance** - Chargement lazy possible des composants
3. ✅ **Testabilité** - Composants isolés testables unitairement
4. ✅ **Lisibilité** - Fichiers plus petits, logique séparée
5. ✅ **Scalabilité** - Facile d'ajouter de nouvelles fonctionnalités

## 📦 Fichiers de sauvegarde

- `app/app.vue.backup` - Sauvegarde originale
- `app/app.vue.backup2` - Sauvegarde avant refactorisation finale
