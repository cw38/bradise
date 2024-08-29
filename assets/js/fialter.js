  function filterItems(category) {
        let items = document.querySelectorAll('.portfolio-item');
        let buttons = document.querySelectorAll('.filter-btn');

        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        event.target.classList.add('active');

        items.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }