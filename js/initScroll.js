export const initScroll = () => {
  const itemsList = document.querySelector('.article_recent_items');
  const scrollBar = document.querySelector('.article_recent_scrollbar');
  const scrollBarThumb = document.querySelector('.article_recent_scrollbar-thumb');

  const maxScrollTop = itemsList.scrollHeight - itemsList.clientHeight;
  
  scrollBarThumb.addEventListener('mousedown', (e) => {
    const startY = e.clientY;
    const thumbPosition = scrollBarThumb.offsetTop;

    const handleMouseMove = (e) => {
      const deltaY = e.clientY - startY;
      const newThumbPosition = thumbPosition + deltaY;
      const maxThumbPosition = scrollBar.getBoundingClientRect().height - scrollBarThumb.offsetHeight;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));

      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollTop;

      scrollBarThumb.style.top = `${boundedPosition}px`;
      itemsList.scrollTop = scrollPosition;
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleMouseUp);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  })

  const updateScrollThumbPosition = () => {
    const scrollPosition = itemsList.scrollTop;
    const thumbPosition = (scrollPosition / maxScrollTop) * (scrollBar.clientHeight - scrollBarThumb.offsetHeight);
    scrollBarThumb.style.top = `${thumbPosition}px`
  }
  itemsList.addEventListener('scroll', () => {
    updateScrollThumbPosition();
  })
}