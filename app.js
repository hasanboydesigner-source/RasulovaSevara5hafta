let comps = [
  {
    id: "1",
    img: "pc.png",
    nomi: "24-inch iMac with Apple M1 chip",
    malumot:
      "Apple M1 chip with 8 core CPU with 4 performance cores and 4 efficiency cores 7...",
    narx: "$1299.00",
    rating: "⭐⭐⭐⭐⭐ 4.9",
  },
];

function Yaratish() {
  let cards = document.querySelector(".cards");

  let card = comps.map((e) => {
    return `
    <div class="card bg-[#fff] p-[15px] rounded-[15px]">
      <div class="img-box bg-[#ededed]">
        <img class="m-auto" src=${e.img} alt="" />
           </div>
      <h4 class="text-[16px] font-bold my-[10px]">${e.nomi}</h4>
      <p class="text-[10px] mb-[10px]">${e.malumot}</p>
      <div class="price-box flex justify-between">
        <span class="text-[10px] font-bold">${e.narx}</span>
        <span class="text-[10px] font-bold">${e.rating}</span>
      </div>
      <div class="btns-box flex gap-[10px] mt-[10px]">
        <button class="bg-black text-white w-full rounded-[10px] py-[10px]">More Details</button>
        <button class="bg-black text-white  rounded-[10px] p-[10px]">🛒</button>
      </div>
    </div>
    `;
  });

  cards.innerHTML = card.join("");
}
Yaratish();
