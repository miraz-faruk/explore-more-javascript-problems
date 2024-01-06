function ticketPrice(number) {
    const first100TicketPrice = 100;
    const second100TicketPrice = 90;
    const restTicketPrice = 70;

    if (number <= 100 && number !== 0) {
        const totalPrice = first100TicketPrice * number;
        return totalPrice;
    }
    else if(number > 100 && number <= 200){
        const extraTicket = number - 100;
        const totalPriceSecond100 = extraTicket * second100TicketPrice;
        const totalPrice = 100 * 100 + totalPriceSecond100;
        return totalPrice;
    }
    else{
        const extraTicket = number - 200;
        const totalPrice = 19000 + extraTicket * restTicketPrice;
        return totalPrice;
    }
}

const totalPriceOfTickets = ticketPrice(201);
console.log(totalPriceOfTickets);