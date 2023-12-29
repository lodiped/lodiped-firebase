<template>
  <section class="p-5 flex gap-4 flex-col">
    <div class="grid grid-cols-3 auto-rows-fr gap-2 h-60">
      <div
        class="bg-accent-foreground dark:bg-accent-foreground/40 row-span-3 flex flex-col items-center justify-center relative"
      >
        <UiNuxt class="md:text-6xl text-4xl mb-2 drop-shadow-lg" />
        <div class="text-background dark:text-foreground">Nuxt</div>
      </div>
      <div
        class="bg-accent-foreground/70 dark:bg-accent-foreground/20 row-span-2 relative flex flex-col items-center justify-center"
      >
        <UiSvelte class="text-5xl md:text-6xl mb-2 drop-shadow-lg" />
        <div class="text-background dark:text-foreground">Svelte</div>
      </div>
      <div
        class="bg-accent-foreground/70 dark:bg-accent-foreground/20 row-span-2 flex flex-col items-center justify-center relative"
      >
        <UiReact class="text-5xl md:text-6xl mb-2 drop-shadow-lg" />
        <div class="text-background dark:text-foreground">React</div>
      </div>
      <div class="flex gap-2 col-span-2">
        <div
          class="bg-accent-foreground/70 dark:bg-accent-foreground/10 w-full flex flex-col items-center justify-center relative"
        >
          <UiJavascript class="text-4xl drop-shadow" />
        </div>
        <div
          class="bg-accent-foreground/40 dark:bg-accent-foreground/10 row-span-2 flex flex-col items-center justify-center w-full relative"
        >
          <UiTypescript class="text-4xl drop-shadow" />
        </div>
        <div
          class="bg-accent-foreground/25 dark:bg-accent-foreground/10 row-span-2 flex flex-col items-center justify-center w-full relative"
        >
          <UiTailwind class="text-4xl drop-shadow" />
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-2xl pb-4">{{ $t("web.title") }}</h2>
      <p class="mb-4">{{ $t("web.description-main") }}</p>
      <p>{{ $t("web.description-second") }}</p>
    </div>
  </section>
</template>
