const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

const flights = [

    {
        airline: "Tway Airlines",
        number: "TW231",
        date: "2026.07.24.(금)",

        departureCity: "부산/김해",
        departure: "PUS",
        departureTime: "09:05",

        arrivalCity: "후쿠오카",
        arrival: "FUK",
        arrivalTime: "10:05"
    },


    {
        airline: "Tway Airlines",
        number: "TW236",
        date: "2026.07.27.(월)",

        departureCity: "후쿠오카",
        departure: "FUK",
        departureTime: "20:00",

        arrivalCity: "부산/김해",
        arrival: "PUS",
        arrivalTime: "20:55"
    }

];



const container = document.querySelector(".boarding-container");



flights.forEach(flight => {


    const card = document.createElement("div");

    card.className = "boarding-card";



    card.innerHTML = `

        <div class="ticket-top">

            <div class="airline">

                <div class="airline-name">
                    ${flight.airline}
                </div>

                <div class="flight-number">
                    ${flight.number}
                </div>

            </div>


            <div class="flight-date">
                ${flight.date}
            </div>

        </div>



        <div class="divider"></div>



        <div class="route">


            <div class="departure">

                <div class="city">
                    ${flight.departureCity}
                </div>


                <div class="airport">
                    ${flight.departure}
                </div>


                <div class="flight-time">
                    ${flight.departureTime}
                </div>

            </div>



            <div class="plane">

                <img src="images/boarding.svg" alt="">

            </div>



            <div class="arrival">

                <div class="city">
                    ${flight.arrivalCity}
                </div>


                <div class="airport">
                    ${flight.arrival}
                </div>


                <div class="flight-time">
                    ${flight.arrivalTime}
                </div>

            </div>


        </div>

    `;



    container.appendChild(card);


});