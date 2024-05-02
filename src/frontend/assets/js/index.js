export default function loader(){
    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        setTimeout(()=>{
            loader.classList.add("loader-hidden");
        },1800)
      });
}