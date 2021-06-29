const createSeats = () => {
      const seatContainer = document.querySelector(`.seats-container`);
      for (let i = 0; i < 36; i++){
            const seat = document.createElement(`div`);
            seat.classList.add(`seats`);
            seatContainer.appendChild(seat);
      }
};

createSeats();

const SeatsInfo = {
      booked: 0,
      remaining: 36,
      incDec: function(flag) {
            const bookedSeats = document.querySelector(`.booked-seats`);
            const remainingSeats = document.querySelector(`.remaining-seats`);
            if (flag) {
                  bookedSeats.textContent = `${++this.booked}`;
                  remainingSeats.textContent = `${--this.remaining}`;
            } else {
                  bookedSeats.textContent = `${--this.booked}`;
                  remainingSeats.textContent = `${++this.remaining}`;
            }
      }
}

function changeStatus() {
      this.classList.toggle(`booked`) ? SeatsInfo.incDec(true) : SeatsInfo.incDec(false);
}

const bookSeats = () => {
      const seats = document.querySelectorAll(`.seats`);
      for (const seat of seats) {
            seat.addEventListener('click', changeStatus);
      }
}

bookSeats();