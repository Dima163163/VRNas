export const initStartedVideo = () => {
  const btnStartOne = document.querySelector('.get-started_btn_play');
  const btnStartTwo = document.querySelector('.get-started_btn');
  const videoVrapper = document.querySelector('.get-started_video_wrapper');

  const handlerStartVideo = () => {
    videoVrapper.insertAdjacentHTML('afterbegin', `
    <iframe class="get-started_video" width="1200" height="522" src="https://www.youtube.com/embed/i3DbJwy0R6E?autoplay=true" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `)
  }

  btnStartOne.addEventListener('click', handlerStartVideo)
  btnStartTwo.addEventListener('click', handlerStartVideo)
}