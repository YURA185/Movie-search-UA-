function showHome() {
  document.getElementById('home').style.display = 'flex';
  document.getElementById('movies').style.display = 'none';
  document.getElementById('news').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

function showMovies() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('movies').style.display = 'block';
  document.getElementById('news').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('contact').style.display = 'none';

  const movieListContainer = document.querySelector('#movies .movie-list');
  if (movieListContainer.innerHTML.trim() === '') {
      const movies = [
          { title: "Бджоляр", image: "IMAGES/1.jpg" },
          { title: "Втеча з Шоушенка", image: "IMAGES/2.jpg" },
          { title: "Зелена миля", image: "IMAGES/3.jpg" },
          { title: "Початок", image: "IMAGES/4.jpg" },
          { title: "Інтерстеллар", image: "IMAGES/5.jpg" },
          { title: "Матриця", image: "IMAGES/6.jpg" },
          { title: "Володар перснів", image: "IMAGES/7.jpg" },
          { title: "Темний лицар", image: "IMAGES/8.jpg" },
          { title: "Гладіатор", image: "IMAGES/9.jpg" },
          { title: "Титанік", image: "IMAGES/10.jpg" },
          { title: "Аватар", image: "IMAGES/11.jpg" },
          { title: "Пірати Карибського моря", image: "IMAGES/12.jpg" },
          { title: "Список Шиндлера", image: "IMAGES/13.jpg" },
          { title: "Бійцівський клуб", image: "IMAGES/14.jpg" },
          { title: "Мовчання ягнят", image: "IMAGES/15.jpg" },
          { title: "Сім", image: "IMAGES/16.jpg" },
          { title: "Престиж", image: "IMAGES/17.jpg" },
          { title: "Паразити", image: "IMAGES/18.jpg" },
          { title: "Джокер", image: "IMAGES/19.jpg" },
          { title: "1917", image: "IMAGES/20.jpg" },
          { title: "Шалений Макс", image: "IMAGES/21.jpg" },
          { title: "Гравітація", image: "IMAGES/22.jpg" },
          { title: "Ла-Ла Ленд", image: "IMAGES/23.jpg" },
          { title: "Острів проклятих", image: "IMAGES/24.jpg" },
          { title: "Дюна", image: "IMAGES/25.jpg" },
          { title: "Слов'яни", image: "IMAGES/26.jpg" },
          { title: "Сяйво", image: "IMAGES/27.jpg" },
          { title: "Кримінальне чтиво", image: "IMAGES/28.jpg" },
          { title: "Великий Гетсбі", image: "IMAGES/29.jpg" },
          { title: "Хрещений батько", image: "IMAGES/30.jpg" },
          { title: "Запах жінки", image: "IMAGES/31.jpg" },
          { title: "Вовк з Уолл-стріт", image: "IMAGES/32.jpg" },
          { title: "Соціальна мережа", image: "IMAGES/33.jpg" },
          { title: "Мільйонер із нетрів", image: "IMAGES/34.jpg" },
          { title: "Король Лев", image: "IMAGES/35.jpg" },
          { title: "Назад у майбутнє", image: "IMAGES/36.jpg" },
          { title: "Останній король", image: "IMAGES/37.jpg" },
          { title: "Чужий", image: "IMAGES/38.jpg" },
          { title: "Термінатор 2", image: "IMAGES/39.jpg" },
          { title: "Міцний горішок", image: "IMAGES/40.jpg" },
          { title: "Таксі Марсель", image: "IMAGES/41.jpg" },
          { title: "Останні лицарі", image: "IMAGES/42.jpg" },
          { title: "Реквієм за мрією", image: "IMAGES/43.jpg" },
          { title: "Загублені", image: "IMAGES/44.jpg" },
          { title: "12 мавп", image: "IMAGES/45.jpg" },
          { title: "Великий куш", image: "IMAGES/46.jpg" },
          { title: "Малхолланд Драйв", image: "IMAGES/47.jpg" },
          { title: "Старим тут не місце", image: "IMAGES/48.jpg" },
          { title: "Дорога", image: "IMAGES/49.jpg" },
          { title: "Форсаж 9", image: "IMAGES/50.jpg" }
      ];

      movies.forEach((movie, index) => {
          const movieElement = document.createElement('div');
          movieElement.classList.add('movie');
          movieElement.innerHTML = `
              <img src="${movie.image}" alt="${movie.title}">
              <h3>${movie.title}</h3>
              <div class="rating-buttons">
                  <button class="like-btn" data-id="${index}">
                      👍 <span class="like-count">0</span>
                  </button>
                  <button class="dislike-btn" data-id="${index}">
                      👎 <span class="dislike-count">0</span>
                  </button>
              </div>
          `;
          movieListContainer.appendChild(movieElement);
      });

      initializeRatingButtons();
  }
}

function showNews() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('movies').style.display = 'none';
  document.getElementById('news').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

