export const initAccordion = () => {
  const accordionItemsList = document.querySelector('.why-choose-us_list');
  const accordionElements = document.querySelectorAll('.why-choose-us_item');
  const accoridonBtn = document.querySelectorAll('.why-choose-us_item_top');

  accordionItemsList.addEventListener('click', (e) => {
    const target = e.target;
    const accordionBtn = target.closest('.why-choose-us_item_top');
    if (accordionBtn) {
      accordionElements.forEach((item) => item.classList.remove('active'));
      const elem = target.closest('.why-choose-us_item');
      elem.classList.add('active');
    }
  });
};
