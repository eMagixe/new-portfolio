import { _ as _sfc_main$2 } from './Container-DctvYi3A.mjs';
import { _ as _sfc_main$2$1 } from './index-C_48-1_Y.mjs';
import { _ as _sfc_main$3 } from './PageCard-D8xAQhXv.mjs';
import { a as _sfc_main$4, t as tv } from './Tooltip-B4LAymKA.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useId, watch, renderSlot, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import useEmblaCarousel from 'embla-carousel-vue';
import { useForwardProps, Primitive } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { u as useLocale, _ as _sfc_main$6 } from './Button-DDZVeAG-.mjs';
import { b as useI18n, a as useAppConfig } from './server.mjs';
import { _ as _sfc_main$5 } from './Modal-Rap96-X_.mjs';
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
import 'ipx';
import './index-BDxtzh9K.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './nuxt-link-BiOVwRpD.mjs';
import 'tailwind-variants';

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
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.carousel || {} })({
      orientation: props.orientation
    }));
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
      await loadPlugins();
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    watch(options, () => {
      emblaApi.value?.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }
    function scrollTo(index) {
      emblaApi.value?.scrollTo(index);
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
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "region",
        "aria-roledescription": "carousel",
        "data-orientation": __props.orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.arrows || __props.dots) {
              _push2(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: props.ui?.controls }))}"${_scopeId}>`);
              if (__props.arrows) {
                _push2(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: props.ui?.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$6, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof __props.prev === "object" ? __props.prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: props.ui?.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$6, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof __props.next === "object" ? __props.next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: props.ui?.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: props.ui?.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
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
                class: ui.value.viewport({ class: props.ui?.viewport })
              }, [
                createVNode("div", {
                  "data-slot": "container",
                  class: ui.value.container({ class: props.ui?.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, __props.dots ? { role: "tabpanel" } : { "role": "group", "aria-roledescription": "slide" }, {
                      "data-slot": "item",
                      class: ui.value.item({ class: [props.ui?.item, isCarouselItem(item) && item.ui?.item, isCarouselItem(item) && item.class] })
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
                class: ui.value.controls({ class: props.ui?.controls })
              }, [
                __props.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "arrows",
                  class: ui.value.arrows({ class: props.ui?.arrows })
                }, [
                  createVNode(_sfc_main$6, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof __props.prev === "object" ? __props.prev : void 0, {
                    "data-slot": "prev",
                    class: ui.value.prev({ class: props.ui?.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(_sfc_main$6, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof __props.next === "object" ? __props.next : void 0, {
                    "data-slot": "next",
                    class: ui.value.next({ class: props.ui?.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                __props.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  role: "tablist",
                  "aria-label": unref(t)("carousel.dots"),
                  "data-slot": "dots",
                  class: ui.value.dots({ class: props.ui?.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    return openBlock(), createBlock("button", {
                      key: index,
                      type: "button",
                      role: "tab",
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      "aria-selected": selectedIndex.value === index,
                      "data-slot": "dot",
                      class: ui.value.dot({ class: props.ui?.dot, active: selectedIndex.value === index }),
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
    const { locale, t } = useI18n();
    const currentProjectSlug = ref("charmed-books");
    const selectedProject = ref();
    const projects2 = computed(() => {
      return locale.value === "ru" ? useAppConfig().ru.projects : useAppConfig().en.projects;
    });
    selectedProject.value = projects2.value[0];
    const makeImageUrl = (project, numberImage) => {
      return `/images/projects/${project.slug}/${numberImage}.${project?.format}`;
    };
    const findProjectBySlug = (items, slug) => {
      return items.value?.find((i) => i.slug === slug.value);
    };
    const getImagesProject = (project) => {
      return project.value?.images?.map((numberImage) => {
        return makeImageUrl(project.value, numberImage);
      });
    };
    const getImages = (project, allProjects, slug) => {
      if (allProjects.value.length > 0) {
        project.value = findProjectBySlug(allProjects, slug);
        return getImagesProject(project);
      } else {
        return [];
      }
    };
    const images = computed(() => getImages(selectedProject, projects2, currentProjectSlug));
    const fullscreen = ref(false);
    const currentImageUrl = ref("");
    const selectImage = (item) => {
      currentImageUrl.value = item;
      fullscreen.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$2;
      const _component_UMarquee = _sfc_main$2$1;
      const _component_UPageCard = _sfc_main$3;
      const _component_UTooltip = _sfc_main$4;
      const _component_UCarousel = _sfc_main$1;
      const _component_UModal = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "not-sm:py-10 sm:py-20 min-h-screen bg-welcome"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "bg-ui-background" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="title not-sm:text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("projects.title"))}</h2>`);
            _push2(ssrRenderComponent(_component_UMarquee, {
              "pause-on-hover": "",
              reverse: "",
              overlay: false,
              ui: { root: "[--gap:--spacing(4)] my-5", content: "w-auto py-1" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(projects2), (project, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      ui: {
                        description: "line-clamp-3"
                      },
                      class: "w-64 h-42 shrink-0 cursor-pointer bg-ui-surface border-ui-border hover:bg-border focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                      onClick: ($event) => currentProjectSlug.value = project.slug ? project.slug : "charmed-books"
                    }, {
                      header: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="font-semibold text-ui-text"${_scopeId3}>${ssrInterpolate(project.name)}</h3>`);
                        } else {
                          return [
                            createVNode("h3", { class: "font-semibold text-ui-text" }, toDisplayString(project.name), 1)
                          ];
                        }
                      }),
                      body: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UTooltip, {
                            text: project.description
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p class="text-[14px] text-ui-text"${_scopeId4}>${ssrInterpolate(project.quote)}</p>`);
                              } else {
                                return [
                                  createVNode("p", { class: "text-[14px] text-ui-text" }, toDisplayString(project.quote), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UTooltip, {
                              text: project.description
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-[14px] text-ui-text" }, toDisplayString(project.quote), 1)
                              ]),
                              _: 2
                            }, 1032, ["text"])
                          ];
                        }
                      }),
                      footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-[12px] text-ui-muted"${_scopeId3}>${ssrInterpolate(project.stack.join(", "))}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-[12px] text-ui-muted" }, toDisplayString(project.stack.join(", ")), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(projects2), (project, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: index,
                        ui: {
                          description: "line-clamp-3"
                        },
                        class: "w-64 h-42 shrink-0 cursor-pointer bg-ui-surface border-ui-border hover:bg-border focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                        onClick: ($event) => currentProjectSlug.value = project.slug ? project.slug : "charmed-books"
                      }, {
                        header: withCtx(() => [
                          createVNode("h3", { class: "font-semibold text-ui-text" }, toDisplayString(project.name), 1)
                        ]),
                        body: withCtx(() => [
                          createVNode(_component_UTooltip, {
                            text: project.description
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-[14px] text-ui-text" }, toDisplayString(project.quote), 1)
                            ]),
                            _: 2
                          }, 1032, ["text"])
                        ]),
                        footer: withCtx(() => [
                          createVNode("p", { class: "text-[12px] text-ui-muted" }, toDisplayString(project.stack.join(", ")), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="w-full bg-ui-surface px-4 py-2 my-5"${_scopeId}>${ssrInterpolate(unref(selectedProject)?.name)} - ${ssrInterpolate(unref(selectedProject)?.description)}</div>`);
            _push2(ssrRenderComponent(_component_UCarousel, {
              "class-names": "",
              arrows: unref(images) && unref(images).length > 1,
              items: unref(images),
              class: "mx-auto w-full mb-15 rounded-xl"
            }, {
              default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("alt", unref(currentProjectSlug) + ("useId" in _ctx ? _ctx.useId : unref(useId))())}${ssrRenderAttr("src", item)} loading="lazy" class="mx-auto w-full object-cover border border-primary"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: unref(currentProjectSlug) + ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                      src: item,
                      onClick: ($event) => selectImage(item),
                      loading: "lazy",
                      class: "mx-auto w-full object-cover border border-primary"
                    }, null, 8, ["alt", "src", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UModal, {
              open: unref(fullscreen),
              "onUpdate:open": ($event) => fullscreen.value = false,
              fullscreen: "",
              title: unref(selectedProject)?.name + " - " + unref(selectedProject)?.description
            }, {
              body: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("alt", unref(currentProjectSlug) + ("useId" in _ctx ? _ctx.useId : unref(useId))())}${ssrRenderAttr("src", unref(currentImageUrl))} loading="lazy" class="mx-auto w-full object-cover"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: unref(currentProjectSlug) + ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                      src: unref(currentImageUrl),
                      loading: "lazy",
                      class: "mx-auto w-full object-cover"
                    }, null, 8, ["alt", "src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "title not-sm:text-center" }, toDisplayString(_ctx.$t("projects.title")), 1),
              createVNode(_component_UMarquee, {
                "pause-on-hover": "",
                reverse: "",
                overlay: false,
                ui: { root: "[--gap:--spacing(4)] my-5", content: "w-auto py-1" }
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(projects2), (project, index) => {
                    return openBlock(), createBlock(_component_UPageCard, {
                      key: index,
                      ui: {
                        description: "line-clamp-3"
                      },
                      class: "w-64 h-42 shrink-0 cursor-pointer bg-ui-surface border-ui-border hover:bg-border focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                      onClick: ($event) => currentProjectSlug.value = project.slug ? project.slug : "charmed-books"
                    }, {
                      header: withCtx(() => [
                        createVNode("h3", { class: "font-semibold text-ui-text" }, toDisplayString(project.name), 1)
                      ]),
                      body: withCtx(() => [
                        createVNode(_component_UTooltip, {
                          text: project.description
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-[14px] text-ui-text" }, toDisplayString(project.quote), 1)
                          ]),
                          _: 2
                        }, 1032, ["text"])
                      ]),
                      footer: withCtx(() => [
                        createVNode("p", { class: "text-[12px] text-ui-muted" }, toDisplayString(project.stack.join(", ")), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode("div", { class: "w-full bg-ui-surface px-4 py-2 my-5" }, toDisplayString(unref(selectedProject)?.name) + " - " + toDisplayString(unref(selectedProject)?.description), 1),
              createVNode(_component_UCarousel, {
                "class-names": "",
                arrows: unref(images) && unref(images).length > 1,
                items: unref(images),
                class: "mx-auto w-full mb-15 rounded-xl"
              }, {
                default: withCtx(({ item }) => [
                  createVNode("img", {
                    alt: unref(currentProjectSlug) + ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                    src: item,
                    onClick: ($event) => selectImage(item),
                    loading: "lazy",
                    class: "mx-auto w-full object-cover border border-primary"
                  }, null, 8, ["alt", "src", "onClick"])
                ]),
                _: 1
              }, 8, ["arrows", "items"]),
              createVNode(_component_UModal, {
                open: unref(fullscreen),
                "onUpdate:open": ($event) => fullscreen.value = false,
                fullscreen: "",
                title: unref(selectedProject)?.name + " - " + unref(selectedProject)?.description
              }, {
                body: withCtx(() => [
                  createVNode("img", {
                    alt: unref(currentProjectSlug) + ("useId" in _ctx ? _ctx.useId : unref(useId))(),
                    src: unref(currentImageUrl),
                    loading: "lazy",
                    class: "mx-auto w-full object-cover"
                  }, null, 8, ["alt", "src"])
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open", "title"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = Object.assign(_sfc_main, { __name: "SectionProjects" });

export { projects as default };
//# sourceMappingURL=projects--Yj9IDky.mjs.map
