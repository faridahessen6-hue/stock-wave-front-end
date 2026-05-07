import loadHeader from "../../components/header/header.js";
import loadFooter from "../../components/footer/footer.js";
import { createOrder } from "../../api/order-api.js";

loadHeader();

document.addEventListener('DOMContentLoaded', async () => {
    const root = document.getElementById('order-root');
    const companyId = sessionStorage.getItem('selectedCompany');
    const ticker = sessionStorage.getItem('selectedCompanyTicker');
    const priceStr = sessionStorage.getItem('selectedCompanyPrice');
    const price = parseFloat(priceStr) || 0;

    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;

    if (!user) {
        alert("Please login to place an order.");
        window.location.href = "../login/login.html";
        return;
    }

    if (!companyId || !ticker) {
        alert("No company selected. Returning to companies page.");
        window.location.href = "../companies/companies.html";
        return;
    }

    const container = document.createElement('div');
    container.className = 'order-container';

    const form = document.createElement('form');
    form.className = 'order-form';

    form.innerHTML = `
        <h1 class="order-header gradient-header">Confirm Order</h1>
        <p class="order-subheader contrast-text">Review your purchase details below</p>

        <div class="form-group">
            <label class="label">Company Ticker</label>
            <input type="text" class="input" value="${ticker}" readonly>
        </div>

        <div class="form-group">
            <label class="label">Current Price</label>
            <input type="text" class="input" value="$${price.toFixed(2)}" readonly>
        </div>

        <div class="form-group">
            <label class="label">Number of Shares</label>
            <input type="number" id="quantity" class="input" min="1" value="1" placeholder="Enter quantity">
        </div>

        <div class="summary-card">
            <div class="summary-row">
                <span class="summary-label">Price per Share</span>
                <span class="summary-value">$${price.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">Subtotal</span>
                <span id="subtotal-val" class="summary-value">$${price.toFixed(2)}</span>
            </div>
            <div class="summary-row total-row">
                <span class="total-label">Estimated Total</span>
                <span id="total-val" class="total-value">$${price.toFixed(2)}</span>
            </div>
        </div>

        <button type="submit" id="submit-order" class="order-button">Place Purchase Order</button>
        <button type="button" class="secondary-button" onclick="window.location.href='../companies/companies.html'">Cancel</button>
    `;

    container.appendChild(form);
    root.appendChild(container);

    const quantityInput = form.querySelector('#quantity');
    const totalVal = form.querySelector('#total-val');
    const subtotalVal = form.querySelector('#subtotal-val');

    quantityInput.addEventListener('input', () => {
        const qty = parseInt(quantityInput.value) || 0;
        const total = qty * price;
        totalVal.textContent = `$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        subtotalVal.textContent = `$${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const quantity = parseInt(quantityInput.value);

        if (!quantity || quantity <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        const submitBtn = form.querySelector('#submit-order');
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";

        const orderData = {
            userId: user.id,
            companyId: parseInt(companyId),
            quantity: quantity,
            price: price,
            totalPrice: quantity * price,
            date: new Date().toISOString(),
            numberOfShares: quantity
        };

        try {
            const result = await createOrder(orderData);
            alert("Success! Your order has been placed.");
            window.location.href = "../home/home.html";
        } catch (error) {
            alert("Failed to create order: " + error.message);
            submitBtn.disabled = false;
            submitBtn.textContent = "Place Purchase Order";
        }
    });

    loadFooter();
});
