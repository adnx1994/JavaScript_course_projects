fetch("data.json")
.then(response => response.json())
.then(data => {
    // تبدیل داده‌ها به فرمت مناسب برای نمودار کندل استیک
    const chartData = data.map(item => {
        return {
            x: new Date(item.Date), // تاریخ به فرمت Date
            o: item.Open,           // قیمت باز شدن
            h: item.High,           // بالاترین قیمت
            l: item.Low,            // پایین‌ترین قیمت
            c: item.Close           // قیمت بسته شدن
        };
    });

    // ایجاد نمودار کندل استیک با استفاده از Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'candlestick',
        data: {
            datasets: [{
                label: 'Stock Price',
                data: chartData
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        tooltipFormat: 'MMM d',
                    }
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });
})
.catch(error => console.error('Error fetching the data:', error));