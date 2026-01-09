import loadHeader from "../components/header/header.js";
import createAnimatedCard from "../components/card/card-animated.js";

loadHeader();




for(let i = 0 ; i <= 10 ; i++){

const animatedCard = createAnimatedCard("fawrt", "Subscription", "2025", "UIverse", "card");
animatedCard.style.marginTop = "20px";
animatedCard.style.marginLeft = "20px";
document.body.appendChild(animatedCard)
}
