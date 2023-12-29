<script setup lang="ts">
const hello = ref([
  "Hello",
  "Bonjour",
  "Hallo",
  "你好",
  "Привет",
  "Oi",
  "Hola",
  "Xin chào",
  "Γειά σου",
  "Nnọọ",
  "नमस्ते",
  "สวัสดี",
  "سلام",
  "ሀሎ",
  "Slav",
  "안녕하세요",
  "Dia dhuit",
  "こんにちは",
  "ສະບາຍດີ",
  "سڵاو",
  "வணக்கம்",
  "مرحبًا",
]);
const currentHello = ref("Olá");
let negativeArray:any;

function getRandomNumber(helloArray:any) {
  let initIndex:number;
  let originalArray = toRaw(helloArray)
  if (typeof negativeArray === 'undefined') {
    initIndex = Math.floor(Math.random() * originalArray.length);
    currentHello.value = originalArray[initIndex];
    negativeArray = originalArray.toSpliced(initIndex, 1)
  } else {
    initIndex = Math.floor(Math.random() * negativeArray.length)
    currentHello.value = negativeArray[initIndex]
    negativeArray = negativeArray.toSpliced(initIndex, 1)
    if (negativeArray.length === 1) {
      negativeArray = originalArray
    }
  }

}
onMounted(() => {
  setTimeout(() => {
    setInterval(getRandomNumber, 1300, hello.value);
  }, 2000);
});
</script>

<style>
[v-cloak] {
  display: none;
}
</style>

<template>
  <section>
    <div id="title" v-cloak class="">
      <header
        class="md:text-7xl lg:text-8xl text-4xl font-bold tracking-tighter mb-8 md:mb-10 leading-tight lg:leading-tight"
      >
        <h1 class="w-fit relative">
          <div
            class="w-full h-full z-[-1] bg-accent-foreground/50 dark:bg-primary absolute blur-xl md:blur-2xl animate-pulse"
          ></div>
          {{ currentHello }},
        </h1>
        <span>{{ $t("main.hero") }}&nbsp;</span>
        <span
          class="before:content-[''] before:w-0 whitespace-nowrap before:bottom-0 before:absolute relative before:bg-accent-foreground before:h-2 md:before:h-5 before:animate-underline-name"
          >{{ $t("main.pedro") }}</span
        >
        <span>.</span>
      </header>
      <p class="text-xl md:text-4xl leading-normal">
        {{ $t("main.subhero1") }}
        <span
          class="before:absolute whitespace-nowrap relative before:content-[''] before:w-0 before:bottom-1 before:h-5/6 before:animate-underline-subtitle dark:animate-underline-text before:z-[-1] before:bg-accent-foreground"
          >{{ $t("main.design") }}</span
        >
        <span class="leading-normal">{{ $t("main.subhero2") }}</span
        ><span
          class="before:absolute whitespace-nowrap relative before:content-[''] before:w-0 before:bottom-1 before:h-5/6 before:animate-underline-subtitle dark:animate-underline-text before:z-[-1] before:bg-accent-foreground"
          >{{ $t("main.model") }}</span
        ><span class="leading-normal">{{ $t("main.subhero3") }}</span
        ><span
          class="before:absolute leading-normal whitespace-nowrap relative before:content-[''] before:w-0 before:bottom-1 before:h-5/6 before:animate-underline-subtitle dark:animate-underline-text before:z-[-1] before:bg-accent-foreground"
          >{{ $t("main.web") }}</span
        ><span class="animate-bounce">{{ $t("main.dot") }}</span>
      </p>
    </div>
    <div id="langScroll" class="hidden">{{ $t("main.scroll") }}</div>
  </section>
</template>
