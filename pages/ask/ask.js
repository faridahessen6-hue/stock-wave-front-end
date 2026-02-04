import loadHeader from "/components/header/header.js";
import loadFooter from "/components/footer/footer.js";

loadHeader();

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('ask-root');
    if (!root) return;

    const page = document.createElement('div');
    page.className = 'page-container';

    const container = document.createElement('div');
    container.className = 'ask-container';

    const header = document.createElement('div');
    header.className = 'ask-header glass-panel';

    const title = document.createElement('h1');
    title.className = 'ask-title gradient-header';
    title.textContent = 'Ask Stock Waves';

    const subtitle = document.createElement('p');
    subtitle.className = 'ask-subtitle contrast-text';
    subtitle.textContent = 'Ask questions about companies, sectors, and investing basics.';

    header.appendChild(title);
    header.appendChild(subtitle);

    const chatPanel = document.createElement('div');
    chatPanel.className = 'chat-shell glass-panel';

    const quickActions = document.createElement('div');
    quickActions.className = 'quick-actions';

    const q1 = document.createElement('button');
    q1.className = 'secondary-button quick-btn';
    q1.textContent = 'What is a stock?';

    const q2 = document.createElement('button');
    q2.className = 'secondary-button quick-btn';
    q2.textContent = 'Explain investment ';

    const q3 = document.createElement('button');
    q3.className = 'secondary-button quick-btn';
    q3.textContent = 'How to investment';

    quickActions.appendChild(q1);
    quickActions.appendChild(q2);
    quickActions.appendChild(q3);

    const messages = document.createElement('div');
    messages.className = 'chat-messages';

    const inputRow = document.createElement('div');
    inputRow.className = 'chat-input-row';

    const input = document.createElement('input');
    input.className = 'chat-input';
    input.type = 'text';
    input.placeholder = 'Type your question...';

    const sendBtn = document.createElement('button');
    sendBtn.className = 'secondary-button send-btn';
    sendBtn.textContent = 'Send';

    inputRow.appendChild(input);
    inputRow.appendChild(sendBtn);

    chatPanel.appendChild(quickActions);
    chatPanel.appendChild(messages);
    chatPanel.appendChild(inputRow);

    container.appendChild(header);
    container.appendChild(chatPanel);

    page.appendChild(container);
    root.appendChild(page);

    function addMessage(text, from) {
        const row = document.createElement('div');
        row.className = `message ${from}`;

        const bubble = document.createElement('div');
        bubble.className = `bubble ${from} contrast-text`;
        bubble.textContent = text;

        row.appendChild(bubble);
        messages.appendChild(row);
        messages.scrollTop = messages.scrollHeight;
    }

    function botReply(userText) {
        const t = userText.toLowerCase();

        if (t.includes('stock')) {
            return 'A stock is a small piece of ownership in a company. When you buy a stock, you become a shareholder.';
        }

        if (t.includes('investment') || t.includes('pe') || t.includes('price to earnings')) {
            return 'Investment means putting your money into something, like a business or stocks, to help it grow and make profit over time..';
        }

        if (t.includes('explain investment') || t.includes('portfolio')) {
            return 'Investment is a way to use your money wisely today so it can give you more value and income in the future..';
        }

        return 'Good question. For now this is a demo chat. Later we can connect it to a real AI or backend API.';
    }

    function sendMessage(text) {
        const clean = (text || '').trim();
        if (!clean) return;

        addMessage(clean, 'user');
        input.value = '';

        setTimeout(() => {
            addMessage(botReply(clean), 'bot');
        }, 400);
    }

    sendBtn.addEventListener('click', () => {
        sendMessage(input.value);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage(input.value);
        }
    });

    q1.addEventListener('click', () => sendMessage(q1.textContent));
    q2.addEventListener('click', () => sendMessage(q2.textContent));
    q3.addEventListener('click', () => sendMessage(q3.textContent));

    addMessage('Hi! Ask me anything about stocks and companies.', 'bot');

    loadFooter();
});