function showAbout() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('movies').style.display = 'none';
  document.getElementById('news').style.display = 'none';
  document.getElementById('about').style.display = 'block';
  document.getElementById('contact').style.display = 'none';
}

function showContact() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('movies').style.display = 'none';
  document.getElementById('news').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
}

function initializeRatingButtons() {
  const likeButtons = document.querySelectorAll('.like-btn');
  const dislikeButtons = document.querySelectorAll('.dislike-btn');

  likeButtons.forEach(button => {
      const movieId = button.getAttribute('data-id');
      if (localStorage.getItem(`likes-${movieId}`) === null) {
          localStorage.setItem(`likes-${movieId}`, '0');
      }
      if (localStorage.getItem(`user-liked-${movieId}`) === null) {
          localStorage.setItem(`user-liked-${movieId}`, 'false');
      }

      let likes = parseInt(localStorage.getItem(`likes-${movieId}`)) || 0;
      const userLiked = localStorage.getItem(`user-liked-${movieId}`) === 'true';

      button.querySelector('.like-count').textContent = likes;
      if (userLiked) {
          button.classList.add('active');
      }

      button.addEventListener('click', () => {
          let currentLikes = parseInt(localStorage.getItem(`likes-${movieId}`)) || 0;
          let userLiked = localStorage.getItem(`user-liked-${movieId}`) === 'true';
          let userDisliked = localStorage.getItem(`user-disliked-${movieId}`) === 'true';
          const dislikeButton = document.querySelector(`.dislike-btn[data-id="${movieId}"]`);

          if (userLiked) {
              currentLikes = Math.max(0, currentLikes - 1);
              localStorage.setItem(`likes-${movieId}`, currentLikes);
              localStorage.setItem(`user-liked-${movieId}`, 'false');
              button.classList.remove('active');
          } else {
              currentLikes += 1;
              localStorage.setItem(`likes-${movieId}`, currentLikes);
              localStorage.setItem(`user-liked-${movieId}`, 'true');
              button.classList.add('active');

              if (userDisliked) {
                  let currentDislikes = parseInt(localStorage.getItem(`dislikes-${movieId}`)) || 0;
                  currentDislikes = Math.max(0, currentDislikes - 1);
                  localStorage.setItem(`dislikes-${movieId}`, currentDislikes);
                  localStorage.setItem(`user-disliked-${movieId}`, 'false');
                  dislikeButton.classList.remove('active');
                  dislikeButton.querySelector('.dislike-count').textContent = currentDislikes;
              }
          }

          button.querySelector('.like-count').textContent = currentLikes;
      });
  });

  dislikeButtons.forEach(button => {
      const movieId = button.getAttribute('data-id');
      if (localStorage.getItem(`dislikes-${movieId}`) === null) {
          localStorage.setItem(`dislikes-${movieId}`, '0');
      }
      if (localStorage.getItem(`user-disliked-${movieId}`) === null) {
          localStorage.setItem(`user-disliked-${movieId}`, 'false');
      }

      let dislikes = parseInt(localStorage.getItem(`dislikes-${movieId}`)) || 0;
      const userDisliked = localStorage.getItem(`user-disliked-${movieId}`) === 'true';

      button.querySelector('.dislike-count').textContent = dislikes;
      if (userDisliked) {
          button.classList.add('active');
      }

      button.addEventListener('click', () => {
          let currentDislikes = parseInt(localStorage.getItem(`dislikes-${movieId}`)) || 0;
          let userDisliked = localStorage.getItem(`user-disliked-${movieId}`) === 'true';
          let userLiked = localStorage.getItem(`user-liked-${movieId}`) === 'true';
          const likeButton = document.querySelector(`.like-btn[data-id="${movieId}"]`);

          if (userDisliked) {
              currentDislikes = Math.max(0, currentDislikes - 1);
              localStorage.setItem(`dislikes-${movieId}`, currentDislikes);
              localStorage.setItem(`user-disliked-${movieId}`, 'false');
              button.classList.remove('active');
          } else {
              currentDislikes += 1;
              localStorage.setItem(`dislikes-${movieId}`, currentDislikes);
              localStorage.setItem(`user-disliked-${movieId}`, 'true');
              button.classList.add('active');

              if (userLiked) {
                  let currentLikes = parseInt(localStorage.getItem(`likes-${movieId}`)) || 0;
                  currentLikes = Math.max(0, currentLikes - 1);
                  localStorage.setItem(`likes-${movieId}`, currentLikes);
                  localStorage.setItem(`user-liked-${movieId}`, 'false');
                  likeButton.classList.remove('active');
                  likeButton.querySelector('.like-count').textContent = currentLikes;
              }
          }

          button.querySelector('.dislike-count').textContent = currentDislikes;
      });
  });
}

// Початковий стан сторінки (показуємо головну)
showHome();