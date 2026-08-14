const logo = document.querySelector(".logo");
let redcolor = true;

setInterval(() => {
    if(redcolor){
        logo.style.color = "#f00";
        redcolor = false;
    }else{
        logo.style.color = "#0f0";
        redcolor = true;
    }
} , 150)

const input = document.querySelector("#input");
const searchbutton = document.querySelector("#search");
const iconbtns = document.querySelectorAll(".btn");
const outputdiv = document.querySelector("#output");

iconbtns.forEach((btn) => {
    btn.addEventListener("click" , () => {
        outputdiv.innerHTML = "";
        if(btn.innerHTML === `<i class="fa-solid fa-shirt icons"></i>`){
            outputdiv.innerHTML = tshirt();
        }else if(btn.innerHTML === `<i class="fa-solid fa-mobile icons"></i>`){
            outputdiv.innerHTML = mobile();
        }else if(btn.innerHTML === `<i class="fa-solid fa-laptop icons"></i>`){
            outputdiv.innerHTML = laptop();
        }
    })
})

const tshirt = () => {
    return`
    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/f/b/m-optic-owl-woops-studio-original-imahnk8ag7jhtxne.jpeg?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/compression-wear/b/u/e/medium-cmp-black-krd-1-original-imahk9nts2zgrtmx.jpeg?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/a/a/e/xl-2mariio6-mozero-original-imahnfybdhncc5ns.jpeg?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/l/x/xl-fs49-orange-milano-c1-just-roar-original-imahj7yxj4exa8qf.jpeg?q=70" alt="">
    `
}
const laptop = () => {
    return`
    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/k/o/-enriched-transparent-original-imahg53xmzmtsynn.png?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/b/7/-original-imahmazjdpcgnkrq.jpeg?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/u/e/-original-imahcd8gzqjnp2vv.jpeg?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/o/h/-enriched-transparent-original-imahg5fydhnpgbyz.png?q=70" alt="">
    `
}
const mobile = () => {
    return`
    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" alt="">
    <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/v/v/-original-imahgfmypevfehpc.jpeg?q=70" alt="">
    `
}