<template>
  <div class="w-full h-screen flex flex-row divide-x rounded-sm">
    <div
      class="w-full h-full px-4 py-2 md:p-4 space-y-4 bg-colorSurfaceLight dark:bg-colorSurfaceDark"
    >
      <!--Main header-->
      <header
        class="sticky top-0 bg-inherit py-2 w-full flex items-center justify-between"
      >
        <!--City name-->
        <div class="flex items-center">
          <h4 class="text-lg">Lusaka</h4>
        </div>
        <!--City date-->
        <div class="flex items-center">
          <h4 class="text-lg">Jan 13th, 2024</h4>
        </div>
      </header>
      <!-- Main Weather content-->
      <div class="h-full mx-auto flex flex-col items-center justify-center">
        <h1 id="main-temp" class="text-[200px] -m-4">20°</h1>
        <h3 id="main-temp-condition" class="text-2xl">Cloudy</h3>
      </div>
    </div>
    <div class="w-80 h-full px-4 py-2 md:p-4 space-y-4">
      <!-- sidebar header-->
      <div id="sidebar-header" class="flex flex-col text-center space-y-4">
        <div
          id="sidebar-action"
          class="sticky top-0 py-2 bg-inherit w-full flex justify-between"
        >
          <button class="sidebar-action">
            <Icon name="ic:search" size="20" />
          </button>
          <button class="sidebar-action">
            <Icon name="ic:outline-gps-fixed" size="20" />
          </button>
        </div>
        <h3 id="greetings" class="text-2xl font-bold">Good Afternoon</h3>
        <h4 id="local-time">12:50 PM</h4>
        <div
          id="sidebar-forcast"
          class="flex flex-col text-center space-y-2 md:space-y-4"
        >
          <h4 class="text-base">Hourly Forcast</h4>
          <div class="grid gap-4 grid-cols-3">
            <div
              v-for="n in 6"
              class="w-full min-h-20 flex flex-col space-y-2 p-2 rounded-md border-2"
            >
              <span id="temp-time" class="text-sm opacity-60">1 PM</span>
              <span id="temp" class="text-lg text-nowrap">20° </span>
              <span id="temp-condition" class="text-sm opacity-60">Cloudy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.sidebar-action {
  @apply flex items-center p-2 cursor-pointer shadow-sm duration-300 transition-colors hover:bg-opacity-80 rounded-full bg-colorSurfaceLight dark:bg-colorSurfaceDark;
}
</style>
