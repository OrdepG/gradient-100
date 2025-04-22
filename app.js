const container = document.querySelector(".container");

const cardAmmount = 9;

let bool = true;

let color1Arr = [];
let color2Arr = [];

function rndColors() {
    const x = Math.round(0xffffff * Math.random()).toString(16);
    const y = 6 -x.length;
    const z = "000000";
    const z1 = z.substring(0, y);
    const random = "#" + z1 + x;
    return random;
}

for (let i = 0; i < cardAmmount; i++) {
    const color1 =rndColors();
    const color2 =rndColors();
    
    color1Arr.push(color1);
    color2Arr.push(color2);

    container.innerHTML += `
    <div class="card">
    <div class="card-header">
    <h3 class="card-id">00${i +1}</h3>
    <button class="type">Linear</button>
    </div>
    <div class="card-body">
    <div
    class="gradient"
    style="background: linear-gradient(
    45deg, ${color1}, ${color2});"
    ></div>
    </div>
    <div class="card-footer">
    <div>
    <span class="color1">${color1}</span>
    <span class="color2">${color2}<span>
    </div>
    <button class="copy"> Copy CSS</button>
    </div>
    </div>
    `;
}
