import { _ as _sfc_main$6, a as _sfc_main$5, t as tv } from './Button-C5RHR-UA.mjs';
import { _ as _sfc_main$2 } from './PageHeader-DHvPt5JG.mjs';
import { _ as _sfc_main$3 } from './Marquee-SA1hQwDW.mjs';
import { _ as _sfc_main$4 } from './PageCard-CHXe1NTY.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, createTextVNode, watch, mergeProps, createCommentVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import useEmblaCarousel from 'embla-carousel-vue';
import { useForwardProps, Primitive } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { u as useLocale } from './useLocale-DUhtQrZS.mjs';
import { b as useSeoMeta, a as useAppConfig } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'tailwind-variants';
import './index-u2G7qdl6.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './nuxt-link-D3Rj4bLi.mjs';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const theme = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-accented rounded-full",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "data-[state=active]:bg-inverted"
      }
    }
  }
};
const _sfc_main$1 = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    prev: { type: Object, required: false },
    prevIcon: { type: null, required: false },
    next: { type: Object, required: false },
    nextIcon: { type: null, required: false },
    arrows: { type: Boolean, required: false, default: false },
    dots: { type: Boolean, required: false, default: false },
    orientation: { type: null, required: false, default: "horizontal" },
    items: { type: Array, required: false },
    autoplay: { type: [Boolean, Object], required: false, default: false },
    autoScroll: { type: [Boolean, Object], required: false, default: false },
    autoHeight: { type: [Boolean, Object], required: false, default: false },
    classNames: { type: [Boolean, Object], required: false, default: false },
    fade: { type: [Boolean, Object], required: false, default: false },
    wheelGestures: { type: [Boolean, Object], required: false, default: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    align: { type: [String, Function], required: false, default: "center" },
    containScroll: { type: [Boolean, String], required: false, default: "trimSnaps" },
    slidesToScroll: { type: [String, Number], required: false, default: 1 },
    dragFree: { type: Boolean, required: false, default: false },
    dragThreshold: { type: Number, required: false, default: 10 },
    inViewThreshold: { type: null, required: false, default: 0 },
    loop: { type: Boolean, required: false, default: false },
    skipSnaps: { type: Boolean, required: false, default: false },
    duration: { type: Number, required: false, default: 25 },
    startIndex: { type: Number, required: false, default: 0 },
    watchDrag: { type: [Boolean, Function], required: false, default: true },
    watchResize: { type: [Boolean, Function], required: false, default: true },
    watchSlides: { type: [Boolean, Function], required: false, default: true },
    watchFocus: { type: [Boolean, Function], required: false, default: true },
    active: { type: Boolean, required: false, default: true },
    breakpoints: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const ui = computed(() => {
      var _a;
      return tv({ extend: tv(theme), ...((_a = appConfig.ui) == null ? void 0 : _a.carousel) || {} })({
        orientation: props.orientation
      });
    });
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [props.autoplay, props.autoScroll, props.autoHeight, props.classNames, props.fade, props.wheelGestures], async () => {
      var _a;
      await loadPlugins();
      (_a = emblaApi.value) == null ? void 0 : _a.reInit(options.value, plugins.value);
    }, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    watch(options, () => {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    function scrollTo(index) {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollTo(index);
    }
    function onKeyDown(event) {
      let prevKey;
      let nextKey;
      if (props.orientation === "horizontal") {
        prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
        nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
      } else {
        prevKey = "ArrowUp";
        nextKey = "ArrowDown";
      }
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "region",
        "aria-roledescription": "carousel",
        "data-orientation": __props.orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = props.ui) == null ? void 0 : _a.root, props.class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: (_a2 = props.ui) == null ? void 0 : _a2.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              var _a3, _b2;
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                "data-slot": "item",
                class: ui.value.item({ class: [(_a3 = props.ui) == null ? void 0 : _a3.item, isCarouselItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.item), isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.arrows || __props.dots) {
              _push2(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: (_c = props.ui) == null ? void 0 : _c.controls }))}"${_scopeId}>`);
              if (__props.arrows) {
                _push2(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: (_d = props.ui) == null ? void 0 : _d.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$5, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof __props.prev === "object" ? __props.prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: (_e = props.ui) == null ? void 0 : _e.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$5, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof __props.next === "object" ? __props.next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: (_f = props.ui) == null ? void 0 : _f.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: (_g = props.ui) == null ? void 0 : _g.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  var _a3;
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({ class: (_a3 = props.ui) == null ? void 0 : _a3.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                "data-slot": "viewport",
                class: ui.value.viewport({ class: (_h = props.ui) == null ? void 0 : _h.viewport })
              }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    var _a3, _b2;
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      "data-slot": "item",
                      class: ui.value.item({ class: [(_a3 = props.ui) == null ? void 0 : _a3.item, isCarouselItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.item), isCarouselItem(item) && item.class] })
                    }), [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 16);
                  }), 128))
                ], 2)
              ], 2),
              __props.arrows || __props.dots ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "controls",
                class: ui.value.controls({ class: (_j = props.ui) == null ? void 0 : _j.controls })
              }, [
                __props.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "arrows",
                  class: ui.value.arrows({ class: (_k = props.ui) == null ? void 0 : _k.arrows })
                }, [
                  createVNode(_sfc_main$5, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof __props.prev === "object" ? __props.prev : void 0, {
                    "data-slot": "prev",
                    class: ui.value.prev({ class: (_l = props.ui) == null ? void 0 : _l.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$5, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof __props.next === "object" ? __props.next : void 0, {
                    "data-slot": "next",
                    class: ui.value.next({ class: (_m = props.ui) == null ? void 0 : _m.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                __props.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  "data-slot": "dots",
                  class: ui.value.dots({ class: (_n = props.ui) == null ? void 0 : _n.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    var _a3;
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      "data-slot": "dot",
                      class: ui.value.dot({ class: (_a3 = props.ui) == null ? void 0 : _a3.dot, active: selectedIndex.value === index }),
                      "data-state": selectedIndex.value === index ? "active" : void 0,
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "aria-selected", "data-state", "onClick"]);
                  }), 128))
                ], 10, ["aria-label"])) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        name: "Sharmed Books",
        image: "",
        quote: "\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043A\u043D\u0438\u0436\u043A\u0438 \u0434\u043B\u044F \u0434\u0435\u0442\u0435\u0439",
        stack: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
        slug: "charmed-books",
        format: "png",
        images: [1, 2, 3]
      },
      {
        name: "DCLI",
        image: "",
        quote: "\u0426\u0435\u043D\u0442\u0440 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439",
        format: "jpg",
        slug: "dcli",
        images: [1, 2, 3, 4],
        stack: ["Vue.js", "Nuxt.js", "Tailwind CSS"]
      },
      {
        name: "Kit Tracker",
        image: "",
        quote: "\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043A\u0440\u043E\u0432\u0438 \u0438 \u0434\u0440",
        format: "jpg",
        slug: "kit",
        images: [1, 2, 3],
        stack: ["Vue.js", "Nuxt.js", "Tailwind CSS"]
      },
      {
        name: "Raimbek",
        image: "",
        quote: "\u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u0430\u0437\u0430\u0445\u0441\u043A\u0438\u0439 \u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0437\u0430\u0432\u043E\u0434",
        stack: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
        slug: "raimbek",
        format: "jpg",
        images: [1, 2]
      },
      {
        name: "Portal",
        image: "",
        quote: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043A\u043D\u0438\u0433 \u043F\u043E \u0438\u0437\u043E\u0442\u0435\u0440\u0438\u043A\u0435",
        slug: "portal",
        format: "png",
        images: [1, 2],
        stack: ["Vue.js", "Nuxt.js", "Tailwind CSS"]
      },
      {
        name: "IdoArt",
        image: "",
        quote: "\u041F\u043E\u0440\u0442\u0430\u043B \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u043A\u0443\u0440\u0441\u043E\u0432 \u0438 \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432",
        slug: "idoArt",
        format: "png",
        images: [1, 2, 3],
        stack: ["Vue.js", "Nuxt.js", "Tailwind CSS"]
      },
      {
        name: "\u0420\u0443\u0441\u0445\u0438\u043C\u0430\u043B\u044C\u044F\u043D\u0441",
        image: "",
        quote: "\u0413\u0430\u0437\u043E\u043F\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0437\u0430\u0432\u043E\u0434",
        slug: "rca",
        format: "png",
        images: [1, 2],
        stack: ["Vue.js", "Nuxt.js", "Tailwind CSS"]
      }
    ];
    const currentProjectSlug = ref("charmed-books");
    const selectedProject = ref(projects[0]);
    const images = computed(() => {
      var _a, _b;
      selectedProject.value = projects.find((i) => i.slug === currentProjectSlug.value);
      return ((_b = (_a = selectedProject.value) == null ? void 0 : _a.images) == null ? void 0 : _b.map(
        (i) => {
          var _a2;
          return `/images/projects/${currentProjectSlug.value}/${i}.${(_a2 = selectedProject.value) == null ? void 0 : _a2.format}`;
        }
      )) || [];
    });
    useSeoMeta({
      title: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B - \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C",
      ogTitle: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B - \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C",
      description: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C, Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
      ogDescription: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u0415\u0432\u0447\u0435\u043D\u043A\u043E \u041C\u0430\u043A\u0441\u0438\u043C, Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$6;
      const _component_UPageHeader = _sfc_main$2;
      const _component_UMarquee = _sfc_main$3;
      const _component_UPageCard = _sfc_main$4;
      const _component_UCarousel = _sfc_main$1;
      const _component_UButton = _sfc_main$5;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, { title: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UMarquee, {
              "pause-on-hover": "",
              reverse: "",
              overlay: false,
              ui: { root: "[--gap:--spacing(4)] my-5", content: "w-auto py-1" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(projects, (project, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      description: project.quote,
                      ui: {
                        description: "line-clamp-3"
                      },
                      class: "w-64 shrink-0 cursor-pointer",
                      onClick: ($event) => currentProjectSlug.value = project.slug
                    }, {
                      header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="text-[14px] font-semibold"${_scopeId3}>${ssrInterpolate(project.name)}</h3>`);
                        } else {
                          return [
                            createVNode("h3", { class: "text-[14px] font-semibold" }, toDisplayString(project.name), 1)
                          ];
                        }
                      }),
                      footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-[12px]"${_scopeId3}>${ssrInterpolate(project.stack.join(", "))}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-[12px]" }, toDisplayString(project.stack.join(", ")), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(projects, (project, index) => {
                      return createVNode(_component_UPageCard, {
                        key: index,
                        description: project.quote,
                        ui: {
                          description: "line-clamp-3"
                        },
                        class: "w-64 shrink-0 cursor-pointer",
                        onClick: ($event) => currentProjectSlug.value = project.slug
                      }, {
                        header: withCtx(() => [
                          createVNode("h3", { class: "text-[14px] font-semibold" }, toDisplayString(project.name), 1)
                        ]),
                        footer: withCtx(() => [
                          createVNode("p", { class: "text-[12px]" }, toDisplayString(project.stack.join(", ")), 1)
                        ]),
                        _: 2
                      }, 1032, ["description", "onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="w-full bg-neutral-100 px-4 py-2 my-5"${_scopeId}>${ssrInterpolate((_a = unref(selectedProject)) == null ? void 0 : _a.name)} - ${ssrInterpolate((_b = unref(selectedProject)) == null ? void 0 : _b.quote)}</div>`);
            _push2(ssrRenderComponent(_component_UCarousel, {
              "class-names": "",
              arrows: "",
              items: unref(images),
              class: "mx-auto w-full mb-5"
            }, {
              default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("alt", unref(currentProjectSlug))}${ssrRenderAttr("src", item)} class="rounded-lg max-h-[620px] mx-auto object-cover"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: unref(currentProjectSlug),
                      src: item,
                      class: "rounded-lg max-h-[620px] mx-auto object-cover"
                    }, null, 8, ["alt", "src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="actions flex flex-row justify-between items-center w-full mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-arrow-left",
              to: "/skills",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u041D\u0430\u0432\u044B\u043A\u0438`);
                } else {
                  return [
                    createTextVNode("\u041D\u0430\u0432\u044B\u043A\u0438")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u041F\u0440\u043E\u0435\u043A\u0442\u044B</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              "trailing-icon": "i-lucide-arrow-right",
              to: "/about",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F`);
                } else {
                  return [
                    createTextVNode("\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UPageHeader, { title: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432" }),
              createVNode(_component_UMarquee, {
                "pause-on-hover": "",
                reverse: "",
                overlay: false,
                ui: { root: "[--gap:--spacing(4)] my-5", content: "w-auto py-1" }
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(projects, (project, index) => {
                    return createVNode(_component_UPageCard, {
                      key: index,
                      description: project.quote,
                      ui: {
                        description: "line-clamp-3"
                      },
                      class: "w-64 shrink-0 cursor-pointer",
                      onClick: ($event) => currentProjectSlug.value = project.slug
                    }, {
                      header: withCtx(() => [
                        createVNode("h3", { class: "text-[14px] font-semibold" }, toDisplayString(project.name), 1)
                      ]),
                      footer: withCtx(() => [
                        createVNode("p", { class: "text-[12px]" }, toDisplayString(project.stack.join(", ")), 1)
                      ]),
                      _: 2
                    }, 1032, ["description", "onClick"]);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode("div", { class: "w-full bg-neutral-100 px-4 py-2 my-5" }, toDisplayString((_c = unref(selectedProject)) == null ? void 0 : _c.name) + " - " + toDisplayString((_d = unref(selectedProject)) == null ? void 0 : _d.quote), 1),
              createVNode(_component_UCarousel, {
                "class-names": "",
                arrows: "",
                items: unref(images),
                class: "mx-auto w-full mb-5"
              }, {
                default: withCtx(({ item }) => [
                  createVNode("img", {
                    alt: unref(currentProjectSlug),
                    src: item,
                    class: "rounded-lg max-h-[620px] mx-auto object-cover"
                  }, null, 8, ["alt", "src"])
                ]),
                _: 1
              }, 8, ["items"]),
              createVNode("div", { class: "actions flex flex-row justify-between items-center w-full mb-10" }, [
                createVNode(_component_UButton, {
                  icon: "i-lucide-arrow-left",
                  to: "/skills",
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u041D\u0430\u0432\u044B\u043A\u0438")
                  ]),
                  _: 1
                }),
                createVNode("p", null, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"),
                createVNode(_component_UButton, {
                  "trailing-icon": "i-lucide-arrow-right",
                  to: "/about",
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-DtHj3K_Z.mjs.map
