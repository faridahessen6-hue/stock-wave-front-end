import loadHeader from "../../components/header/header.js";
import loadFooter from "../../components/footer/footer.js";
import { getUserOrders } from "../../api/order-api.js";

loadHeader();

document.addEventListener('DOMContentLoaded', async () => {
    const root = document.getElementById('profile-root');
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;

    if (!user) {
        window.location.href = "../login/login.html";
        return;
    }

    const container = document.createElement('div');
    container.className = 'profile-container';


    const card = document.createElement('div');
    card.className = 'profile-card';

    const profileHeader = document.createElement('div');
    profileHeader.className = 'profile-header-section';
    profileHeader.innerHTML = `
        <h1 class="gradient-header">My Profile</h1>
        <p class="contrast-text">Managing your Stock Waves account information</p>
    `;

    const detailsGrid = document.createElement('div');
    detailsGrid.className = 'user-details-grid';

    const details = [
        { label: 'Full Name', value: user.name },
        { label: 'Email Address', value: user.email },
        { label: 'Age', value: user.age },
        { label: 'Phone', value: user.phone },
        { label: 'Birthday', value: user.birthday },
        { label: 'SSN', value: '***-**-' + (user.ssn ? user.ssn.toString().slice(-4) : '****') }
    ];

    details.forEach(detail => {
        const item = document.createElement('div');
        item.className = 'detail-item';
        item.innerHTML = `
            <span class="detail-label">${detail.label}</span>
            <span class="detail-value">${detail.value || 'N/A'}</span>
        `;
        detailsGrid.appendChild(item);
    });

    const actions = document.createElement('div');
    actions.className = 'profile-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'secondary-button';
    editBtn.textContent = 'Edit Profile';
    editBtn.onclick = () => alert('Edit profile functionality coming soon!');

    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'sign-btn';
    logoutBtn.textContent = 'Logout';
    logoutBtn.onclick = () => {
        localStorage.removeItem('user');
        window.location.href = '../home/home.html';
    };

    actions.appendChild(editBtn);
    actions.appendChild(logoutBtn);

    card.appendChild(profileHeader);
    card.appendChild(detailsGrid);
    card.appendChild(actions);

    const ordersSection = document.createElement('div');
    ordersSection.className = 'orders-section';

    const ordersTitle = document.createElement('h2');
    ordersTitle.className = 'gradient-header orders-title';
    ordersTitle.textContent = 'Order History';
    ordersSection.appendChild(ordersTitle);

    const ordersInner = document.createElement('div');
    ordersInner.className = 'orders-inner';
    ordersSection.appendChild(ordersInner);

    try {
        const orders = await getUserOrders(user.id);
        if (orders && orders.length > 0) {
            orders.forEach(order => {
                const orderCard = document.createElement('div');
                orderCard.className = 'order-item glass-panel';

                const date = new Date(order.date).toLocaleDateString();
                orderCard.innerHTML = `
                    <div class="order-top">
                        <span class="order-id">Order #${order.id || 'N/A'}</span>
                        <span class="order-date">${date}</span>
                    </div>
                    <div class="order-details">
                        <div class="order-detail">
                            <span class="order-label">Ticker</span>
                            <span class="order-value">${order.companyTicker || order.company_id || 'N/A'}</span>
                        </div>
                        <div class="order-detail">
                            <span class="order-label">Quantity</span>
                            <span class="order-value">${order.quantity || order.number_of_shares}</span>
                        </div>
                        <div class="order-detail">
                            <span class="order-label">Price</span>
                            <span class="order-value">$${parseFloat(order.price).toFixed(2)}</span>
                        </div>
                        <div class="order-detail">
                            <span class="order-label">Total</span>
                            <span class="order-value total-accent">$${parseFloat(order.total_price || order.totalPrice).toFixed(2)}</span>
                        </div>
                    </div>
                `;
                ordersInner.appendChild(orderCard);
            });
        } else {
            const noOrders = document.createElement('p');
            noOrders.className = 'contrast-text no-orders';
            noOrders.textContent = "You haven't placed any orders yet.";
            ordersInner.appendChild(noOrders);
        }
    } catch (error) {
        console.error("Error displaying orders:", error);
    }

    container.appendChild(card);
    container.appendChild(ordersSection);
    root.appendChild(container);

    loadFooter();
});
