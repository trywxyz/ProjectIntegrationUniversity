document.addEventListener('DOMContentLoaded', () => {
    // Animações de entrada
    gsap.from('header', { opacity: 0, duration: 2, y: -50 });
    gsap.from('#impacto', { opacity: 0, duration: 2, y: 50 });
    gsap.from('#doacoes', { opacity: 0, duration: 2, y: 50 });

    // Gráfico de Impacto
    const ctx = document.getElementById('impactoGrafico').getContext('2d');
    const impactoGrafico = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Alimentos', 'Roupas', 'Cobertores'],
            datasets: [{
                label: 'Impacto das Doações',
                data: [60, 25, 15],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

    // Animação do gráfico
    gsap.from('#impactoGrafico', { opacity: 0, duration: 2, y: 50 });

    // Feedback de Doação
    document.getElementById('formDoacao').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('feedback').style.display = 'block';
        gsap.from('#feedback', { opacity: 0, duration: 2, y: 50 });
    });
});
