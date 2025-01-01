/* eslint-disable */
//@ts-nocheck
/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const r = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;

function t(
  r,
  {
    instancePath: e = '',
    parentData: n,
    parentDataProperty: s,
    rootData: a = r,
  } = {},
) {
  if (!Array.isArray(r))
    return (
      (t.errors = [
        {
          params: {
            type: 'array',
          },
        },
      ]),
      !1
    );
  {
    const e = r.length;
    for (let n = 0; n < e; n++) {
      let e = r[n];
      const s = 0;
      if ('string' != typeof e)
        return (
          (t.errors = [
            {
              params: {
                type: 'string',
              },
            },
          ]),
          !1
        );
      if (e.length < 1)
        return (
          (t.errors = [
            {
              params: {},
            },
          ]),
          !1
        );
      if (0 !== s) break;
    }
  }
  return (t.errors = null), !0;
}

function e(
  r,
  {
    instancePath: n = '',
    parentData: s,
    parentDataProperty: a,
    rootData: o = r,
  } = {},
) {
  let i = null,
    l = 0;
  if (0 === l) {
    if (!r || 'object' != typeof r || Array.isArray(r))
      return (
        (e.errors = [
          {
            params: {
              type: 'object',
            },
          },
        ]),
        !1
      );
    {
      let s;
      if (void 0 === r.import && (s = 'import'))
        return (
          (e.errors = [
            {
              params: {
                missingProperty: s,
              },
            },
          ]),
          !1
        );
      {
        const s = l;
        for (const t in r)
          if ('import' !== t && 'name' !== t)
            return (
              (e.errors = [
                {
                  params: {
                    additionalProperty: t,
                  },
                },
              ]),
              !1
            );
        if (s === l) {
          if (void 0 !== r.import) {
            let s = r.import;
            const a = l,
              u = l;
            let c = !1;
            const m = l;
            if (l == l)
              if ('string' == typeof s) {
                if (s.length < 1) {
                  const r = {
                    params: {},
                  };
                  null === i ? (i = [r]) : i.push(r), l++;
                }
              } else {
                const r = {
                  params: {
                    type: 'string',
                  },
                };
                null === i ? (i = [r]) : i.push(r), l++;
              }
            var p = m === l;
            if (((c = c || p), !c)) {
              const e = l;
              t(s, {
                instancePath: n + '/import',
                parentData: r,
                parentDataProperty: 'import',
                rootData: o,
              }) ||
                ((i = null === i ? t.errors : i.concat(t.errors)),
                (l = i.length)),
                (p = e === l),
                (c = c || p);
            }
            if (!c) {
              const r = {
                params: {},
              };
              return (
                null === i ? (i = [r]) : i.push(r), l++, (e.errors = i), !1
              );
            }
            (l = u), null !== i && (u ? (i.length = u) : (i = null));
            var f = a === l;
          } else f = !0;
          if (f)
            if (void 0 !== r.name) {
              const t = l;
              if ('string' != typeof r.name)
                return (
                  (e.errors = [
                    {
                      params: {
                        type: 'string',
                      },
                    },
                  ]),
                  !1
                );
              f = t === l;
            } else f = !0;
        }
      }
    }
  }
  return (e.errors = i), 0 === l;
}

