document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value;

    if (itemValue) {
        const itemList = document.getElementById('item-list');

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = itemValue;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            itemList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);

        // Clear and focus the input
        itemInput.value = '';
        itemInput.focus();
    }
});
