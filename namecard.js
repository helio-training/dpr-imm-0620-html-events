const name = document.getElementById('name');
const nameBtn = document.getElementById('name_btn');
const nameText = document.getElementById('name_text');

const nameHandler = () => {
    name.innerHTML = nameText.value;
}

nameBtn.addEventListener('click', nameHandler);