function n(
  r,
  {
    instancePath: s = '',
    parentData: a,
    parentDataProperty: o,
    rootData: i = r,
  } = {},
) {
  let l = null,
    p = 0;
  if (0 === p) {
    if (!r || 'object' != typeof r || Array.isArray(r))
      return (
        (n.errors = [
          {
            params: {
              type: 'object',
            },
          },
        ]),
        !1
      );
    for (const a in r) {
      let o = r[a];
      const u = p,
        c = p;
      let m = !1;
      const y = p;
      e(o, {
        instancePath: s + '/' + a.replace(/~/g, '~0').replace(/\//g, '~1'),
        parentData: r,
        parentDataProperty: a,
        rootData: i,
      }) || ((l = null === l ? e.errors : l.concat(e.errors)), (p = l.length));
      var f = y === p;
      if (((m = m || f), !m)) {
        const e = p;
        if (p == p)
          if ('string' == typeof o) {
            if (o.length < 1) {
              const r = {
                params: {},
              };
              null === l ? (l = [r]) : l.push(r), p++;
            }
          } else {
            const r = {
              params: {
                type: 'string',
              },
            };
            null === l ? (l = [r]) : l.push(r), p++;
          }
        if (((f = e === p), (m = m || f), !m)) {
          const e = p;
          t(o, {
            instancePath: s + '/' + a.replace(/~/g, '~0').replace(/\//g, '~1'),
            parentData: r,
            parentDataProperty: a,
            rootData: i,
          }) ||
            ((l = null === l ? t.errors : l.concat(t.errors)), (p = l.length)),
            (f = e === p),
            (m = m || f);
        }
      }
      if (!m) {
        const r = {
          params: {},
        };
        return null === l ? (l = [r]) : l.push(r), p++, (n.errors = l), !1;
      }
      if (((p = c), null !== l && (c ? (l.length = c) : (l = null)), u !== p))
        break;
    }
  }
  return (n.errors = l), 0 === p;
}

function s(
  r,
  {
    instancePath: t = '',
    parentData: e,
    parentDataProperty: a,
    rootData: o = r,
  } = {},
) {
  let i = null,
    l = 0;
  const p = l;
  let f = !1;
  const u = l;
  if (l === u)
    if (Array.isArray(r)) {
      const e = r.length;
      for (let s = 0; s < e; s++) {
        let e = r[s];
        const a = l,
          p = l;
        let f = !1;
        const u = l;
        if (l == l)
          if ('string' == typeof e) {
            if (e.length < 1) {
              const r = {
                params: {},
              };
              null === i ? (i = [r]) : i.push(r), l++;
            }
          } else {
            const r = {
              params: {
                type: 'string',
              },
            };
            null === i ? (i = [r]) : i.push(r), l++;
          }
        var c = u === l;
        if (((f = f || c), !f)) {
          const a = l;
          n(e, {
            instancePath: t + '/' + s,
            parentData: r,
            parentDataProperty: s,
            rootData: o,
          }) ||
            ((i = null === i ? n.errors : i.concat(n.errors)), (l = i.length)),
            (c = a === l),
            (f = f || c);
        }
        if (f) (l = p), null !== i && (p ? (i.length = p) : (i = null));
        else {
          const r = {
            params: {},
          };
          null === i ? (i = [r]) : i.push(r), l++;
        }
        if (a !== l) break;
      }
    } else {
      const r = {
        params: {
          type: 'array',
        },
      };
      null === i ? (i = [r]) : i.push(r), l++;
    }
  var m = u === l;
  if (((f = f || m), !f)) {
    const s = l;
    n(r, {
      instancePath: t,
      parentData: e,
      parentDataProperty: a,
      rootData: o,
    }) || ((i = null === i ? n.errors : i.concat(n.errors)), (l = i.length)),
      (m = s === l),
      (f = f || m);
  }
  if (!f) {
    const r = {
      params: {},
    };
    return null === i ? (i = [r]) : i.push(r), l++, (s.errors = i), !1;
  }
  return (
    (l = p),
    null !== i && (p ? (i.length = p) : (i = null)),
    (s.errors = i),
    0 === l
  );
}

function a(
  r,
  {
    instancePath: t = '',
    parentData: e,
    parentDataProperty: n,
    rootData: s = r,
  } = {},
) {
  let o = null,
    i = 0;
  const l = i;
  let p = !1;
  const f = i;
  if ('string' != typeof r) {
    const r = {
      params: {
        type: 'string',
      },
    };
    null === o ? (o = [r]) : o.push(r), i++;
  }
  var u = f === i;
  if (((p = p || u), !p)) {
    const t = i;
    if (i == i)
      if (r && 'object' == typeof r && !Array.isArray(r)) {
        const t = i;
        for (const t in r)
          if (
            'amd' !== t &&
            'commonjs' !== t &&
            'commonjs2' !== t &&
            'root' !== t
          ) {
            const r = {
              params: {
                additionalProperty: t,
              },
            };
            null === o ? (o = [r]) : o.push(r), i++;
            break;
          }
        if (t === i) {
          if (void 0 !== r.amd) {
            const t = i;
            if ('string' != typeof r.amd) {
              const r = {
                params: {
                  type: 'string',
                },
              };
              null === o ? (o = [r]) : o.push(r), i++;
            }
            var c = t === i;
          } else c = !0;
          if (c) {
            if (void 0 !== r.commonjs) {
              const t = i;
              if ('string' != typeof r.commonjs) {
                const r = {
                  params: {
                    type: 'string',
                  },
                };
                null === o ? (o = [r]) : o.push(r), i++;
              }
              c = t === i;
            } else c = !0;
            if (c) {
              if (void 0 !== r.commonjs2) {
                const t = i;
                if ('string' != typeof r.commonjs2) {
                  const r = {
                    params: {
                      type: 'string',
                    },
                  };
                  null === o ? (o = [r]) : o.push(r), i++;
                }
                c = t === i;
              } else c = !0;
              if (c)
                if (void 0 !== r.root) {
                  const t = i;
                  if ('string' != typeof r.root) {
                    const r = {
                      params: {
                        type: 'string',
                      },
                    };
                    null === o ? (o = [r]) : o.push(r), i++;
                  }
                  c = t === i;
                } else c = !0;
            }
          }
        }
      } else {
        const r = {
          params: {
            type: 'object',
          },
        };
        null === o ? (o = [r]) : o.push(r), i++;
      }
    (u = t === i), (p = p || u);
  }
  if (!p) {
    const r = {
      params: {},
    };
    return null === o ? (o = [r]) : o.push(r), i++, (a.errors = o), !1;
  }
  return (
    (i = l),
    null !== o && (l ? (o.length = l) : (o = null)),
    (a.errors = o),
    0 === i
  );
}

function o(
  r,
  {
    instancePath: t = '',
    parentData: e,
    parentDataProperty: n,
    rootData: s = r,
  } = {},
) {
  let a = null,
    i = 0;
  const l = i;
  let p = !1;
  const f = i;
  if (i === f)
    if (Array.isArray(r))
      if (r.length < 1) {
        const r = {
          params: {
            limit: 1,
          },
        };
        null === a ? (a = [r]) : a.push(r), i++;
      } else {
        const t = r.length;
        for (let e = 0; e < t; e++) {
          let t = r[e];
          const n = i;
          if (i === n)
            if ('string' == typeof t) {
              if (t.length < 1) {
                const r = {
                  params: {},
                };
                null === a ? (a = [r]) : a.push(r), i++;
              }
            } else {
              const r = {
                params: {
                  type: 'string',
                },
              };
              null === a ? (a = [r]) : a.push(r), i++;
            }
          if (n !== i) break;
        }
      }
    else {
      const r = {
        params: {
          type: 'array',
        },
      };
      null === a ? (a = [r]) : a.push(r), i++;
    }
  var u = f === i;
  if (((p = p || u), !p)) {
    const t = i;
    if (i === t)
      if ('string' == typeof r) {
        if (r.length < 1) {
          const r = {
            params: {},
          };
          null === a ? (a = [r]) : a.push(r), i++;
        }
      } else {
        const r = {
          params: {
            type: 'string',
          },
        };
        null === a ? (a = [r]) : a.push(r), i++;
      }
    if (((u = t === i), (p = p || u), !p)) {
      const t = i;
      if (i == i)
        if (r && 'object' == typeof r && !Array.isArray(r)) {
          const t = i;
          for (const t in r)
            if ('amd' !== t && 'commonjs' !== t && 'root' !== t) {
              const r = {
                params: {
                  additionalProperty: t,
                },
              };
              null === a ? (a = [r]) : a.push(r), i++;
              break;
            }
          if (t === i) {
            if (void 0 !== r.amd) {
              let t = r.amd;
              const e = i;
              if (i === e)
                if ('string' == typeof t) {
                  if (t.length < 1) {
                    const r = {
                      params: {},
                    };
                    null === a ? (a = [r]) : a.push(r), i++;
                  }
                } else {
                  const r = {
                    params: {
                      type: 'string',
                    },
                  };
                  null === a ? (a = [r]) : a.push(r), i++;
                }
              var c = e === i;
            } else c = !0;
            if (c) {
              if (void 0 !== r.commonjs) {
                let t = r.commonjs;
                const e = i;
                if (i === e)
                  if ('string' == typeof t) {
                    if (t.length < 1) {
                      const r = {
                        params: {},
                      };
                      null === a ? (a = [r]) : a.push(r), i++;
                    }
                  } else {
                    const r = {
                      params: {
                        type: 'string',
                      },
                    };
                    null === a ? (a = [r]) : a.push(r), i++;
                  }
                c = e === i;
              } else c = !0;
              if (c)
                if (void 0 !== r.root) {
                  let t = r.root;
                  const e = i,
                    n = i;
                  let s = !1;
                  const o = i;
                  if (i === o)
                    if (Array.isArray(t)) {
                      const r = t.length;
                      for (let e = 0; e < r; e++) {
                        let r = t[e];
                        const n = i;
                        if (i === n)
                          if ('string' == typeof r) {
                            if (r.length < 1) {
                              const r = {
                                params: {},
                              };
                              null === a ? (a = [r]) : a.push(r), i++;
                            }
                          } else {
                            const r = {
                              params: {
                                type: 'string',
                              },
                            };
                            null === a ? (a = [r]) : a.push(r), i++;
                          }
                        if (n !== i) break;
                      }
                    } else {
                      const r = {
                        params: {
                          type: 'array',
                        },
                      };
                      null === a ? (a = [r]) : a.push(r), i++;
                    }
                  var m = o === i;
                  if (((s = s || m), !s)) {
                    const r = i;
                    if (i === r)
                      if ('string' == typeof t) {
                        if (t.length < 1) {
                          const r = {
                            params: {},
                          };
                          null === a ? (a = [r]) : a.push(r), i++;
                        }
                      } else {
                        const r = {
                          params: {
                            type: 'string',
                          },
                        };
                        null === a ? (a = [r]) : a.push(r), i++;
                      }
                    (m = r === i), (s = s || m);
                  }
                  if (s)
                    (i = n), null !== a && (n ? (a.length = n) : (a = null));
                  else {
                    const r = {
                      params: {},
                    };
                    null === a ? (a = [r]) : a.push(r), i++;
                  }
                  c = e === i;
                } else c = !0;
            }
          }
        } else {
          const r = {
            params: {
              type: 'object',
            },
          };
          null === a ? (a = [r]) : a.push(r), i++;
        }
      (u = t === i), (p = p || u);
    }
  }
  if (!p) {
    const r = {
      params: {},
    };
    return null === a ? (a = [r]) : a.push(r), i++, (o.errors = a), !1;
  }
  return (
    (i = l),
    null !== a && (l ? (a.length = l) : (a = null)),
    (o.errors = a),
    0 === i
  );
}

function i(
  r,
  {
    instancePath: t = '',
    parentData: e,
    parentDataProperty: n,
    rootData: s = r,
  } = {},
) {
  let l = null,
    p = 0;
  if (0 === p) {
    if (!r || 'object' != typeof r || Array.isArray(r))
      return (
        (i.errors = [
          {
            params: {
              type: 'object',
            },
          },
        ]),
        !1
      );
    {
      let e;
      if (void 0 === r.type && (e = 'type'))
        return (
          (i.errors = [
            {
              params: {
                missingProperty: e,
              },
            },
          ]),
          !1
        );
      {
        const e = p;
        for (const t in r)
          if (
            'amdContainer' !== t &&
            'auxiliaryComment' !== t &&
            'export' !== t &&
            'name' !== t &&
            'type' !== t &&
            'umdNamedDefine' !== t
          )
            return (
              (i.errors = [
                {
                  params: {
                    additionalProperty: t,
                  },
                },
              ]),
              !1
            );
        if (e === p) {
          if (void 0 !== r.amdContainer) {
            let t = r.amdContainer;
            const e = p;
            if (p == p) {
              if ('string' != typeof t)
                return (
                  (i.errors = [
                    {
                      params: {
                        type: 'string',
                      },
                    },
                  ]),
                  !1
                );
              if (t.length < 1)
                return (
                  (i.errors = [
                    {
                      params: {},
                    },
                  ]),
                  !1
                );
            }
            var f = e === p;
          } else f = !0;
          if (f) {
            if (void 0 !== r.auxiliaryComment) {
              const e = p;
              a(r.auxiliaryComment, {
                instancePath: t + '/auxiliaryComment',
                parentData: r,
                parentDataProperty: 'auxiliaryComment',
                rootData: s,
              }) ||
                ((l = null === l ? a.errors : l.concat(a.errors)),
                (p = l.length)),
                (f = e === p);
            } else f = !0;
            if (f) {
              if (void 0 !== r.export) {
                let t = r.export;
                const e = p,
                  n = p;
                let s = !1;
                const a = p;
                if (p === a)
                  if (Array.isArray(t)) {
                    const r = t.length;
                    for (let e = 0; e < r; e++) {
                      let r = t[e];
                      const n = p;
                      if (p === n)
                        if ('string' == typeof r) {
                          if (r.length < 1) {
                            const r = {
                              params: {},
                            };
                            null === l ? (l = [r]) : l.push(r), p++;
                          }
                        } else {
                          const r = {
                            params: {
                              type: 'string',
                            },
                          };
                          null === l ? (l = [r]) : l.push(r), p++;
                        }
                      if (n !== p) break;
                    }
                  } else {
                    const r = {
                      params: {
                        type: 'array',
                      },
                    };
                    null === l ? (l = [r]) : l.push(r), p++;
                  }
                var u = a === p;
                if (((s = s || u), !s)) {
                  const r = p;
                  if (p === r)
                    if ('string' == typeof t) {
                      if (t.length < 1) {
                        const r = {
                          params: {},
                        };
                        null === l ? (l = [r]) : l.push(r), p++;
                      }
                    } else {
                      const r = {
                        params: {
                          type: 'string',
                        },
                      };
                      null === l ? (l = [r]) : l.push(r), p++;
                    }
                  (u = r === p), (s = s || u);
                }
                if (!s) {
                  const r = {
                    params: {},
                  };
                  return (
                    null === l ? (l = [r]) : l.push(r), p++, (i.errors = l), !1
                  );
                }
                (p = n),
                  null !== l && (n ? (l.length = n) : (l = null)),
                  (f = e === p);
              } else f = !0;
              if (f) {
                if (void 0 !== r.name) {
                  const e = p;
                  o(r.name, {
                    instancePath: t + '/name',
                    parentData: r,
                    parentDataProperty: 'name',
                    rootData: s,
                  }) ||
                    ((l = null === l ? o.errors : l.concat(o.errors)),
                    (p = l.length)),
                    (f = e === p);
                } else f = !0;
                if (f) {
                  if (void 0 !== r.type) {
                    let t = r.type;
                    const e = p,
                      n = p;
                    let s = !1;
                    const a = p;
                    if (
                      'var' !== t &&
                      'module' !== t &&
                      'assign' !== t &&
                      'assign-properties' !== t &&
                      'this' !== t &&
                      'window' !== t &&
                      'self' !== t &&
                      'global' !== t &&
                      'commonjs' !== t &&
                      'commonjs2' !== t &&
                      'commonjs-module' !== t &&
                      'commonjs-static' !== t &&
                      'amd' !== t &&
                      'amd-require' !== t &&
                      'umd' !== t &&
                      'umd2' !== t &&
                      'jsonp' !== t &&
                      'system' !== t
                    ) {
                      const r = {
                        params: {},
                      };
                      null === l ? (l = [r]) : l.push(r), p++;
                    }
                    var c = a === p;
                    if (((s = s || c), !s)) {
                      const r = p;
                      if ('string' != typeof t) {
                        const r = {
                          params: {
                            type: 'string',
                          },
                        };
                        null === l ? (l = [r]) : l.push(r), p++;
                      }
                      (c = r === p), (s = s || c);
                    }
                    if (!s) {
                      const r = {
                        params: {},
                      };
                      return (
                        null === l ? (l = [r]) : l.push(r),
                        p++,
                        (i.errors = l),
                        !1
                      );
                    }
                    (p = n),
                      null !== l && (n ? (l.length = n) : (l = null)),
                      (f = e === p);
                  } else f = !0;
                  if (f)
                    if (void 0 !== r.umdNamedDefine) {
                      const t = p;
                      if ('boolean' != typeof r.umdNamedDefine)
                        return (
                          (i.errors = [
                            {
                              params: {
                                type: 'boolean',
                              },
                            },
                          ]),
                          !1
                        );
                      f = t === p;
                    } else f = !0;
                }
              }
            }
          }
        }
      }
    }
  }
  return (i.errors = l), 0 === p;
}

function l(
  t,
  {
    instancePath: e = '',
    parentData: n,
    parentDataProperty: a,
    rootData: o = t,
  } = {},
) {
  let p = null,
    f = 0;
  if (0 === f) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (
        (l.errors = [
          {
            params: {
              type: 'object',
            },
          },
        ]),
        !1
      );
    {
      let n;
      if (
        (void 0 === t.name && (n = 'name')) ||
        (void 0 === t.exposes && (n = 'exposes'))
      )
        return (
          (l.errors = [
            {
              params: {
                missingProperty: n,
              },
            },
          ]),
          !1
        );
      {
        const n = f;
        for (const r in t)
          if (
            'experiments' !== r &&
            'exposes' !== r &&
            'filename' !== r &&
            'library' !== r &&
            'name' !== r &&
            'runtime' !== r &&
            'runtimePlugins' !== r &&
            'shareScope' !== r
          )
            return (
              (l.errors = [
                {
                  params: {
                    additionalProperty: r,
                  },
                },
              ]),
              !1
            );
        if (n === f) {
          if (void 0 !== t.experiments) {
            let r = t.experiments;
            const e = f;
            if (f === e) {
              if (!r || 'object' != typeof r || Array.isArray(r))
                return (
                  (l.errors = [
                    {
                      params: {
                        type: 'object',
                      },
                    },
                  ]),
                  !1
                );
              {
                const t = f;
                for (const t in r)
                  if (
                    'externalRuntime' !== t &&
                    'federationRuntime' !== t &&
                    'provideExternalRuntime' !== t
                  )
                    return (
                      (l.errors = [
                        {
                          params: {
                            additionalProperty: t,
                          },
                        },
                      ]),
                      !1
                    );
                if (t === f) {
                  if (void 0 !== r.externalRuntime) {
                    const t = f;
                    if ('boolean' != typeof r.externalRuntime)
                      return (
                        (l.errors = [
                          {
                            params: {
                              type: 'boolean',
                            },
                          },
                        ]),
                        !1
                      );
                    var u = t === f;
                  } else u = !0;
                  if (u) {
                    if (void 0 !== r.federationRuntime) {
                      let t = r.federationRuntime;
                      const e = f,
                        n = f;
                      let s = !1;
                      const a = f;
                      if ('hoisted' !== t) {
                        const r = {
                          params: {},
                        };
                        null === p ? (p = [r]) : p.push(r), f++;
                      }
                      var c = a === f;
                      if (((s = s || c), !s)) {
                        const r = f;
                        if ('boolean' != typeof t) {
                          const r = {
                            params: {
                              type: 'boolean',
                            },
                          };
                          null === p ? (p = [r]) : p.push(r), f++;
                        }
                        (c = r === f), (s = s || c);
                      }
                      if (!s) {
                        const r = {
                          params: {},
                        };
                        return (
                          null === p ? (p = [r]) : p.push(r),
                          f++,
                          (l.errors = p),
                          !1
                        );
                      }
                      (f = n),
                        null !== p && (n ? (p.length = n) : (p = null)),
                        (u = e === f);
                    } else u = !0;
                    if (u)
                      if (void 0 !== r.provideExternalRuntime) {
                        const t = f;
                        if ('boolean' != typeof r.provideExternalRuntime)
                          return (
                            (l.errors = [
                              {
                                params: {
                                  type: 'boolean',
                                },
                              },
                            ]),
                            !1
                          );
                        u = t === f;
                      } else u = !0;
                  }
                }
              }
            }
            var m = e === f;
          } else m = !0;
          if (m) {
            if (void 0 !== t.exposes) {
              const r = f;
              s(t.exposes, {
                instancePath: e + '/exposes',
                parentData: t,
                parentDataProperty: 'exposes',
                rootData: o,
              }) ||
                ((p = null === p ? s.errors : p.concat(s.errors)),
                (f = p.length)),
                (m = r === f);
            } else m = !0;
            if (m) {
              if (void 0 !== t.filename) {
                let e = t.filename;
                const n = f;
                if (f === n) {
                  if ('string' != typeof e)
                    return (
                      (l.errors = [
                        {
                          params: {
                            type: 'string',
                          },
                        },
                      ]),
                      !1
                    );
                  if (e.includes('!') || !1 !== r.test(e))
                    return (
                      (l.errors = [
                        {
                          params: {},
                        },
                      ]),
                      !1
                    );
                  if (e.length < 1)
                    return (
                      (l.errors = [
                        {
                          params: {},
                        },
                      ]),
                      !1
                    );
                }
                m = n === f;
              } else m = !0;
              if (m) {
                if (void 0 !== t.library) {
                  const r = f;
                  i(t.library, {
                    instancePath: e + '/library',
                    parentData: t,
                    parentDataProperty: 'library',
                    rootData: o,
                  }) ||
                    ((p = null === p ? i.errors : p.concat(i.errors)),
                    (f = p.length)),
                    (m = r === f);
                } else m = !0;
                if (m) {
                  if (void 0 !== t.name) {
                    let r = t.name;
                    const e = f;
                    if (f === e) {
                      if ('string' != typeof r)
                        return (
                          (l.errors = [
                            {
                              params: {
                                type: 'string',
                              },
                            },
                          ]),
                          !1
                        );
                      if (r.length < 1)
                        return (
                          (l.errors = [
                            {
                              params: {},
                            },
                          ]),
                          !1
                        );
                    }
                    m = e === f;
                  } else m = !0;
                  if (m) {
                    if (void 0 !== t.runtime) {
                      let r = t.runtime;
                      const e = f,
                        n = f;
                      let s = !1;
                      const a = f;
                      if (!1 !== r) {
                        const r = {
                          params: {},
                        };
                        null === p ? (p = [r]) : p.push(r), f++;
                      }
                      var y = a === f;
                      if (((s = s || y), !s)) {
                        const t = f;
                        if (f === t)
                          if ('string' == typeof r) {
                            if (r.length < 1) {
                              const r = {
                                params: {},
                              };
                              null === p ? (p = [r]) : p.push(r), f++;
                            }
                          } else {
                            const r = {
                              params: {
                                type: 'string',
                              },
                            };
                            null === p ? (p = [r]) : p.push(r), f++;
                          }
                        (y = t === f), (s = s || y);
                      }
                      if (!s) {
                        const r = {
                          params: {},
                        };
                        return (
                          null === p ? (p = [r]) : p.push(r),
                          f++,
                          (l.errors = p),
                          !1
                        );
                      }
                      (f = n),
                        null !== p && (n ? (p.length = n) : (p = null)),
                        (m = e === f);
                    } else m = !0;
                    if (m) {
                      if (void 0 !== t.runtimePlugins) {
                        let r = t.runtimePlugins;
                        const e = f;
                        if (f === e) {
                          if (!Array.isArray(r))
                            return (
                              (l.errors = [
                                {
                                  params: {
                                    type: 'array',
                                  },
                                },
                              ]),
                              !1
                            );
                          {
                            const t = r.length;
                            for (let e = 0; e < t; e++) {
                              let t = r[e];
                              const n = f,
                                s = f;
                              let a = !1;
                              const o = f;
                              if (f === o)
                                if ('string' == typeof t) {
                                  if (t.length < 1) {
                                    const r = {
                                      params: {},
                                    };
                                    null === p ? (p = [r]) : p.push(r), f++;
                                  }
                                } else {
                                  const r = {
                                    params: {
                                      type: 'string',
                                    },
                                  };
                                  null === p ? (p = [r]) : p.push(r), f++;
                                }
                              var h = o === f;
                              if (((a = a || h), !a)) {
                                const r = f;
                                if (f === r)
                                  if (
                                    t &&
                                    'object' == typeof t &&
                                    !Array.isArray(t)
                                  ) {
                                    let r;
                                    if (
                                      (void 0 === t.import && (r = 'import')) ||
                                      (void 0 === t.async && (r = 'async'))
                                    ) {
                                      const t = {
                                        params: {
                                          missingProperty: r,
                                        },
                                      };
                                      null === p ? (p = [t]) : p.push(t), f++;
                                    } else {
                                      const r = f;
                                      for (const r in t)
                                        if ('async' !== r && 'import' !== r) {
                                          const t = {
                                            params: {
                                              additionalProperty: r,
                                            },
                                          };
                                          null === p ? (p = [t]) : p.push(t),
                                            f++;
                                          break;
                                        }
                                      if (r === f) {
                                        if (void 0 !== t.async) {
                                          const r = f;
                                          if ('boolean' != typeof t.async) {
                                            const r = {
                                              params: {
                                                type: 'boolean',
                                              },
                                            };
                                            null === p ? (p = [r]) : p.push(r),
                                              f++;
                                          }
                                          var g = r === f;
                                        } else g = !0;
                                        if (g)
                                          if (void 0 !== t.import) {
                                            let r = t.import;
                                            const e = f;
                                            if (f === e)
                                              if ('string' == typeof r) {
                                                if (r.length < 1) {
                                                  const r = {
                                                    params: {},
                                                  };
                                                  null === p
                                                    ? (p = [r])
                                                    : p.push(r),
                                                    f++;
                                                }
                                              } else {
                                                const r = {
                                                  params: {
                                                    type: 'string',
                                                  },
                                                };
                                                null === p
                                                  ? (p = [r])
                                                  : p.push(r),
                                                  f++;
                                              }
                                            g = e === f;
                                          } else g = !0;
                                      }
                                    }
                                  } else {
                                    const r = {
                                      params: {
                                        type: 'object',
                                      },
                                    };
                                    null === p ? (p = [r]) : p.push(r), f++;
                                  }
                                (h = r === f), (a = a || h);
                              }
                              if (!a) {
                                const r = {
                                  params: {},
                                };
                                return (
                                  null === p ? (p = [r]) : p.push(r),
                                  f++,
                                  (l.errors = p),
                                  !1
                                );
                              }
                              if (
                                ((f = s),
                                null !== p && (s ? (p.length = s) : (p = null)),
                                n !== f)
                              )
                                break;
                            }
                          }
                        }
                        m = e === f;
                      } else m = !0;
                      if (m)
                        if (void 0 !== t.shareScope) {
                          let r = t.shareScope;
                          const e = f;
                          if (f === e) {
                            if ('string' != typeof r)
                              return (
                                (l.errors = [
                                  {
                                    params: {
                                      type: 'string',
                                    },
                                  },
                                ]),
                                !1
                              );
                            if (r.length < 1)
                              return (
                                (l.errors = [
                                  {
                                    params: {},
                                  },
                                ]),
                                !1
                              );
                          }
                          m = e === f;
                        } else m = !0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return (l.errors = p), 0 === f;
}
export default l;
