const { createApp, ref, onMounted } = Vue;

const App = createApp({
  setup() {
    const testimonials = ref([]);

    testimonials.value = [
      {
        id: 1,
        name: 'Rani Widianti',
        title: 'CEO MS GLOW',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit hic dolorem ex rerum quam ea.',
        rate: 4
      },
      {
        id: 2,
        name: 'Agus Surya',
        title: 'Founder Mikocok',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eaque!',
        rate: 5
      },
      {
        id: 3,
        name: 'Ayu Puspa Dewi',
        title: 'Founder Ponds',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti recusandae et assumenda molestias dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eaque!',
        rate: 4
      },
      {
        id: 4,
        name: 'Juki Nurmando',
        title: 'Founder Mie Gacoan',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, omnis.',
        rate: 4
      },
      {
        id: 5,
        name: 'Anggi Permata Sari',
        title: 'CEO Gojek',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos modi quia debitis impedit rem!',
        rate: 3
      },
      {
        id: 6,
        name: 'Susi Pujiastuti',
        title: 'CEO Kapal Karam',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam?',
        rate: 4
      },
      {
        id: 7,
        name: 'Santi',
        title: 'CEO Bakso 98',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci in quis magnam voluptates. Expedita, nobis.',
        rate: 5
      },
      {
        id: 8,
        name: 'Jhoni Iskandar',
        title: 'CEO Mie Ayam 69',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident, praesentium iure nam rerum expedita?',
        rate: 5
      },
      {
        id: 9,
        name: 'Candra Asih',
        title: 'CEO JFC',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ex.',
        rate: 5
      },
    ];

    const timer = ms => new Promise(res => setTimeout(res, ms));

    onMounted(() => {
      let isDown = false;
      let startX;
      let scrollLeft;
      const slider = document.querySelector('#slider-area');
      let currentScroll = 0;
      let lastScrollLeft = 0;

      let myTimer = setInterval(async function () {
        currentScroll += 400;
        if(currentScroll > 2424) {
          $('#slider-area').animate({
            scrollRight: 0
          }, "slow");
          lastScrollLeft = 0;
          currentScroll = 0;
        }
        $('#slider-area').animate({
          scrollLeft: currentScroll
        }, "slow");
        lastScrollLeft = currentScroll;
      }, 2000);

      const end = () => {
        isDown = false;
        slider.classList.remove('slider-active');
      }

      const start = (e) => {
        isDown = true;
        slider.classList.add('slider-active');
        startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;	
      }

      const move = (e) => {
        if(!isDown) return;

        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        const dist = (x - startX);
        slider.scrollLeft = scrollLeft - dist;
      }

      (() => {
        slider.addEventListener('mousedown', start);
        slider.addEventListener('touchstart', start);

        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);

        slider.addEventListener('mouseleave', end);
        slider.addEventListener('mouseup', end);
        slider.addEventListener('touchend', end);
      })();
    });

    return {
      testimonials
    }
  }
});

App.mount('#app')