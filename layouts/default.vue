<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const section = useSection();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.coded !== locale.value);
});

const scrollTop = () => {
  window.scrollTo(0, 0);
  const currentURL = window.location.href;
  const updatedURL = currentURL.split('#')[0];
  window.history.replaceState({}, document.title, updatedURL)
};
</script>

<template>
  <aside
    class="p-5 lg:h-screen h-fit z-50 gap-3 lg:w-fit w-full flex lg:flex-col justify-center fixed"
  >
    <a @click="scrollTop" class="cursor-pointer">
      <p
        class="hidden xl:block hover:language-bracket"
        :class="section === 0 ? 'uppercase language-bracket' : ''"
      >
        {{ $t("aside.home") }}
      </p>
      <UiHero class="xl:hidden scale-[.66]" />
    </a>
    <a href="#web" id="firstAnchor" class="">
      <p
        class="hidden xl:block hover:language-bracket"
        :class="section === 1 ? 'uppercase language-bracket' : ''"
      >
        {{ $t("aside.web") }}
      </p>
      <UiWeb class="xl:hidden scale-[.66]" />
    </a>
    <a href="#3d" id="secondAnchor" class="anchors">
      <p
        class="hidden xl:block hover:language-bracket"
        :class="section === 2 ? 'uppercase language-bracket' : ''"
      >
        {{ $t("aside.model") }}
      </p>
      <UiModel class="xl:hidden scale-[.66]" />
    </a>
    <a href="#design" id="thirdAnchor" class="anchors">
      <p
        class="hidden xl:block hover:language-bracket"
        :class="section === 3 ? 'uppercase language-bracket' : ''"
      >
        {{ $t("aside.gd") }}
      </p>
      <UiDesign class="xl:hidden scale-[.66]" />
    </a>
    <a href="#photography" id="fourthAnchor" class="anchors">
      <p
        class="hidden xl:block hover:language-bracket"
        :class="section === 4 ? 'uppercase language-bracket' : ''"
      >
        {{ $t("aside.photo") }}
      </p>
      <UiPhotography class="xl:hidden scale-[.66]" />
    </a>
    <div class="m-2"></div>
    <div class="flex lg:flex-col items-center lg:items-start gap-4">
      <a
        href="#"
        v-for="locale in availableLocales"
        :key="locale.code"
        @click.prevent.stop="setLocale(locale.code)"
        :class="
          $i18n.getLocaleCookie() === locale.code
            ? 'language-bracket uppercase'
            : 'md:hover:language-bracket'
        "
        class="flex"
        ><span class="hidden xl:block">{{ locale.name }}</span
        ><span class="xl:hidden">{{ locale.code }}</span></a
      >
    </div>
  </aside>
  <slot />
</template>
