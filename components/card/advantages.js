const advantagesContainer = document.createElement("div");
advantagesContainer.className = "advantages-container";

const advantagesImg = document.createElement("img");
advantagesImg.className = "advantages-img";
advantagesImg.src = "img/image.png";

const advantagesSubHeader = document.createElement("h2");
advantagesSubHeader.className = "advantages-sub-header";
advantagesSubHeader.textContent = "Advantages of Our Project";

const advantagesDescription = document.createElement("p");
advantagesDescription.className = "advantages-description";
advantagesDescription.textContent = "Real-time stock prices tracking "

const advantagesDescription2 = document.createElement("p");
advantagesDescription2.className = "advantages-description";
advantagesDescription2.textContent = "Company profiles and financial data"  

const advantagesDescription3 = document.createElement("p");
advantagesDescription3.className = "advantages-description";
advantagesDescription3.textContent = "Market news and updates"

const advantagesDescription4 = document.createElement("p");
advantagesDescription4.className = "advantages-description";
advantagesDescription4.textContent = "Portfolio management tools"  

const advantagesDescription5 = document.createElement("p");
advantagesDescription5.className = "advantages-description";
advantagesDescription5.textContent = "Educational resources for investors" 

const advantagesDescription6 = document.createElement("p");
advantagesDescription6.className = "advantages-description";
advantagesDescription6.textContent = "Daily market summary"  

const advantagesDescription7 = document.createElement("p");
advantagesDescription7.className = "advantages-description";
advantagesDescription7.textContent = "Expert analysis and insights"

const advantagesDescription8 = document.createElement("p");
advantagesDescription8.className = "advantages-description";
advantagesDescription8.textContent = "Notifications and alerts for price changes"


const advantagesDescription9 = document.createElement("p");
advantagesDescription9.className = "advantages-description";
advantagesDescription9.textContent = "Notifications and alerts for price changes"

const advantagesButton = document.createElement("button");
advantagesButton.className = "advantages-button";
advantagesButton.textContent = "Advantages";

advantagesContainer.appendChild(advantagesImg);
advantagesContainer.appendChild(advantagesSubHeader);
advantagesContainer.appendChild(advantagesDescription);
advantagesContainer.appendChild(advantagesDescription2);
advantagesContainer.appendChild(advantagesDescription3);
advantagesContainer.appendChild(advantagesDescription4);
advantagesContainer.appendChild(advantagesDescription5);
advantagesContainer.appendChild(advantagesDescription6);
advantagesContainer.appendChild(advantagesDescription7);
advantagesContainer.appendChild(advantagesDescription8);
advantagesContainer.appendChild(advantagesDescription9);
advantagesContainer.appendChild(advantagesButton);

export default advantagesContainer;