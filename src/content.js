// src/content.js
const content = {
  music: "/path-to-your-music.mp3", 
  
  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "memories", icon: "📸", label: "Captured Memories" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    remindsText: "this song always makes me think of you",
    songTitle: "our song",
    artist: "for you 🎵",
    highlight: "every lyric feels like us 💕",
    title: "our song",
    returnButton: "RETURN"
  },

  // استخدام علامات ` بدل "" يسمح لك بالنزول بالـ Enter مباشرة بدون \n
  letter: {
    title: "a letter",
    message: `> حبيبتي أنا عايز أقولك كلام من قلبي بجد أنا كل يوم بصحى وأنا بحمد ربنا إنك في حياتي انتي اللي غيرتي كل حاجة فيا خليتيني أحب الدنيا وخليتيني عايز أبقى أحسن عشانك
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
> أنا مش هعمل كده تاني وخلينا ننسى اللي حصل ونبدأ يومنا على نضيف أنا مستنيكي تردي عليا وتقولي خلاص صالحتك`,

    signoff: "your love",
    signature: "yours always ♡",
    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg",  label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
      { src: "/images/placeholder-6.jpg", label: "" },
      { src: "/images/placeholder-7.jpg",  label: "" },
      
    ],
    returnButton: "RETURN"
  }
};

export default content;