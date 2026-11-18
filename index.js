document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.cards'));
  const wrapper = document.querySelector('.cards-wrapper');
  const warning = document.querySelector('.warning');

  const supportsSiblingIndex = CSS.supports && CSS.supports('order', 'sibling-index()');
  if (!supportsSiblingIndex && warning) {
    warning.removeAttribute('hidden');
  }

  function applyStagger(chosenCard, isSelecting) {
    const chosenIndex = cards.indexOf(chosenCard);
    if (chosenIndex === -1) return;

    if (isSelecting) {
      // Exit animation: outermost cards disappear first inward
      cards.slice(chosenIndex + 1).forEach((card, idx, arr) => {
        card.style.setProperty('--n', `${arr.length - idx}`);
      });
      cards.slice(0, chosenIndex).forEach((card, idx) => {
        card.style.setProperty('--n', `${idx + 1}`);
      });
      chosenCard.style.setProperty('--n', '0');
    } else {
      // Entry animation: innermost cards reappear first outward
      cards.slice(chosenIndex + 1).forEach((card, idx) => {
        card.style.setProperty('--n', `${idx + 1}`);
      });
      cards.slice(0, chosenIndex).forEach((card, idx) => {
        card.style.setProperty('--n', `${chosenIndex - idx}`);
      });
      chosenCard.style.setProperty('--n', '0');
    }
  }

  if (wrapper) {
    wrapper.addEventListener('change', (e) => {
      const targetInput = e.target;
      const currentCard = targetInput.closest('.cards');
      if (!currentCard) return;

      if (targetInput.checked) {
        // Ensure only one card is selected at a time
        cards.forEach((card) => {
          const input = card.querySelector('input');
          if (input && input !== targetInput) {
            input.checked = false;
          }
        });
        applyStagger(currentCard, true);
      } else {
        // Deselecting: stagger back
        applyStagger(currentCard, false);
      }
    });
  }
});
