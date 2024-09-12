// ------------------------------------
export function animateOnScroll() {
  const animateItems = document.querySelectorAll('._animate')

  if (animateItems.length > 0) {
    // е. элементы с классом '._animate' уже видны в окне браузера
    setTimeout(() => {
      animate_on_scroll()
    }, 500)

    window.addEventListener('scroll', animate_on_scroll)

    function animate_on_scroll() {
      animateItems.forEach(animateItem => {
        const animateItemHeight = animateItem.offsetHeight // высота элемента
        const animateItemOffset = _offset(animateItem).top
        const animateStart = 4

        let animateItemPoint = window.innerHeight - animateItemHeight / animateStart

        // если высота элемента больше окна браузера
        if (animateItemHeight > window.innerHeight) {
          animateItemPoint = window.innerHeight - window.innerHeight / animateStart
        }

        // если у элемента есть класс '_animate', то при достижении скролом 1/4 высоты этого элемента
        // или 1/4 окна браузера (е. элемент больше окна) этому элементу добавляется класс '_animate-active'
        // если недоскролили или перескролили, то класс '_animate-active' убирается (для повторной анимации)
        if (scrollY > animateItemOffset - animateItemPoint && scrollY < animateItemOffset + animateItemHeight) {
          animateItem.classList.add('_animate-active')
        } else {
          if (animateItem.classList.contains('_animate-everytime')) {
            animateItem.classList.remove('_animate-active')
          }
        }
      })
    }
  }
}
// ------------------------------------
// возвращает положение элемента сверху и слева
function _offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
// ------------------------------------
// плавное сворачивание блока
export let slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide')

    // target.classList.remove("_slideDown"); // my
    // target.classList.add("_slideUp"); // my

    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = `${target.offsetHeight}px`
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = showmore ? `${showmore}px` : `0px`
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false
      !showmore ? target.style.removeProperty('height') : null
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      !showmore ? target.style.removeProperty('overflow') : null
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
      target.classList.remove('_slide')
      // Создаем событие
      document.dispatchEvent(
        new CustomEvent('slideUpDone', {
          detail: {
            target: target
          }
        })
      )
    }, duration)
  }
}
// ------------------------------------
export let slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide')

    // target.classList.add("_slideDown"); // my
    // target.classList.remove("_slideUp"); // my

    target.hidden = target.hidden ? false : null
    showmore ? target.style.removeProperty('height') : null
    let height = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = showmore ? `${showmore}px` : `0px`
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.offsetHeight
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    window.setTimeout(() => {
      target.style.removeProperty('height')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
      target.classList.remove('_slide')
      // Создаем событие
      document.dispatchEvent(
        new CustomEvent('slideDownDone', {
          detail: {
            target: target
          }
        })
      )
    }, duration)
  }
}
// ------------------------------------
export let slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return slideDown(target, duration)
  } else {
    return slideUp(target, duration)
  }
}
// myfunc._slideToggle(foldTitle.parentElement.querySelector("._fold__body"), 300);
// ------------------------------------
// вывод с ведущим 0, если значение меньше 10: 01, 02, ... 08, 09, 10
export function leading_zero_value(value) {
  let result = '0' + value
  return result.slice(-2)
}
// ------------------------------------
// время в формате 00:00
export function leading_zero_time(timestamp) {
  let date = new Date(timestamp * 1000)
  let hours = '0' + date.getHours()
  let minutes = '0' + date.getMinutes()
  // let seconds = "0" + date.getSeconds();
  return hours.slice(-2) + ':' + minutes.slice(-2)
}
// ------------------------------------
export function api(requestUrl) {
  fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
      if (data.length > 1) {
        data.forEach(item => {
          console.log(item)
        })
      } else {
        console.log(data)
      }
    })
}
// ------------------------------------
export function array_to_string(array) {
  let result = []

  if (array.length) {
    result = array.reduce((accum, item) => {
      return accum + ', ' + item
    })
  } else {
    result = 'unknown'
  }

  return result
}
// ------------------------------------
// вывод в консоль длин всех path svg
export function log_svgpath_length() {
  const pathes = document.querySelectorAll('svg path')

  for (let i = 0; i < pathes.length; i++) {
    // здесь ${i+1} т.к. в стилях отсчет начинается с 1, и длину округяем в потолок
    console.log(`length ${i + 1} is ${Math.ceil(pathes[i].getTotalLength())}`)
  }
}
// ------------------------------------
