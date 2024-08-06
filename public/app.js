document.addEventListener('click', (event) => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id;
        remove(id).then(() => {
            event.target.closest('li').remove();
        });
    }

    if (event.target.dataset.type === 'update') {
        const id = event.target.dataset.id;
        const promtText = prompt('Введите новый текст');

        if (promtText != null) {
            update(id, promtText);
            event.target.closest('li').querySelector('span').textContent = promtText;
        }
    }
});

async function remove(id) {
    await fetch(`/${id}`, { method: 'DELETE' });
}

async function update(id, title) {
    await fetch(`/${id}`, {
        method: 'PUT',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    });
}
