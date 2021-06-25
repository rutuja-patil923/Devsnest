const changeState = (child) => {
      child.classList.toggle("active");
}

const createChildren = () => {
      const gridContainer = document.querySelector(".grid-container");
      for (let i = 0; i < 400; i++) {
            const child = document.createElement("div");
            child.classList.add("grid-item");
            child.id = `${i}`;
            child.addEventListener('click', () => { changeState(child)});
            gridContainer.appendChild(child);
      }
};

createChildren();

const markActives = () => {
      const actives = [
            130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190,
            191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250,
            251, 253, 267, 269, 272, 274,
      ];
      for (let id of actives) {
            const active = document.getElementById(`${id - 1}`);
            active.classList.add("active");
      }
};

markActives();