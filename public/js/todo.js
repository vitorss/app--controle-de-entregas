const lists = document.querySelectorAll('.card-body');
const list_items = document.querySelectorAll('.historic-requests');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    item.addEventListener('dragstart', function() {
        draggedItem = item;
        setTimeout(function() {
            item.style.display = 'none';
        }, 0)
    });

    item.addEventListener('dragend', function() {
        setTimeout(function() {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    })

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        list.addEventListener('dragenter', function(e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(30, 60, 90, 0.4)';
        });

        list.addEventListener('dragleave', function(e) {
            this.style.backgroundColor = 'rgba(30, 60, 90, 0.3)';
        });

        list.addEventListener('drop', function(e) {
            console.log('drop');
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(30, 60, 90, 0.3)';
        });
    }
}