const progressBar = document.querySelector('#progress-bar')
const section = document.querySelector('section')

const animateProgressBar = () => {
  const { top: sectionTop, height: sectionHeight } = section.getBoundingClientRect()
  const clientHeight = document.documentElement.clientHeight

  // - invert numbers (positive to negative and negative to positive, same as i - (i * 2))
  const scrollDistance = -sectionTop
  const percentage = Math.round((scrollDistance / (sectionHeight - clientHeight)) * 100)

  if (percentage < 0) {
    progressBar.style.width = '0%'
  } else if (percentage > 100) {
    progressBar.style.width = '100%'
  } else {
    progressBar.style.width = `${percentage}%`
  }
}

window.addEventListener('scroll', animateProgressBar)