console.log("I Am Here")
const { hash } = window.location ;
const message = atob(hash.replace('#',''));

if(message)
{
    document.querySelector('#message-show').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    document.querySelector('#message-form').classList.remove('hide');

    document.querySelector('.container').innerHTML= message;
}


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value =`${window.location}#${encrypted}`;
    linkInput.select();
});

  document.querySelector('#copy').addEventListener('click', event => {

    document.execCommand("copy");
    alert("copied Successfully")
});
