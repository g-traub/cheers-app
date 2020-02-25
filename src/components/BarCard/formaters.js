export function formatCp(cp) {
  return cp.toString().replace(/^750+/,'')
}

export function formatTime(time) {
  return time.replace(':','h').replace(/00$/, '')
}

export function formatPrice(price) {
  return price.toString().replace('.00','')
}