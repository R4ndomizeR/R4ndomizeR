const projects = [
  {
    id: 1,
    title: 'Game UI',
    url: 'http://demo.spcourse.ru/game-ui/'
  },
  {
    id: 2,
    title: 'Solitaire',
    url: 'https://r4ndomizer.github.io/KlondikeSolitaire/'
  },
  // {
  //   id: 3,
  //   title: 'Minesweeper',
  //   url: 'https://r4ndomizer.github.io/Minesweeper/'
  // },
]

const socials = [
  {
    title: 'Github',
    url: 'https://github.com/R4ndomizeR'
  },
  {
    title: 'Telegram',
    url: 'https://t.me/R4ndomizeR'
  },
  {
    title: 'Email',
    url: 'mailto:krainev106@gmail.com'
  }
]

function toggleCollapse(state = true) {
  console.log(['toggleCollapse', state])

  const cardEl = document.getElementById('page__main')
  if (!cardEl) return

  console.log(['toggleCollapse2', state])

  cardEl.classList.toggle('page__main--collapsed', state)
  cardEl.classList.toggle('page__main--opened', !state)
}

function setFrameUrl(url) {
  const frameEl = document.getElementById('page__frame')
  if (!frameEl) return

  // const item = projects.find(item => item.id === id)
  // if (!item) return

  frameEl.src = url
  // frameEl.contentWindow.location = item.url

  toggleCollapse(true)
}

function openLink(url) {
  window.open(url, '_blank').focus()
}

function renderItems() {
  const projectsEl = document.getElementById('projects')
  if (projectsEl) {
    projects.forEach(item => {
      const div = document.createElement("div")

      div.classList.add('projects__item')
      div.innerHTML = `<span>${item.title}</span>`

      div.addEventListener('click', () => setFrameUrl(item.url))

      projectsEl.appendChild(div)
    })
  }

  const socialsEl = document.getElementById('socials')
  if (socialsEl) {
    socials.forEach(item => {
      const div = document.createElement("div")

      div.classList.add('projects__item')
      div.innerHTML = `<span>${item.title}</span>`

      div.addEventListener('click', () => openLink(item.url))

      socialsEl.appendChild(div)
    })
  }

  const tabEl = document.getElementById('page__main-tab')

  if (tabEl) {
    console.log(tabEl)
    tabEl.addEventListener('click', () => toggleCollapse(false))
  }

  const frameEl = document.getElementById('page__frame')
  if (frameEl) {
    frameEl.onload = function () {
      console.log('loaded frame')
      // toggleCollapse(true)
    }
  }

}



document.addEventListener("DOMContentLoaded", renderItems)