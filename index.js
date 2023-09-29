const form_element = document.getElementById('formdata');
const btn_element = document.getElementById('btn-submit');
const image_element = document.getElementById('imageqr');
const input_element = document.getElementById('inputbox');
//btn_element.addEventListener('click',function xyz(event){
 //   event.preventDefault();
//})
const RenderQrCode = (url)=>{
    if (!url){
        return;
    }
    image_element.src = url;
    image_element.classList.add('show');
}

form_element.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formdata =new FormData(form_element);
    const text = formdata.get('inputtext');
    const mainUrl = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    RenderQrCode(mainUrl);
});

input_element.addEventListener('click',(event)=>{
    image_element.classList.remove('show');
    event.target.reset();
})
