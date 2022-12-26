(() => {
  'use strict';
  (() => {
    const e = [
        {
          id: '1',
          title: 'Xiaomi Redmi Note 11',
          urlToImg: './assets/phones/5.png',
          amount: 4,
          year: 2012,
          manufacturer: 'Xiaomi',
          color: 'белый',
          cameras: 1,
          isPopular: 'да',
        },
        {
          id: '2',
          title: 'Xiaomi Redmi 9C 3/64gb',
          urlToImg: './assets/phones/6.png',
          amount: 6,
          year: 2010,
          manufacturer: 'Xiaomi',
          color: 'красный',
          cameras: 2,
          isPopular: 'нет',
        },
        {
          id: '3',
          title: 'Xiaomi Poco X4 pro1',
          urlToImg: './assets/phones/4.png',
          amount: 1,
          year: 2014,
          manufacturer: 'Xiaomi',
          color: 'желтый',
          cameras: 2,
          isPopular: 'нет',
        },
        {
          id: '4',
          title: 'Samsung Galaxy S21',
          urlToImg: './assets/phones/1.png',
          amount: 2,
          year: 2019,
          manufacturer: 'Samsung',
          color: 'белый',
          cameras: 3,
          isPopular: 'нет',
        },
        {
          id: '5',
          title: 'Samsung Galaxy S20',
          urlToImg: './assets/phones/3.png',
          amount: 3,
          year: 2022,
          manufacturer: 'Samsung',
          color: 'желтый',
          cameras: 1,
          isPopular: 'нет',
        },
        {
          id: '6',
          title: 'Samsung Galaxy A03',
          urlToImg: './assets/phones/2.png',
          amount: 5,
          year: 2e3,
          manufacturer: 'Samsung',
          color: 'красный',
          cameras: 2,
          isPopular: 'нет',
        },
        {
          id: '7',
          title: 'Apple iPhone SE',
          urlToImg: './assets/phones/10.png',
          amount: 7,
          year: 2004,
          manufacturer: 'Apple',
          color: 'белый',
          cameras: 1,
          isPopular: 'нет',
        },
        {
          id: '8',
          title: 'Apple iPhone 13',
          urlToImg: './assets/phones/8.png',
          amount: 10,
          year: 2009,
          manufacturer: 'Apple',
          color: 'красный',
          cameras: 3,
          isPopular: 'нет',
        },
        {
          id: '9',
          title: 'Apple iPhone 12',
          urlToImg: './assets/phones/9.png',
          amount: 2,
          year: 2010,
          manufacturer: 'Apple',
          color: 'желтый',
          cameras: 3,
          isPopular: 'нет',
        },
        {
          id: '10',
          title: 'Apple iPhone 11',
          urlToImg: './assets/phones/7.png',
          amount: 12,
          year: 2018,
          manufacturer: 'Apple',
          color: 'белый',
          cameras: 3,
          isPopular: 'да',
        },
        {
          id: '11',
          title: 'Apple iPhone 13',
          urlToImg: './assets/phones/11.png',
          amount: 10,
          year: 2021,
          manufacturer: 'Apple',
          color: 'белый',
          cameras: 3,
          isPopular: 'да',
        },
        {
          id: '12',
          title: 'Apple iPhone 12 mini',
          urlToImg: './assets/phones/12.png',
          amount: 1,
          year: 2020,
          manufacturer: 'Apple',
          color: 'белый',
          cameras: 3,
          isPopular: 'нет',
        },
        {
          id: '13',
          title: 'Apple iPhone 13 Pro Max',
          urlToImg: './assets/phones/13.png',
          amount: 7,
          year: 2021,
          manufacturer: 'Apple',
          color: 'желтый',
          cameras: 4,
          isPopular: 'нет',
        },
        {
          id: '14',
          title: 'Apple iPhone XS',
          urlToImg: './assets/phones/14.png',
          amount: 7,
          year: 2020,
          manufacturer: 'Apple',
          color: 'желтый',
          cameras: 3,
          isPopular: 'да',
        },
        {
          id: '15',
          title: 'Xiaomi 12 Lite',
          urlToImg: './assets/phones/15.png',
          amount: 2,
          year: 2022,
          manufacturer: 'Xiaomi',
          color: 'красный',
          cameras: 4,
          isPopular: 'нет',
        },
        {
          id: '16',
          title: 'Xiaomi Redmi 10',
          urlToImg: './assets/phones/16.png',
          amount: 4,
          year: 2022,
          manufacturer: 'Xiaomi',
          color: 'белый',
          cameras: 5,
          isPopular: 'да',
        },
        {
          id: '17',
          title: 'Xiaomi 11 Lite',
          urlToImg: './assets/phones/17.png',
          amount: 6,
          year: 2021,
          manufacturer: 'Xiaomi',
          color: 'красный',
          cameras: 4,
          isPopular: 'нет',
        },
        {
          id: '18',
          title: 'Samsung Galaxy S22+',
          urlToImg: './assets/phones/18.png',
          amount: 20,
          year: 2022,
          manufacturer: 'Samsung',
          color: 'белый',
          cameras: 4,
          isPopular: 'нет',
        },
        {
          id: '19',
          title: 'Samsung Galaxy A33',
          urlToImg: './assets/phones/19.png',
          amount: 17,
          year: 2022,
          manufacturer: 'Samsung',
          color: 'желтый',
          cameras: 5,
          isPopular: 'да',
        },
        {
          id: '20',
          title: 'Samsung Galaxy S22',
          urlToImg: './assets/phones/20.png',
          amount: 3,
          year: 2022,
          manufacturer: 'Samsung',
          color: 'красный',
          cameras: 4,
          isPopular: 'нет',
        },
        {
          id: '21',
          title: 'Samsung Galaxy S22 Ultra',
          urlToImg: './assets/phones/21.png',
          amount: 3,
          year: 2022,
          manufacturer: 'Samsung',
          color: 'белый',
          cameras: 5,
          isPopular: 'нет',
        },
        {
          id: '22',
          title: 'Realme 9i',
          urlToImg: './assets/phones/22.png',
          amount: 9,
          year: 2022,
          manufacturer: 'Realme',
          color: 'синий',
          cameras: 4,
          isPopular: 'да',
        },
        {
          id: '23',
          title: 'Realme 8i',
          urlToImg: './assets/phones/23.png',
          amount: 2,
          year: 2021,
          manufacturer: 'Realme',
          color: 'черный',
          cameras: 4,
          isPopular: 'нет',
        },
        {
          id: '24',
          title: 'Realme C25s',
          urlToImg: './assets/phones/24.png',
          amount: 14,
          year: 2021,
          manufacturer: 'Realme',
          color: 'синий',
          cameras: 4,
          isPopular: 'нет',
        },
        {
          id: '25',
          title: 'Realme 9 Pro',
          urlToImg: './assets/phones/25.png',
          amount: 18,
          year: 2022,
          manufacturer: 'Realme',
          color: 'черный',
          cameras: 4,
          isPopular: 'нет',
        },
      ],
      t = {
        filterSettings: {
          manufacturer: [],
          cameras: [],
          colors: [],
          isPopular: 'false',
        },
        rangeSettings: { amount: ['0', '20'], year: ['2000', '2022'] },
        sortingScheme: 'sort-by-name-desc',
        activeCards: [],
      },
      r = JSON.parse(JSON.stringify(t)),
      n = JSON.parse(JSON.stringify(t)),
      a = () => {
        (r.rangeSettings.amount[0] = t.rangeSettings.amount[0]),
          (r.rangeSettings.amount[1] = t.rangeSettings.amount[1]),
          (r.rangeSettings.year[0] = t.rangeSettings.year[0]),
          (r.rangeSettings.year[1] = t.rangeSettings.year[1]),
          (r.filterSettings.manufacturer = t.filterSettings.manufacturer),
          (r.filterSettings.cameras = t.filterSettings.cameras),
          (r.filterSettings.colors = t.filterSettings.colors),
          (r.filterSettings.isPopular = t.filterSettings.isPopular);
      },
      s = () => {
        localStorage.setItem(
          'filterSettings',
          JSON.stringify(r.filterSettings)
        ),
          localStorage.setItem(
            'rangeSettings',
            JSON.stringify(r.rangeSettings)
          ),
          localStorage.setItem('sortingScheme', r.sortingScheme),
          localStorage.setItem('activeCards', JSON.stringify(r.activeCards));
      };
    class o {
      constructor(e) {
        (this.classes = e),
          (this.modal = ''),
          (this.modalContent = ''),
          (this.modalCloseBtn = ''),
          (this.overlay = '');
      }
      buildModal(e) {
        (this.overlay = this.createDomNode(
          this.overlay,
          'div',
          'overlay',
          'overlay_modal'
        )),
          (this.modal = this.createDomNode(
            this.modal,
            'div',
            'modal',
            this.classes
          )),
          (this.modalContent = this.createDomNode(
            this.modalContent,
            'div',
            'modal__content'
          )),
          (this.modalCloseBtn = this.createDomNode(
            this.modalCloseBtn,
            'span',
            'modal__close-icon'
          )),
          this.setContent(e),
          this.appendModalElements(),
          this.bindEvents(),
          this.openModal();
      }
      createDomNode(e, t, ...r) {
        return (e = document.createElement(t)).classList.add(...r), e;
      }
      setContent(e) {
        'string' == typeof e
          ? (this.modalContent.innerHTML = e)
          : ((this.modalContent.innerHTML = ''),
            this.modalContent.appendChild(e));
      }
      appendModalElements() {
        this.modal.append(this.modalCloseBtn),
          this.modal.append(this.modalContent),
          this.overlay.append(this.modal);
      }
      bindEvents() {
        this.modalCloseBtn.addEventListener('click', (e) => this.closeModal(e)),
          this.overlay.addEventListener('click', (e) => this.closeModal(e));
      }
      openModal() {
        document.body.append(this.overlay);
      }
      closeModal(e) {
        var t;
        const r = e.target.classList;
        (r.contains('overlay') || r.contains('modal__close-icon')) &&
          (null === (t = document.querySelector('.overlay')) ||
            void 0 === t ||
            t.remove());
      }
    }
    class i extends o {
      constructor(e, { urlToImg: t, text: r }) {
        super(e), (this.urlToImg = t), (this.text = r);
      }
      generateError() {
        let e = '';
        const t = document.createElement('div');
        return (
          (t.className = 'error'),
          this.text && (e += `<h2 class="error__title">${this.text}</h2>`),
          this.urlToImg &&
            ((e += '<div class="error__img-wrapper">'),
            (e += `<img src=${this.urlToImg} alt="error" class="error__img"/>`),
            (e += '</div>')),
          (t.innerHTML = e),
          t
        );
      }
      renderErrorModal() {
        const e = this.generateError();
        super.buildModal(e);
      }
    }
    const l = (e, t) => {
        new i('modal', { urlToImg: e, text: t }).renderErrorModal();
      },
      c = () => {
        l('./assets/media/dog404.jpeg', 'Извините, совпадений не обнаружено');
      },
      u = () => {
        l('./assets/media/dog.jpeg', 'Извините, все слоты заполнены');
      },
      m = () => {
        const e = document.querySelector(
            '.store-content__search-window .search-img'
          ),
          t = document.querySelector(
            '.store-content__search-window .clear-img'
          );
        null == e || e.classList.remove('hidden'),
          null == t || t.classList.add('hidden');
      },
      d = (e, t) => {
        var r;
        return null === (r = t.parentNode) || void 0 === r
          ? void 0
          : r.insertBefore(e, t.nextSibling);
      },
      g = (e, t) => {
        for (let r = 0; r < e.children.length; r++)
          for (let n = r; n < e.children.length; n++)
            if (
              +e.children[r].getAttribute(t) > +e.children[n].getAttribute(t)
            ) {
              const t = e.replaceChild(e.children[n], e.children[r]);
              d(t, e.children[r]);
            }
      },
      h = (e, t) => {
        for (let r = 0; r < e.children.length; r++)
          for (let n = r; n < e.children.length; n++)
            if (
              +e.children[r].getAttribute(t) < +e.children[n].getAttribute(t)
            ) {
              const t = e.replaceChild(e.children[n], e.children[r]);
              d(t, e.children[r]);
            }
      },
      S = (e) => {
        const t = document.querySelectorAll(
          '.layout-5-column .store-content__item'
        );
        e.forEach((e) => {
          e.classList.contains('store-content__item_hidden') ||
            e.classList.add('store-content__item_hidden');
        }),
          e.forEach((e) => {
            const t = e.querySelector('.amount-prop').innerText;
            parseInt(t) >= +r.rangeSettings.amount[0] &&
              parseInt(t) <= +r.rangeSettings.amount[1] &&
              e.classList.remove('store-content__item_hidden');
          }),
          ((e) => {
            e.forEach((e) => {
              e.classList.contains('store-content__item_hidden') ||
                e.classList.add('store-content__item_hidden');
            }),
              e.forEach((e) => {
                const t = e.querySelector('.year-prop').innerText;
                parseInt(t) >= +r.rangeSettings.year[0] &&
                  parseInt(t) <= +r.rangeSettings.year[1] &&
                  e.classList.remove('store-content__item_hidden');
              }),
              ((e) => {
                const t = document.querySelector('.store-content__wrapper'),
                  n = e.filter(
                    (e) =>
                      !e.classList.contains('hide') &&
                      !e.classList.contains('store-content__item_hidden')
                  ),
                  a = document.querySelector('.overlay');
                0 !== n.length || a || c(),
                  'sort-by-name-asc' === r.sortingScheme &&
                    ((e, t) => {
                      for (let r = 0; r < e.children.length; r++)
                        for (let n = r; n < e.children.length; n++)
                          if (
                            e.children[r].getAttribute(t) >
                            e.children[n].getAttribute(t)
                          ) {
                            const t = e.replaceChild(
                              e.children[n],
                              e.children[r]
                            );
                            d(t, e.children[r]);
                          }
                    })(t, 'data-title'),
                  'sort-by-name-desc' === r.sortingScheme &&
                    ((e, t) => {
                      for (let r = 0; r < e.children.length; r++)
                        for (let n = r; n < e.children.length; n++)
                          if (
                            e.children[r].getAttribute(t) <
                            e.children[n].getAttribute(t)
                          ) {
                            const t = e.replaceChild(
                              e.children[n],
                              e.children[r]
                            );
                            d(t, e.children[r]);
                          }
                    })(t, 'data-title'),
                  'ascending-amount' === r.sortingScheme && g(t, 'data-amount'),
                  'descending-amount' === r.sortingScheme &&
                    h(t, 'data-amount'),
                  'ascending-year' === r.sortingScheme && g(t, 'data-year'),
                  'descending-year' === r.sortingScheme && h(t, 'data-year');
              })(e);
          })(
            Array.from(t).filter(
              (e) => !e.classList.contains('store-content__item_hidden')
            )
          );
      },
      p = (e) => {
        const t = document.querySelectorAll(
            '.layout-5-column .store-content__item'
          ),
          n = document.querySelectorAll('#popular-input:checked');
        if (((r.filterSettings.isPopular = 'false'), 0 !== n.length)) {
          (r.filterSettings.isPopular = 'true'),
            e.forEach((e) => {
              e.classList.contains('store-content__item_hidden') ||
                e.classList.add('store-content__item_hidden');
            }),
            e.forEach((e) => {
              'да' === e.querySelector('.popular-prop').innerText &&
                e.classList.remove('store-content__item_hidden');
            });
          const n = Array.from(t).filter(
            (e) => !e.classList.contains('store-content__item_hidden')
          );
          S(n);
        } else (r.filterSettings.isPopular = 'false'), S(e);
      },
      y = (e) => {
        const t = document.querySelectorAll(
            '.layout-5-column .store-content__item'
          ),
          r = document.querySelectorAll('.colors .button_color');
        if (
          0 !== document.querySelectorAll('.colors .button_color.active').length
        ) {
          e.forEach((e) => {
            e.classList.contains('store-content__item_hidden') ||
              e.classList.add('store-content__item_hidden');
          }),
            r.forEach((t) => {
              t.classList.contains('active') &&
                e.forEach((e) => {
                  const r = e.querySelector('.color-prop').innerText;
                  t.innerText === r &&
                    e.classList.remove('store-content__item_hidden');
                });
            });
          const n = Array.from(t).filter(
            (e) => !e.classList.contains('store-content__item_hidden')
          );
          p(n);
        } else p(e);
      },
      f = (e) => {
        const t = document.querySelectorAll(
            '.layout-5-column .store-content__item'
          ),
          r = document.querySelectorAll('.camera-amount .button_camera');
        if (
          0 !==
          document.querySelectorAll('.camera-amount .button_camera.active')
            .length
        ) {
          e.forEach((e) => {
            e.classList.contains('store-content__item_hidden') ||
              e.classList.add('store-content__item_hidden');
          }),
            r.forEach((t) => {
              t.classList.contains('active') &&
                e.forEach((e) => {
                  const r = e.querySelector('.camera-prop').innerText;
                  t.innerText === r &&
                    e.classList.remove('store-content__item_hidden');
                });
            });
          const n = Array.from(t).filter(
            (e) => !e.classList.contains('store-content__item_hidden')
          );
          y(n);
        } else y(e);
      },
      _ = () => {
        const e = document.querySelectorAll(
            '.layout-5-column .store-content__item'
          ),
          t = document.querySelectorAll(
            '.manufacturer-list .button_manufacturer'
          );
        if (
          0 !==
          document.querySelectorAll(
            '.manufacturer-list .button_manufacturer.active'
          ).length
        ) {
          e.forEach((e) => {
            e.classList.add('store-content__item_hidden');
          }),
            t.forEach((t) => {
              t.classList.contains('active') &&
                e.forEach((e) => {
                  const r = e.querySelector('.manufacturer-prop').innerText;
                  t.innerText === r &&
                    e.classList.remove('store-content__item_hidden');
                });
            });
          const r = Array.from(e).filter(
            (e) => !e.classList.contains('store-content__item_hidden')
          );
          f(r);
        } else
          e.forEach((e) => {
            e.classList.remove('store-content__item_hidden');
          }),
            f(Array.from(e));
      };
    class v {
      constructor({
        id: e,
        title: t,
        urlToImg: r,
        amount: n,
        year: a,
        manufacturer: s,
        color: o,
        cameras: i,
        isPopular: l,
      }) {
        (this.id = e),
          (this.title = t),
          (this.urlToImg = r),
          (this.amount = n),
          (this.year = a),
          (this.manufacturer = s),
          (this.color = o),
          (this.cameras = i),
          (this.isPopular = l);
      }
      generateCard() {
        let e = '';
        const t = document.createElement('div');
        return (
          (t.className = 'store-content__item'),
          t.setAttribute('data-id', this.id),
          t.setAttribute('data-title', this.title),
          t.setAttribute('data-amount', this.amount.toString()),
          t.setAttribute('data-year', this.year.toString()),
          this.title &&
            (e += `<h3 class="store-content__title">${this.title}</h3>`),
          this.urlToImg &&
            ((e += '<div class="store-content__img-wrapper">'),
            (e += `<img src=${this.urlToImg} alt="${this.title}" class="store-content__img"/>`),
            (e += '</div>')),
          (this.amount ||
            this.year ||
            this.manufacturer ||
            this.color ||
            this.cameras ||
            this.isPopular) &&
            ((e += '<ul class="store-content__props">'),
            (e += `<li>Количество: <span class="amount-prop">${this.amount}</span></li>`),
            (e += `<li>Год выхода: <span class="year-prop">${this.year}</span></li>`),
            (e += `<li>Производитель: <span class="manufacturer-prop">${this.manufacturer}</span></li>`),
            (e += `<li>Цвет: <span class="color-prop">${this.color}</span></li>`),
            (e += `<li>Количество камер: <span class="camera-prop">${this.cameras}</span></li>`),
            (e += `<li>Популярный: <span class="popular-prop">${this.isPopular}</span></li>`),
            (e += '</ul>'),
            (e += '<div class="ribbon" title="Добавлена в избранное"></div>')),
          (t.innerHTML = e),
          t
        );
      }
    }
    const L = (e) => {
        const t = document.querySelector('.basket__quantity');
        e <= 20 ? (t.innerText = e.toString()) : u();
      },
      A = () => {
        const e = document.getElementById('sort');
        null == e ||
          e.addEventListener(
            'change',
            function () {
              (r.sortingScheme = this.value), _();
            },
            !1
          );
      };
    (window.onload = function () {
      var n;
      window.addEventListener('beforeunload', s),
        e &&
          (() => {
            const t = (() => {
              const e = document.querySelector('.store-content__wrapper');
              return (e.innerHTML = ''), e;
            })();
            ((e) => {
              const t = [];
              return (
                e.forEach((e) => {
                  t.push(new v(e));
                }),
                t
              );
            })(e).forEach((e) => {
              null == t || t.append(e.generateCard());
            });
          })(),
        (() => {
          var e;
          null === (e = document.querySelector('.manufacturer-list')) ||
            void 0 === e ||
            e.addEventListener('click', (e) => {
              e.target.classList.contains('button_manufacturer') &&
                ((e) => {
                  const t = e.getAttribute('data-manufacturer');
                  e.classList.contains('active')
                    ? (e.classList.remove('active'),
                      t &&
                        (r.filterSettings.manufacturer = r.filterSettings.manufacturer.filter(
                          (e) => e !== t
                        )))
                    : (e.classList.add('active'),
                      t && r.filterSettings.manufacturer.push(t)),
                    _();
                })(e.target);
            });
        })(),
        (() => {
          var e;
          null === (e = document.querySelector('.camera-amount')) ||
            void 0 === e ||
            e.addEventListener('click', (e) => {
              e.target.classList.contains('button_camera') &&
                ((e) => {
                  const t = e.getAttribute('data-camera');
                  e.classList.contains('active')
                    ? (e.classList.remove('active'),
                      t &&
                        (r.filterSettings.cameras = r.filterSettings.cameras.filter(
                          (e) => e !== t
                        )))
                    : (e.classList.add('active'),
                      t && r.filterSettings.cameras.push(t)),
                    _();
                })(e.target);
            });
        })(),
        (() => {
          var e;
          null === (e = document.querySelector('.colors')) ||
            void 0 === e ||
            e.addEventListener('click', (e) => {
              e.target.classList.contains('button_color') &&
                ((e) => {
                  const t = e.getAttribute('data-color');
                  e.classList.contains('active')
                    ? (e.classList.remove('active'),
                      t &&
                        (r.filterSettings.colors = r.filterSettings.colors.filter(
                          (e) => e !== t
                        )))
                    : (e.classList.add('active'),
                      t && r.filterSettings.colors.push(t)),
                    _();
                })(e.target);
            });
        })(),
        null === (n = document.querySelector('#popular-input')) ||
          void 0 === n ||
          n.addEventListener('click', () => {
            _();
          }),
        A(),
        document.querySelectorAll('.store-content__item').forEach((e) => {
          null == e ||
            e.addEventListener('click', (e) => {
              const t = document.querySelectorAll(
                  '.store-content__item.active'
                ),
                n = e.currentTarget;
              t.length < 20 || n.classList.contains('active')
                ? ((e) => {
                    e.classList.toggle('active'),
                      (() => {
                        const e = document.querySelectorAll(
                            '.store-content__item.active'
                          ),
                          t = [];
                        e.forEach((e) => {
                          const r = e.getAttribute('data-id');
                          t.push(r);
                        }),
                          (r.activeCards = t),
                          L(e.length);
                      })();
                  })(n)
                : u();
            });
        }),
        (() => {
          const e = document.querySelectorAll('.amount-range-input input'),
            n = +t.rangeSettings.amount[1] - +t.rangeSettings.amount[0],
            a = document.querySelectorAll('.store-content__amount-numbers'),
            s = document.querySelector('.amount-slider .amount-progress'),
            o = document.querySelector('.amount-slider .amount-value_min'),
            i = document.querySelector('.amount-slider .amount-value_max');
          e.forEach((t) => {
            t.addEventListener('input', (t) => {
              const l = parseInt(e[0].value),
                c = parseInt(e[1].value);
              c - l < 1
                ? 'amount-range-min' === t.target.className
                  ? (e[0].value = (c - 1).toString())
                  : (e[1].value = (l + 1).toString())
                : (null == o || o.classList.remove('hidden'),
                  null == i || i.classList.remove('hidden'),
                  (a[0].innerHTML = l.toString()),
                  (a[1].innerHTML = c.toString()),
                  (r.rangeSettings.amount[0] = l.toString()),
                  (r.rangeSettings.amount[1] = c.toString()),
                  (s.style.left = `${Math.trunc((100 * l) / n)}%`),
                  (o.style.left = `${Math.trunc((100 * l) / n)}%`),
                  (o.innerHTML = l.toString()),
                  (s.style.right = 100 - Math.trunc((100 * c) / n) + '%'),
                  (i.style.left = `${Math.trunc((100 * c) / n)}%`),
                  (i.innerHTML = c.toString()),
                  _());
            }),
              t.addEventListener('mouseup', () => {
                null == o || o.classList.add('hidden'),
                  null == i || i.classList.add('hidden');
              });
          });
        })(),
        (() => {
          const e = document.querySelectorAll('.year-range-input input'),
            n = document.querySelectorAll('.store-content__year-numbers'),
            a = document.querySelector('.year-slider .year-progress'),
            s = document.querySelector('.year-slider .year-value_min'),
            o = document.querySelector('.year-slider .year-value_max'),
            i = +t.rangeSettings.year[0],
            l = +t.rangeSettings.year[1] - +t.rangeSettings.year[0];
          e.forEach((t) => {
            t.addEventListener('input', (t) => {
              const c = parseInt(e[0].value),
                u = parseInt(e[1].value);
              u - c < 1
                ? 'year-range-min' === t.target.className
                  ? (e[0].value = (u - 1).toString())
                  : (e[1].value = (c + 1).toString())
                : (null == s || s.classList.remove('hidden'),
                  null == o || o.classList.remove('hidden'),
                  (n[0].innerHTML = c.toString()),
                  (n[1].innerHTML = u.toString()),
                  (r.rangeSettings.year[0] = c.toString()),
                  (r.rangeSettings.year[1] = u.toString()),
                  (a.style.left = `${Math.trunc((100 * (c - i)) / l)}%`),
                  (s.style.left = `${Math.trunc((100 * (c - i)) / l)}%`),
                  (s.innerHTML = c.toString()),
                  (a.style.right = 100 - Math.trunc((100 * (u - i)) / l) + '%'),
                  (o.style.left = `${Math.trunc((100 * (u - i)) / l)}%`),
                  (o.innerHTML = u.toString()),
                  _());
            }),
              t.addEventListener('mouseup', () => {
                null == s || s.classList.add('hidden'),
                  null == o || o.classList.add('hidden');
              });
          });
        })(),
        (() => {
          const e = document.getElementById('search-input');
          null == e ||
            e.addEventListener('change', (e) => {
              const t = document.querySelectorAll('.store-content__item'),
                r = Array.from(t).filter(
                  (e) => !e.classList.contains('store-content__item_hidden')
                ),
                n = e.target.value.toLowerCase().trim();
              '' != n
                ? ((() => {
                    const e = document.querySelector(
                        '.store-content__search-window .search-img'
                      ),
                      t = document.querySelector(
                        '.store-content__search-window .clear-img'
                      );
                    null == e || e.classList.add('hidden'),
                      null == t || t.classList.remove('hidden');
                  })(),
                  r.forEach((e) => {
                    var t;
                    const r =
                      null === (t = e.getAttribute('data-title')) ||
                      void 0 === t
                        ? void 0
                        : t.toLowerCase();
                    -1 == (null == r ? void 0 : r.search(n))
                      ? e.classList.add('hide')
                      : e.classList.remove('hide');
                  }),
                  0 === r.filter((e) => !e.classList.contains('hide')).length &&
                    c())
                : (r.forEach((e) => {
                    e.classList.remove('hide');
                  }),
                  m());
            });
        })(),
        (() => {
          const e = document.getElementById('search-input'),
            t = document.querySelector(
              '.store-content__search-window .clear-img'
            );
          null == t ||
            t.addEventListener('click', () => {
              e.value = '';
              const t = document.querySelectorAll('.store-content__item');
              Array.from(t)
                .filter(
                  (e) => !e.classList.contains('store-content__item_hidden')
                )
                .forEach((e) => {
                  e.classList.remove('hide');
                }),
                m();
            });
        })(),
        (() => {
          var e;
          null ===
            (e = document.querySelector('.store-content__reset .filters')) ||
            void 0 === e ||
            e.addEventListener('click', () => {
              a(), window.location.reload();
            });
        })(),
        (() => {
          var e;
          null ===
            (e = document.querySelector('.store-content__reset .settings')) ||
            void 0 === e ||
            e.addEventListener('click', () => {
              (r.activeCards = t.activeCards),
                (r.sortingScheme = t.sortingScheme),
                a(),
                window.location.reload();
            });
        })();
    }),
      window.addEventListener('load', () => {
        localStorage.getItem('filterSettings') &&
          (n.filterSettings = JSON.parse(
            localStorage.getItem('filterSettings')
          )),
          localStorage.getItem('rangeSettings') &&
            (n.rangeSettings = JSON.parse(
              localStorage.getItem('rangeSettings')
            )),
          localStorage.getItem('activeCards') &&
            (n.activeCards = JSON.parse(localStorage.getItem('activeCards'))),
          localStorage.getItem('sortingScheme') &&
            (n.sortingScheme = localStorage.getItem('sortingScheme')),
          (() => {
            const e = document.querySelectorAll('.store-content__year-numbers'),
              a = document.querySelector('.year-slider .year-progress'),
              s = document.querySelector('.year-slider .year-value_min'),
              o = document.querySelector('.year-slider .year-value_max'),
              i = +t.rangeSettings.year[0],
              l = +t.rangeSettings.year[1] - +t.rangeSettings.year[0];
            (e[0].innerHTML = n.rangeSettings.year[0].toString()),
              (e[1].innerHTML = n.rangeSettings.year[1].toString()),
              (document.getElementsByClassName(
                'year-range-min'
              )[0].value = n.rangeSettings.year[0].toString()),
              (document.getElementsByClassName(
                'year-range-max'
              )[0].value = n.rangeSettings.year[1].toString()),
              (a.style.left = `${Math.trunc(
                (100 * (+n.rangeSettings.year[0] - i)) / l
              )}%`),
              (s.style.left = `${Math.trunc(
                (100 * (+n.rangeSettings.year[0] - i)) / l
              )}%`),
              (s.innerHTML = n.rangeSettings.year[0].toString()),
              (a.style.right =
                100 -
                Math.trunc((100 * (+n.rangeSettings.year[1] - i)) / l) +
                '%'),
              (o.style.left = `${Math.trunc(
                (100 * (+n.rangeSettings.year[1] - i)) / l
              )}%`),
              (o.innerHTML = n.rangeSettings.year[1].toString()),
              (r.rangeSettings.year[0] = n.rangeSettings.year[0]),
              (r.rangeSettings.year[1] = n.rangeSettings.year[1]);
          })(),
          (() => {
            const e = document.querySelectorAll(
                '.store-content__amount-numbers'
              ),
              a = document.querySelector('.amount-slider .amount-progress'),
              s = document.querySelector('.amount-slider .amount-value_min'),
              o = document.querySelector('.amount-slider .amount-value_max'),
              i = +t.rangeSettings.amount[1] - +t.rangeSettings.amount[0];
            (e[0].innerHTML = n.rangeSettings.amount[0].toString()),
              (e[1].innerHTML = n.rangeSettings.amount[1].toString()),
              (document.getElementsByClassName(
                'amount-range-min'
              )[0].value = n.rangeSettings.amount[0].toString()),
              (document.getElementsByClassName(
                'amount-range-max'
              )[0].value = n.rangeSettings.amount[1].toString()),
              (a.style.left = `${Math.trunc(
                (100 * +n.rangeSettings.amount[0]) / i
              )}%`),
              (s.style.left = `${Math.trunc(
                (100 * +n.rangeSettings.amount[0]) / i
              )}%`),
              (s.innerHTML = n.rangeSettings.amount[0].toString()),
              (a.style.right =
                100 - Math.trunc((100 * +n.rangeSettings.amount[1]) / i) + '%'),
              (o.style.left = `${Math.trunc(
                (100 * +n.rangeSettings.amount[1]) / i
              )}%`),
              (o.innerHTML = n.rangeSettings.amount[1].toString()),
              (r.rangeSettings.amount[0] = n.rangeSettings.amount[0]),
              (r.rangeSettings.amount[1] = n.rangeSettings.amount[1]);
          })(),
          (() => {
            const e = document.querySelector('#popular-input');
            'true' === n.filterSettings.isPopular && (e.checked = !0);
          })(),
          (() => {
            const e = document.querySelectorAll('.manufacturer-list .button');
            for (let t = 0; t < e.length; t++)
              for (let r = 0; r < n.filterSettings.manufacturer.length; r++)
                e[t].classList.contains(n.filterSettings.manufacturer[r]) &&
                  e[t].classList.add('active');
            r.filterSettings.manufacturer = JSON.parse(
              JSON.stringify(n.filterSettings.manufacturer)
            );
          })(),
          (() => {
            const e = document.querySelectorAll('.camera-amount .button');
            for (let t = 0; t < e.length; t++)
              for (let r = 0; r < n.filterSettings.cameras.length; r++)
                e[t].getAttribute('data-camera') ===
                  n.filterSettings.cameras[r] && e[t].classList.add('active');
            r.filterSettings.cameras = JSON.parse(
              JSON.stringify(n.filterSettings.cameras)
            );
          })(),
          (() => {
            const e = document.querySelectorAll('.colors .button');
            for (let t = 0; t < e.length; t++)
              for (let r = 0; r < n.filterSettings.colors.length; r++)
                e[t].classList.contains(n.filterSettings.colors[r]) &&
                  e[t].classList.add('active');
            r.filterSettings.colors = n.filterSettings.colors;
          })(),
          (document.getElementById('sort').value = n.sortingScheme),
          (r.sortingScheme = n.sortingScheme),
          (r.activeCards = n.activeCards),
          document
            .querySelectorAll('.layout-5-column .store-content__item')
            .forEach((e) => {
              n.activeCards.forEach((t) => {
                e.getAttribute('data-id') === t && e.classList.add('active');
              });
            }),
          L(n.activeCards.length),
          _();
      });
  })();
})();
