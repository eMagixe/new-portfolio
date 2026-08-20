import { _ as _sfc_main$2 } from './Container-DctvYi3A.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { b as _sfc_main$3$1, t as tv } from './Tooltip-B4LAymKA.mjs';
import { b as useI18n, a as useAppConfig } from './server.mjs';
import { _ as _sfc_main$3 } from './PageCard-D8xAQhXv.mjs';
import { _ as _sfc_main$4 } from './Alert-VXWL7gdP.mjs';
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
import '@vueuse/core';
import './nuxt-link-BiOVwRpD.mjs';
import 'tailwind-variants';
import './Button-DDZVeAG-.mjs';

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
    const { locale } = useI18n();
    const first_skills = computed(() => {
      return locale.value === "ru" ? useAppConfig().ru.skills.first : useAppConfig().en.skills.first;
    });
    const secondary_skills = computed(() => {
      return locale.value === "ru" ? useAppConfig().ru.skills.second : useAppConfig().en.skills.second;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$2;
      const _component_UPageList = _sfc_main$1;
      const _component_UPageCard = _sfc_main$3;
      const _component_UIcon = _sfc_main$3$1;
      const _component_UAlert = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "skills",
        class: "bg-primary/10 not-sm:py-10 sm:py-20 min-h-screen bg-skills"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="title not-sm:text-center"${_scopeId}>${ssrInterpolate(_ctx.$t("skills.title"))}</h2><div class="w-full flex flex-col md:flex-row justify-start items-start gap-5"${_scopeId}><section${_scopeId}><h3 class="mt-5 mb-5 pb-5 not-sm:text-center text-ui-text"${_scopeId}>${ssrInterpolate(_ctx.$t("skills.subtitle.first").toUpperCase())}</h3>`);
            _push2(ssrRenderComponent(_component_UPageList, null, {
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
                          _push4(`<div${_scopeId3}><h2${_scopeId3}>${ssrInterpolate(skill.name)}</h2><p class="mt-2 text-sm md:h-[50px] text-ui-muted"${_scopeId3}>${ssrInterpolate(skill.description)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px] text-ui-muted" }, toDisplayString(skill.description), 1)
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
                              createVNode("p", { class: "mt-2 text-sm md:h-[50px] text-ui-muted" }, toDisplayString(skill.description), 1)
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
            _push2(`</section><section${_scopeId}><h3 class="mt-5 mb-5 pb-5 not-sm:text-center text-ui-text"${_scopeId}>${ssrInterpolate(_ctx.$t("skills.subtitle.second").toUpperCase())}</h3>`);
            _push2(ssrRenderComponent(_component_UPageList, null, {
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
                          _push4(`<div${_scopeId3}><h2${_scopeId3}>${ssrInterpolate(skill.name)}</h2><p class="mt-2 text-sm md:h-[50px] text-ui-muted"${_scopeId3}>${ssrInterpolate(skill.description)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "w-full flex flex-row justify-start items-center gap-5" }, [
                              createVNode(_component_UIcon, {
                                name: skill.icon,
                                class: "size-10 shrink-0"
                              }, null, 8, ["name"]),
                              createVNode("div", null, [
                                createVNode("h2", null, toDisplayString(skill.name), 1),
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px] text-ui-muted" }, toDisplayString(skill.description), 1)
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
                              createVNode("p", { class: "mt-2 text-sm md:h-[50px] text-ui-muted" }, toDisplayString(skill.description), 1)
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
              title: _ctx.$t("skills.block_info.title"),
              description: _ctx.$t("skills.block_info.description"),
              icon: "i-lucide-info",
              class: "my-10 bg-ui-surface text-ui-text"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", { class: "title not-sm:text-center" }, toDisplayString(_ctx.$t("skills.title")), 1),
              createVNode("div", { class: "w-full flex flex-col md:flex-row justify-start items-start gap-5" }, [
                createVNode("section", null, [
                  createVNode("h3", { class: "mt-5 mb-5 pb-5 not-sm:text-center text-ui-text" }, toDisplayString(_ctx.$t("skills.subtitle.first").toUpperCase()), 1),
                  createVNode(_component_UPageList, null, {
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
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px] text-ui-muted" }, toDisplayString(skill.description), 1)
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
                  createVNode("h3", { class: "mt-5 mb-5 pb-5 not-sm:text-center text-ui-text" }, toDisplayString(_ctx.$t("skills.subtitle.second").toUpperCase()), 1),
                  createVNode(_component_UPageList, null, {
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
                                createVNode("p", { class: "mt-2 text-sm md:h-[50px] text-ui-muted" }, toDisplayString(skill.description), 1)
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
                title: _ctx.$t("skills.block_info.title"),
                description: _ctx.$t("skills.block_info.description"),
                icon: "i-lucide-info",
                class: "my-10 bg-ui-surface text-ui-text"
              }, null, 8, ["title", "description"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skills = Object.assign(_sfc_main, { __name: "SectionSkills" });

export { skills as default };
//# sourceMappingURL=skills-DKcJvsxA.mjs.map
