export default function createStockChart(stockData) {
    const sectionContainer = document.createElement('div');
    sectionContainer.className = 'chart-section glass-panel';

    sectionContainer.innerHTML = `
        <h2 class="chart-header gradient-header">Stock Price History</h2>
        <div id="stock-chart" class="chart-container"></div>
    `;

    if (!stockData?.length) {
        sectionContainer.querySelector('#stock-chart').innerHTML = `
            <div class="chart-empty-state">
                <p class="contrast-text">No price history available.</p>
            </div>
        `;
        return sectionContainer;
    }

    // Simple data transformation
    const seriesData = stockData
        .map(item => [new Date(item.timestamp).getTime(), parseFloat(item.price)])
        .sort((a, b) => a[0] - b[0]);

    // Simplified Options
    const options = {
        series: [{ name: 'Price', data: seriesData }],
        chart: {
            type: 'area',
            height: 400,
            background: 'transparent',
            toolbar: { show: true }, // Cleaner UI
            animations: { enabled: true }
        },
        theme: { mode: 'dark' },
        colors: ['#A5AE9E'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.1,
                stops: [0, 100]
            }
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        grid: {
            borderColor: 'rgba(255, 255, 255, 0.05)',
            xaxis: { lines: { show: false } }
        },
        xaxis: {
            type: 'datetime',
            tooltip: { enabled: false },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            labels: {
                formatter: (val) => `$${val.toFixed(2)}`,
                style: { colors: 'rgba(255,255,255,0.6)' }
            }
        },
        tooltip: {
            theme: 'dark',
            x: { format: 'dd MMM yyyy' },
            y: { formatter: (val) => `$${val.toFixed(2)}` }
        }
    };

    setTimeout(() => {
        const chartNode = sectionContainer.querySelector('#stock-chart');
        if (window.ApexCharts && chartNode) {
            new ApexCharts(chartNode, options).render();
        }
    }, 0);

    return sectionContainer;
}
