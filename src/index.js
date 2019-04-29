((() => {
  document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('#image');
    const progressElement = document.querySelector('#progress');
    const textElement = document.querySelector('#text');
    fileInput.addEventListener('change', () => {
      textElement.innerHTML = '';
      const file = fileInput.files[0];
      Tesseract
        .recognize(file, {
          lang: 'pol'
        })
        .progress(( { progress } ) => {
          progressElement.setAttribute('value', progress);
        })
        .then(( { text } ) => {
          progressElement.setAttribute('value', '0');
          textElement.innerHTML = text;
          fileInput.value = '';
      })
    });
  });
})());
