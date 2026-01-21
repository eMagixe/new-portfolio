import { _ as _sfc_main$6, c as _sfc_main$5, a as _sfc_main$7, t as tv } from './Button-GqGlf87S.mjs';
import { _ as _sfc_main$2 } from './PageHeader-CHx2fFk4.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createTextVNode, mergeProps, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { b as useI18n, a as useAppConfig, c as useSeoMeta } from './server.mjs';
import { _ as _sfc_main$3 } from './PageCard-CHHMSbkP.mjs';
import { _ as _sfc_main$4 } from './Alert-DzdK5BZm.mjs';
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
import '@vueuse/core';
import './index-DIr8QGQd.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './nuxt-link-C2KaZWET.mjs';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './useLocale-BYt3Qt2w.mjs';

const theme = {
  "base": "relative flex flex-col",
  "variants": {
    "divide": {
      "true": "*:not-last:after:absolute *:not-last:after:inset-x-1 *:not-last:after:bottom-0 *:not-last:after:bg-border *:not-last:after:h-px"
    }
  }
};
const _sfc_main$1 = {
  __name: "UPageList",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    divide: { type: Boolean, required: false, default: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.pageList || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        role: "list",
        class: ui.value({ class: props.class, divide: props.divide })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const first_skills = computed(() => {
      return locale.value === "ru" ? useAppConfig().ru.skills.first : useAppConfig().en.skills.first;
    });
    const secondary_skills = computed(() => {
      return locale.value === "ru" ? useAppConfig().ru.skills.second : useAppConfig().en.skills.second;
    });
    useSeoMeta({
      title: t("skills.seo.title"),
      ogTitle: t("skills.seo.title"),
      description: t("skills.seo.description"),
      ogDescription: t("skills.seo.description"),
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$6;
      const _component_UPageHeader = _sfc_main$2;
      const _component_UPageList = _sfc_main$1;
      const _component_UPageCard = _sfc_main$3;
      const _component_UIcon = _sfc_main$5;
      const _component_UAlert = _sfc_main$4;
      const _component_UButton = _sfc_main$7;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UPageHeader, {
              title: _ctx.$t("skills.title")
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-full flex flex-col md:flex-row justify-start items-start gap-5"${_scopeId}><section${_scopeId}><h3 class="mt-5 mb-5 border-b pb-5 border-b-gray-200"${_scopeId}>${ssrInterpolate(_ctx.$t("skills.subtitle.first"))}</h3>`);
            _push2(ssrRenderComponent(_component_UPageList, { divide: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(first_skills), (skill, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      variant: "ghost",
                      to: skill.to,
                      target: skill.target
                    }, {
                      body: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-full flex flex-row justify-start items-center gap-5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: skill.icon,
                            class: "size-10 shrink-0"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><h2${_scopeId3}>${ssrInterpolate(skill.name)}</h2><p class="mt-2 text-sm md:h-[50px]"${_scopeId3}>${ssrInterpolate(skill.description)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(first_skills), (skill, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: index,
                        variant: "ghost",
                        to: skill.to,
                        target: skill.target
                      }, {
                        body: withCtx(() => [
                          createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                            createVNode(_component_UIcon, {
                              name: skill.icon,
                              class: "size-10 shrink-0"
                            }, null, 8, ["name"]),
                            createVNode("div", null, [
                              createVNode("h2", null, toDisplayString(skill.name), 1),
                              createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to", "target"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}><h3 class="mt-5 mb-5 border-b pb-5 border-b-gray-200"${_scopeId}>${ssrInterpolate(_ctx.$t("skills.subtitle.second"))}</h3>`);
            _push2(ssrRenderComponent(_component_UPageList, { divide: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(secondary_skills), (skill, index) => {
                    _push3(ssrRenderComponent(_component_UPageCard, {
                      key: index,
                      variant: "ghost",
                      to: skill.to,
                      target: skill.target
                    }, {
                      body: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="w-full flex flex-row justify-start items-center gap-5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: skill.icon,
                            class: "size-10 shrink-0"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><h2${_scopeId3}>${ssrInterpolate(skill.name)}</h2><p class="mt-2 text-sm md:h-[50px]"${_scopeId3}>${ssrInterpolate(skill.description)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(secondary_skills), (skill, index) => {
                      return openBlock(), createBlock(_component_UPageCard, {
                        key: index,
                        variant: "ghost",
                        to: skill.to,
                        target: skill.target
                      }, {
                        body: withCtx(() => [
                          createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                            createVNode(_component_UIcon, {
                              name: skill.icon,
                              class: "size-10 shrink-0"
                            }, null, 8, ["name"]),
                            createVNode("div", null, [
                              createVNode("h2", null, toDisplayString(skill.name), 1),
                              createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to", "target"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section></div>`);
            _push2(ssrRenderComponent(_component_UAlert, {
              color: "neutral",
              variant: "subtle",
              title: _ctx.$t("skills.block_info.title"),
              description: _ctx.$t("skills.block_info.description"),
              icon: "i-lucide-info",
              class: "my-10"
            }, null, _parent2, _scopeId));
            _push2(`<div class="actions flex flex-row justify-between items-center w-full mb-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-arrow-left",
              to: _ctx.$t("skills.buttons.prev.to"),
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("skills.buttons.prev.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("skills.buttons.prev.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$t("skills.title"))}</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              "trailing-icon": "i-lucide-arrow-right",
              to: _ctx.$t("skills.buttons.next.to"),
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("skills.buttons.next.text"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("skills.buttons.next.text")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UPageHeader, {
                title: _ctx.$t("skills.title")
              }, null, 8, ["title"]),
              createVNode("div", { class: "w-full flex flex-col md:flex-row justify-start items-start gap-5" }, [
                createVNode("section", null, [
                  createVNode("h3", { class: "mt-5 mb-5 border-b pb-5 border-b-gray-200" }, toDisplayString(_ctx.$t("skills.subtitle.first")), 1),
                  createVNode(_component_UPageList, { divide: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(first_skills), (skill, index) => {
                        return openBlock(), createBlock(_component_UPageCard, {
                          key: index,
                          variant: "ghost",
                          to: skill.to,
                          target: skill.target
                        }, {
                          body: withCtx(() => [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to", "target"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                createVNode("section", null, [
                  createVNode("h3", { class: "mt-5 mb-5 border-b pb-5 border-b-gray-200" }, toDisplayString(_ctx.$t("skills.subtitle.second")), 1),
                  createVNode(_component_UPageList, { divide: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(secondary_skills), (skill, index) => {
                        return openBlock(), createBlock(_component_UPageCard, {
                          key: index,
                          variant: "ghost",
                          to: skill.to,
                          target: skill.target
                        }, {
                          body: withCtx(() => [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px]" }, toDisplayString(skill.description), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to", "target"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_component_UAlert, {
                color: "neutral",
                variant: "subtle",
                title: _ctx.$t("skills.block_info.title"),
                description: _ctx.$t("skills.block_info.description"),
                icon: "i-lucide-info",
                class: "my-10"
              }, null, 8, ["title", "description"]),
              createVNode("div", { class: "actions flex flex-row justify-between items-center w-full mb-10" }, [
                createVNode(_component_UButton, {
                  icon: "i-lucide-arrow-left",
                  to: _ctx.$t("skills.buttons.prev.to"),
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("skills.buttons.prev.text")), 1)
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("p", null, toDisplayString(_ctx.$t("skills.title")), 1),
                createVNode(_component_UButton, {
                  "trailing-icon": "i-lucide-arrow-right",
                  to: _ctx.$t("skills.buttons.next.to"),
                  color: "neutral",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("skills.buttons.next.text")), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=skills-Jt2yhiSD.mjs.map
