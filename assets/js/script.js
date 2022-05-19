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

    onMounted(() => {
      $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        loop: true,
        responsiveClass: true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3,
            nav:false
          },
          1000:{
            items:3,
            nav:false
          }
        }
      });
    });

    return {
      testimonials
    }
  }
});

App.mount('#app')

