let open = document.getElementById('open');
let close = document.getElementById('close');
let modal = document.querySelector('.overlay');

open.addEventListener('click', function() {
    modal.style.display = 'block';
    }
);

close.addEventListener('click', function() {
    modal.style.display = 'none';
    }
);