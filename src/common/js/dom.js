export function addClass (el, className) {
  // 判断是否含有此类名，有则直接返回
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(^\\s|$)')
  // 测试是否含有此类名
  return reg.test(el.className)
}

export function getData (el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) { // setAttribute() 方法添加指定的属性，并为其赋指定的值。
    return el.setAttribute(name, val)
  } else { // getAttribute() 方法返回指定属性名的属性值。
    return el.getAttribute(name)
  }
}

// 兼容transform的封装
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle (style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
