<template>
  <nav :class="['sticky top-0 z-50 bg-white shadow-lg']">
    <div class="container mx-auto px-2 sm:px-4 md:px-6">
      <div class="flex justify-between items-center py-3 md:py-4">
        <!-- Desktop menu -->
        <div class="hidden md:flex justify-center flex-1">
          <div class="flex flex-wrap justify-center gap-2 lg:gap-4 xl:gap-6">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              class="px-2 py-2 text-sm lg:text-base lg:px-3 xl:px-4 font-medium text-gray-700 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-300 whitespace-nowrap"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden relative w-6 h-6 flex flex-col justify-center items-center focus:outline-none"
        >
          <span
            :class="{
              'rotate-45 translate-y-1': isMobileMenuOpen,
              'rotate-0 translate-y-0': !isMobileMenuOpen,
            }"
            class="block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-out"
          ></span>
          <span
            :class="{
              'opacity-0': isMobileMenuOpen,
              'opacity-100': !isMobileMenuOpen,
            }"
            class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-out"
          ></span>
          <span
            :class="{
              '-rotate-45 -translate-y-1': isMobileMenuOpen,
              'rotate-0 translate-y-0': !isMobileMenuOpen,
            }"
            class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-out"
          ></span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        :class="{
          'max-h-screen opacity-100': isMobileMenuOpen,
          'max-h-0 opacity-0': !isMobileMenuOpen,
        }"
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white"
      >
        <div class="py-2 space-y-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            @click="closeMobileMenu"
            class="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { navLinks, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigation();
</script>
