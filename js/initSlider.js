export const initSlider = () => {
  const sliderWrapper = document.querySelector('.article_popular_slider_wrapper');
  const slides = document.querySelectorAll('.article_popular_slide');
  const dots = document.querySelectorAll('.article_popular_slider_dot');
  const dotsWrapper = document.querySelector('.article_popular_slider_dots');

  dotsWrapper.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.article_popular_slider_dot')) {
      dots.forEach((itemDot, i) => {
        itemDot.classList.remove('active');
      })
      target.classList.add('active');
      const numb = target.dataset.id;
      const slidesWidth = slides[0].clientWidth;
      sliderWrapper.scrollTo({left: numb * slidesWidth, behavior: 'smooth'});
    }
  })
}