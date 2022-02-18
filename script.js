const produk = [
    {
        nama: 'Espresso',
        deskripsi: 'Espreso adalah jenis kopi yang dihasilkan dengan mengekstraksi biji kopi yang sudah digiling dengan menyemburkan air panas di bawah tekanan tinggi.',
        urlGambar: 'https://images.unsplash.com/photo-1596018589855-e9a2a91f687f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80'
    },
    {
        nama: 'Kopi V60',
        deskripsi: 'Kopi V60 (manual brew) adalah hasil dari salah satu teknik yang paling sering digunakan oleh para barista. Umumnya, metode ini dilakukan dengan cara menuangkan air panas secara perlahan di sekitar bubuk kopi di atas alat dengan gerakan melingkar.',
        urlGambar: 'https://images.unsplash.com/photo-1513361370431-965f1fcfb236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        nama: 'Cappuccino',
        deskripsi: 'Cappuccino adalah keseimbangan rasa antara kopi dan susu, artinya kopi dan susu dalam cappuccino saling melengkapi',
        urlGambar: 'https://images.unsplash.com/photo-1507915135761-41a0a222c709?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    }
];

const produkContainer = document.querySelector('article.produk');
produkContainer.innerHTML = '';

produk.forEach(item => {
    produkContainer.innerHTML += `
        <div class="produk-card card" style="background-image: url('${item.urlGambar}')">
            <div class="produk-teks">
                <h3>${item.nama}</h3>
                <p>${item.deskripsi}</p>
            </div>
        </div>
    `;
});

const navToggler = () => {
    const nav = document.querySelector('nav');
    const bars = document.querySelector('i.fa-bars');
    const xmark = document.querySelector('i.fa-xmark');
    const overlay = document.querySelector('.overlay');
    if (xmark.style.display === 'none' | xmark.style.display === '') {
        bars.style.display = 'none';
        xmark.style.display = 'flex';
        nav.style.left = '0';
        overlay.style.display = 'block';
        overlay.addEventListener('click', () => {
            xmark.style.display = 'none';
            bars.style.display = 'flex';
            nav.style.left = '-100%';
            overlay.style.display = 'none';
        });
    } else if (xmark.style.display === 'flex' | xmark.style.display === '') {
        xmark.style.display = 'none';
        bars.style.display = 'flex';
        nav.style.left = '-100%';
        overlay.style.display = 'none';
    }
};

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const desktopNav = document.querySelectorAll('nav.desktop-nav a');
    const toggleIcon = document.querySelectorAll('.nav-toggle i');
    if (scrollY > 100) {
        header.style.background = '#f8f8f8';
        header.style.boxShadow = '0 2px 8px 2px rgba(0,0,0,0.2)';
        logo.style.color = 'black';
        desktopNav.forEach(a => a.style.color = 'black');
        toggleIcon.forEach(icon => icon.style.color = 'black');
    } else {
        header.style.background = 'rgba(0,0,0,0)';
        header.style.boxShadow = 'none';
        logo.style.color = 'white';
        desktopNav.forEach(a => a.style.color = 'white');
        toggleIcon.forEach(icon => icon.style.color = 'white');
    }
});