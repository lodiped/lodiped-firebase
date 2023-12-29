<script setup lang="ts">
const section = useSection();

function getRandomNumber() {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * numLogo.value.length);
  } while (newIndex === index.value);
  index.value = newIndex;
}

onMounted(() => {
  let options = {
    rootMargin: "-150px 0px -150px 0px",
    threshold: [0.5, 1.0, 1.0, 1.0, 1.0]
  };
  const observer = new IntersectionObserver(handleIntersection, options);
  document.querySelectorAll(".data-card").forEach((section) => {
    observer.observe(section);
  });
  setTimeout(() => {
    setInterval(getRandomNumber, 1300);
  }, 2000);
});

const handleIntersection = (entries:any) => {
  entries.forEach((entry:any) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("card0")) {
        section.value = 0;
      } else if (entry.target.classList.contains("card1")) {
        section.value = 1;
      } else if (entry.target.classList.contains("card2")) {
        section.value = 2;
      } else if (entry.target.classList.contains("card3")) {
        section.value = 3;
      } else {
        section.value = 4;
      }
    }
  });
};

let index = ref(0)
let numLogo = ref([0, 1, 2, 3])
</script>

<template>
  <main class="mx-auto w-full p-4 md:w-[40rem] lg:w-[50rem] lg:p-0 relative">
    <UiLodiped1 v-if="numLogo[index] === 0" class="absolute overflow-hidden translate-x-20 lg:translate-x-1/3 xl:translate-x-1/2 md:-translate-y-14 lg:-translate-y-32 scale-50 fill-accent-foreground/30 dark:fill-accent-foreground/20"/>
    <UiLodiped2 v-if="numLogo[index] === 1" class="absolute overflow-hidden translate-x-20 lg:translate-x-1/3 xl:translate-x-1/2 -translate-y-12 md:-translate-y-32 lg:-translate-y-56 scale-[.4] fill-accent-foreground/30 dark:fill-accent-foreground/20"/>
    <UiLodiped3 v-if="numLogo[index] === 2" class="absolute overflow-hidden translate-x-20 lg:translate-x-1/3 xl:translate-x-1/2 translate-y-8 md:-translate-y-5 lg:-translate-y-16 scale-50 fill-accent-foreground/30 dark:fill-accent-foreground/20"/>
    <UiLodiped4 v-if="numLogo[index] === 3" class="absolute overflow-hidden translate-x-20 lg:translate-x-1/3 xl:translate-x-1/2 translate-y-10 md:-translate-y-0 lg:-translate-y-14 scale-50 fill-accent-foreground/30 dark:fill-accent-foreground/20"/>
    <div class="h-[43rem] md:h-[60rem] flex items-center -translate-y-12 data-card card0">
      <Hero />
    </div>
    <div class="-translate-y-96" id="web"></div>
    <div class="data-card card1"></div>
    <div class="-translate-y-80  rounded mb-32 mt-64">
      <Web />
    </div>
    <div class="-translate-y-96" id="3d"></div>
    <div class="data-card card2"></div>
    <div class="-translate-y-80 border rounded mb-32 mt-64">
      <Model />
    </div> 
    <div class="-translate-y-96" id="design"></div>
    <div class="data-card card3"></div>
    <div class="-translate-y-80 border rounded mb-32 mt-64">
      <Design />
    </div>
    <div class="-translate-y-96" id="photography"></div>
    <div class="data-card card4"></div>
    <div class="-translate-y-80 border rounded mb-32 mt-64">
      <Photography />
    </div>
  </main>
  <footer class="mx-auto w-full p-4 md:p-0 md:w-[50rem] text-sm text-center -translate-y-32">
    <span class="opacity-30">{{ $t("main.footer") }}</span><a class="hover:opacity-100" href="https://nuxt.com/"
      target="_blank"><span class="opacity-30 hover:opacity-100">
        <UiNuxt class="inline -translate-y-[0.1rem] pr-[0.15rem]" />Nuxt
      </span></a>
  </footer>
</template>
