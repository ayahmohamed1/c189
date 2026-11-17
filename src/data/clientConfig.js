/**
 * clientConfig.js
 * ------------------------------------------------------------------
 */

const clientConfig = {
  theme: {
    background: '#fdfbf7',
    primary: '#1b2a4a',
    accent: '#c98a4b',
    balloon: '#a9bcd8',
  },

  meta: {
    recipientName: 'Love',
    senderName: 'Your Person',
    pageTitle: ' this for you, Love!',
  },

  cover: {
    eyebrow: 'For you',
    subtext: 'tap on the letter to open',
  },

  envelopeOpen: {
    heading: 'this for you,\nLove!',
    subtext: 'tap on the letter for more',
    balloonCount: 6,
  },

  letter: {
    heading: 'this for you, Love!',
    salutation: 'this for you,',
    paragraphs: [
      `> حبيبتي أنا عايز أقولك كلام من قلبي بجد أنا كل يوم بصحى وأنا بحمد ربنا إنك في حياتي انتي اللي غيرتي كل حاجة فيا خليتيني أحب الدنيا وخليتيني عايز أبقى أحسن عشانك
> أنا بحبك مش حب عادي بحبك حب كبير أوي بحب لما أصحى ألاقي رسالة منك وبحب لما أكون مخنوق وأسمع صوتك فأنسى كل حاجة وبحب لما تضحكي وأحس إن الدنيا كلها بتضحك معاكي
> انتي اللي لما بتبقي زعلانة أنا ببقى زعلان أكتر منك ولما بتبقي مبسوطة أنا ببقى طاير من الفرحة انتي بقيتي حتة مني بقيتي روحي اللي بعيش بيها
> أنا نفسي نفضل مع بعض على طول، ونكبر مع بعض ونعدي كل حاجة صعبة مع بعض ونفضل فاكرين إن مفيش حاجة هتفرقنا أبداً مهما حصل
> أنا مش عايز من الدنيا دي غيرك انتي ولا عايز أشوف حد غيرك انتي اللي مليتي عليا حياتي كلها
 وخلتيني مش شايف غيرك
> بحبك أوي يا أجمل حاجة حصلتلي في حياتي وبحبك كل يوم أكتر من اليوم اللي قبله وهفضل أحبك طول عمري
> بصي أنا عارف إني ضايقتك لما فتحت موضوع قديم والله مكنش قصدي أبداً  ولا إني أنكد عليكي أنا بس ساعات بتكلم من غير ما أفكر في الكلمة قبل ما تطلع بس انتي عارفة معزتك عندي عاملة إزاي
> انتي مش مجرد بنت أنا مرتبط بيها وخلاص
 انتي اللي ببقى مبسوط وأنا بتكلم معاها واللي يومي بيكمل بيها وأنا بجد مش عايز أي حاجة تبوظ بينا بسبب كلام مالوش لازمة
> أنا آسف يا حبيبتي حقك عليا وحقك تزعلي بس متطوليش عليا في الزعل عشان والله وحشتيني حتى واحنا لسه متكلمين م شوية
> أنا مش هعمل كده تاني وخلينا ننسى اللي حصل ونبدأ يومنا على نضيف أنا مستنيكي تردي عليا وتقولي خلاص صالحتك`
    ],
    signOff: 'حبيبتك بسملة🥰🫶🏻',
    images: [
      { src: '/images/placeholder-1.jpg', alt: 'Memory 1' },
      { src: '/images/placeholder-2.jpg', alt: 'Memory 2' },
    ],
    nextLabel: 'Next',
  },

  video: {
    heading: 'Song For You',
    videoSrc: '/videos/IMG_3295.MP4',
    caption: 'love you — our song',
    nextLabel: 'Next',
  },

  // تم تحديث هذا القسم ليطابق أسماء الصور الموجودة في فولدر public/images/ تماماً
  memories: {
    title: "our memories",
    images: [
      { src: '/images/placeholder-1.jpg', tag: '01', label: '' },
      { src: '/images/placeholder-2.jpg', tag: '02', label: '' },
      { src: '/images/placeholder-3.jpg', tag: '03', label: '' },
      { src: '/images/placeholder-4.jpg', tag: '04', label: '' },
      { src: '/images/placeholder-5.jpg', tag: '05', label: '' },
      
    ],
    returnButton: "RETURN"
  },

};

export default clientConfig;