const triggers = document.querySelectorAll('.date');
const popUps = document.querySelectorAll('.pop-up');

triggers.forEach((trigger, index) => {
  trigger.addEventListener('mouseover', () => {
    popUps[index].style.display = 'block';
  });

  trigger.addEventListener('mouseout', () => {
    popUps[index].style.display = 'none';
  });
});
