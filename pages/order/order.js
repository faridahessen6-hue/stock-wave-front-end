import loadHeader from "/components/header/header.js";
import loadFooter from "/components/footer/footer.js";
import { createOrder } from "/api/order.api.js";

loadHeader();

document.addEventListener('DOMContentLoaded', () => {
    const companyId = sessionStorage.getItem('selectedCompany');
    const companyPriceRaw = sessionStorage.getItem('selectedCompanyPrice');
    const companyPrice = Number(companyPriceRaw);
    console.log(companyId, companyPriceRaw, companyPrice);

    const orderContainer = document.createElement('div');
    orderContainer.className = 'order-container';

    const orderForm = document.createElement('form');
    orderForm.className = 'order-form glass-panel';

    const orderHeader = document.createElement('h1');
    orderHeader.className = 'order-header gradient-header';
    orderHeader.textContent = 'Order';

    const orderSubHeader = document.createElement('h2');
    orderSubHeader.className = 'order-subheader contrast-text';
    orderSubHeader.style.marginBottom = '20px';

    if (companyId) {
        orderSubHeader.textContent = `Complete your order for company: ${companyId}`;
    } else {
        orderSubHeader.textContent = 'No company selected. Please go back and choose a company.';
    }

    const priceInfo = document.createElement('p');
    priceInfo.className = 'contrast-text';
    priceInfo.style.marginTop = '0';
    priceInfo.style.marginBottom = '20px';
    priceInfo.textContent = Number.isFinite(companyPrice)
        ? `Share price: $${companyPrice}`
        : 'Share price: Not available';

    const sharesLabel = document.createElement('label');
    sharesLabel.className = 'label';
    sharesLabel.textContent = 'Number of shares';

    const sharesInput = document.createElement('input');
    sharesInput.type = 'number';
    sharesInput.id = 'shares';
    sharesInput.className = 'input';
    sharesInput.placeholder = 'Enter number of shares';
    sharesInput.min = '1';

    const emailLabel = document.createElement('label');
    emailLabel.className = 'label';
    emailLabel.textContent = 'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.className = 'input';
    emailInput.placeholder = 'Enter your email';

    const message = document.createElement('p');
    message.className = 'contrast-text';
    message.style.marginTop = '0';
    message.style.marginBottom = '10px';

    const totalText = document.createElement('p');
    totalText.className = 'contrast-text';
    totalText.style.marginTop = '0';
    totalText.style.marginBottom = '10px';
    totalText.textContent = 'Total: $0';

    const orderButton = document.createElement('button');
    orderButton.className = 'order-button';
    orderButton.type = 'submit';
    orderButton.textContent = 'Place Order';

    const redirectToLoginButton = document.createElement('button');
    redirectToLoginButton.className = 'secondary-button';
    redirectToLoginButton.textContent = 'Have An Account?! Log In';
    redirectToLoginButton.type = 'button';
    redirectToLoginButton.addEventListener('click', () => {
        window.location.href = '/pages/login/login.html';
    });

    function updateTotal() {
        const shares = Number(sharesInput.value);
        if (!Number.isFinite(shares) || shares <= 0 || !Number.isFinite(companyPrice)) {
            totalText.textContent = 'Total: $0';
            return;
        }
        totalText.textContent = `Total: $${(shares * companyPrice).toFixed(2)}`;
    }

    sharesInput.addEventListener('input', updateTotal);

    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!companyId) {
            message.textContent = 'Please go back and select a company first.';
            return;
        }

        const shares = Number(sharesInput.value);
        const email = emailInput.value.trim();

        if (!Number.isFinite(shares) || shares <= 0) {
            message.textContent = 'Please enter a valid number of shares.';
            return;
        }

        if (!email) {
            message.textContent = 'Please enter your email.';
            return;
        }

        const total = Number.isFinite(companyPrice) ? (shares * companyPrice).toFixed(2) : 'N/A';

        const orderData = {
            company_id: companyId,
            shares,
            email,
            share_price: Number.isFinite(companyPrice) ? companyPrice : null,
            total: total === 'N/A' ? null : Number(total),
            ticker: sessionStorage.getItem('selectedCompanyTicker') || null,
        };

        const result = await createOrder(orderData);

        if (!result) {
            message.textContent = 'Order failed. Please check the backend and try again.';
            return;
        }

        message.textContent = `Order placed! Company: ${companyId}, Shares: ${shares}, Total: $${total}`;
    });

    orderContainer.appendChild(orderForm);
    orderForm.appendChild(orderHeader);
    orderForm.appendChild(orderSubHeader);
    orderForm.appendChild(priceInfo);
    orderForm.appendChild(sharesLabel);
    orderForm.appendChild(sharesInput);
    orderForm.appendChild(emailLabel);
    orderForm.appendChild(emailInput);
    orderForm.appendChild(totalText);
    orderForm.appendChild(message);
    orderForm.appendChild(orderButton);
    orderForm.appendChild(redirectToLoginButton);

    document.body.appendChild(orderContainer);
    loadFooter();

});