const quotes = [
  {
    id: 1,
    title: "Perjuangan Tanpa Henti",
    content:
      "Perjuangan sejati adalah ketika kita tidak menyerah meski dunia seakan melawan kita.",
  },
  {
    id: 2,
    title: "Semangat Tak Pernah Padam",
    content: "Semangat pahlawan tidak akan pernah padam, meski waktu berlalu.",
  },
  {
    id: 3,
    title: "Harga Sebuah Kemerdekaan",
    content:
      "Kemerdekaan bukanlah hadiah, melainkan hasil dari perjuangan panjang dan pengorbanan yang tak ternilai.",
  },
  {
    id: 4,
    title: "Cita-Cita yang Tinggi",
    content:
      "Pahlawan sejati adalah mereka yang memperjuangkan cita-cita yang lebih besar dari diri mereka sendiri.",
  },
  {
    id: 5,
    title: "Menghadapi Rintangan",
    content:
      "Rintangan bukanlah halangan, melainkan ujian bagi keberanian dan tekad pahlawan.",
  },
  {
    id: 6,
    title: "Mengorbankan Segalanya",
    content:
      "Seorang pahlawan tidak ragu untuk mengorbankan segalanya demi masa depan bangsa.",
  },
  {
    id: 7,
    title: "Jangan Takut Berjuang",
    content: "Kemenangan selalu dimulai dari keberanian untuk berjuang.",
  },
  {
    id: 8,
    title: "Tak Tergoyahkan",
    content: "Pahlawan tak pernah gentar, meski musuh datang berlipat ganda.",
  },
  {
    id: 9,
    title: "Semangat Perjuangan",
    content:
      "Semangat perjuangan pahlawan hidup dalam setiap langkah kita menuju kebebasan.",
  },
  {
    id: 10,
    title: "Berdiri Tegak",
    content:
      "Pahlawan adalah mereka yang berdiri tegak, meski badai datang menerjang.",
  },
  {
    id: 11,
    title: "Berkorban untuk Bangsa",
    content:
      "Setiap tetes darah yang tumpah adalah bukti cinta tanpa batas terhadap tanah air.",
  },
  {
    id: 12,
    title: "Jangan Pernah Mundur",
    content:
      "Seorang pahlawan tidak mengenal kata mundur, hanya ada langkah maju.",
  },
  {
    id: 13,
    title: "Pahlawan Abadi",
    content: "Nama pahlawan akan selalu hidup, meski jasad mereka telah tiada.",
  },
  {
    id: 14,
    title: "Menyatukan Bangsa",
    content:
      "Pahlawan tidak hanya berjuang untuk dirinya sendiri, tetapi untuk menyatukan hati dan jiwa bangsa.",
  },
  {
    id: 15,
    title: "Semangat Tanpa Batas",
    content:
      "Perjuangan para pahlawan mengajarkan kita bahwa tidak ada batas untuk semangat kemerdekaan.",
  },
  {
    id: 16,
    title: "Harapan di Tengah Perjuangan",
    content:
      "Dalam setiap perjuangan, selalu ada harapan yang menyinari jalan yang gelap.",
  },
  {
    id: 17,
    title: "Keberanian Tanpa Tandingi",
    content:
      "Keberanian para pahlawan adalah yang memberi kita kebebasan untuk bermimpi.",
  },
  {
    id: 18,
    title: "Lawan Ketidakadilan",
    content:
      "Para pahlawan berjuang melawan ketidakadilan, agar generasi mendatang hidup dalam kedamaian.",
  },
  {
    id: 19,
    title: "Menginspirasi Perubahan",
    content:
      "Perjuangan para pahlawan menginspirasi kita untuk menjadi agen perubahan dalam masyarakat.",
  },
  {
    id: 20,
    title: "Tidak Ada Yang Mudah",
    content:
      "Kemerdekaan bukanlah hal yang mudah didapat, melainkan hasil dari kerja keras dan pengorbanan.",
  },
  {
    id: 21,
    title: "Pahlawan Sejati",
    content:
      "Pahlawan sejati adalah mereka yang berjuang dengan hati yang tulus, tanpa pamrih.",
  },
  {
    id: 22,
    title: "Berjuang untuk Keberlanjutan",
    content:
      "Setiap perjuangan adalah investasi untuk masa depan yang lebih baik.",
  },
  {
    id: 23,
    title: "Perjuangan Tak Pernah Sia-Sia",
    content:
      "Tidak ada perjuangan yang sia-sia, karena setiap langkah menuju kebebasan adalah langkah yang berarti.",
  },
  {
    id: 24,
    title: "Kebebasan untuk Semua",
    content:
      "Pahlawan berjuang bukan hanya untuk kebebasan diri mereka, tetapi untuk kebebasan seluruh bangsa.",
  },
  {
    id: 25,
    title: "Jalan Menuju Kemenangan",
    content:
      "Kemenangan adalah hasil dari tekad yang kuat dan usaha yang tak kenal lelah.",
  },
  {
    id: 26,
    title: "Menghormati Jasa Pahlawan",
    content:
      "Menghormati pahlawan berarti melanjutkan perjuangan mereka untuk bangsa ini.",
  },
  {
    id: 27,
    title: "Jiwa Merdeka",
    content:
      "Pahlawan mengajarkan kita untuk memiliki jiwa merdeka yang tidak terikat oleh ketakutan.",
  },
  {
    id: 28,
    title: "Pahlawan dan Pengorbanan",
    content:
      "Pengorbanan seorang pahlawan adalah bagian dari darah yang mengalir dalam bangsa ini.",
  },
  {
    id: 29,
    title: "Bersatu untuk Bangsa",
    content:
      "Pahlawan mengajarkan kita pentingnya persatuan dalam mencapai kemerdekaan yang sejati.",
  },
  {
    id: 30,
    title: "Perjuangan Tanpa Akhir",
    content:
      "Perjuangan para pahlawan adalah perjuangan yang tak berakhir, karena kebebasan harus terus dipertahankan.",
  },
  {
    id: 31,
    title: "Perjuangan yang Abadi",
    content:
      "Perjuangan untuk kemerdekaan adalah perjuangan yang akan selalu hidup dalam jiwa kita.",
  },
  {
    id: 32,
    title: "Bertahan di Tengah Badai",
    content:
      "Pahlawan bertahan bukan karena kekuatan fisik, tetapi karena kekuatan semangat yang tak tergoyahkan.",
  },
  {
    id: 33,
    title: "Meraih Kemerdekaan",
    content:
      "Kemerdekaan yang kita nikmati hari ini adalah buah dari perjuangan panjang dan pengorbanan para pahlawan.",
  },
  {
    id: 34,
    title: "Bersatu dalam Perbedaan",
    content:
      "Pahlawan mengajarkan kita bahwa dalam keberagaman, kita menemukan kekuatan untuk bersatu.",
  },
  {
    id: 35,
    title: "Kekuatan Perjuangan",
    content:
      "Perjuangan yang penuh pengorbanan menghasilkan kekuatan yang luar biasa.",
  },
  {
    id: 36,
    title: "Pahlawan Tak Terlupakan",
    content: "Jasa para pahlawan akan terus dikenang sepanjang masa.",
  },
  {
    id: 37,
    title: "Maju Tanpa Ragu",
    content:
      "Ketika kita maju dengan keyakinan, kemenangan akan datang menghampiri.",
  },
  {
    id: 38,
    title: "Hargai Kemerdekaan",
    content:
      "Setiap hari adalah kesempatan untuk menghargai kemerdekaan yang telah diperjuangkan para pahlawan.",
  },
  {
    id: 39,
    title: "Jaga Tanah Air",
    content:
      "Menjaga tanah air adalah tugas kita sebagai penerus perjuangan para pahlawan.",
  },
  {
    id: 40,
    title: "Pahlawan Sejati",
    content:
      "Pahlawan sejati adalah mereka yang berjuang dengan hati, bukan hanya tangan.",
  },
  {
    id: 41,
    title: "Jiwa yang Tak Terkalahkan",
    content:
      "Pahlawan memiliki jiwa yang tak terkalahkan meski dunia seakan menjatuhkan mereka.",
  },
  {
    id: 42,
    title: "Perjuangan Tanpa Kenal Lelah",
    content:
      "Para pahlawan berjuang tanpa mengenal lelah, karena mereka tahu apa yang mereka perjuangkan.",
  },
  {
    id: 43,
    title: "Kebebasan yang Diperjuangkan",
    content:
      "Kemerdekaan bukanlah sesuatu yang diberikan, tetapi sesuatu yang harus diperjuangkan dengan darah dan air mata.",
  },
  {
    id: 44,
    title: "Semangat yang Tak Akan Padam",
    content:
      "Semangat perjuangan para pahlawan akan selalu hidup dalam setiap langkah kita.",
  },
  {
    id: 45,
    title: "Mencapai Tujuan Bersama",
    content:
      "Pahlawan tidak berjuang sendirian, tetapi bersama seluruh bangsa.",
  },
  {
    id: 46,
    title: "Bersyukur pada Pahlawan",
    content:
      "Kemerdekaan yang kita nikmati adalah hasil dari pengorbanan para pahlawan yang tak terhitung.",
  },
  {
    id: 47,
    title: "Perjuangan Bersama",
    content:
      "Pahlawan sejati tidak hanya berjuang untuk diri mereka sendiri, tetapi untuk kebaikan seluruh bangsa.",
  },
  {
    id: 48,
    title: "Menjadi Cahaya",
    content:
      "Pahlawan adalah mereka yang menjadi cahaya dalam kegelapan, memberikan harapan bagi yang membutuhkan.",
  },
  {
    id: 49,
    title: "Tidak Ada yang Mudah",
    content:
      "Kemerdekaan membutuhkan perjuangan yang tidak mudah, namun hasilnya adalah kebebasan yang berharga.",
  },
  {
    id: 50,
    title: "Mewarisi Perjuangan",
    content:
      "Tugas kita adalah mewarisi dan melanjutkan perjuangan para pahlawan demi masa depan bangsa.",
  },
  {
    id: 51,
    title: "Pahlawan Tanpa Nama",
    content:
      "Pahlawan sejati tidak selalu dikenang dengan nama, tetapi dengan perbuatan yang mereka tinggalkan.",
  },
  {
    id: 52,
    title: "Menghormati Jasa",
    content:
      "Menghormati pahlawan berarti menghargai setiap perjuangan mereka demi masa depan bangsa.",
  },
  {
    id: 53,
    title: "Tak Pernah Menyerah",
    content:
      "Seorang pahlawan tidak tahu kata menyerah, karena mereka percaya bahwa kemenangan pasti datang.",
  },
  {
    id: 54,
    title: "Jangan Lupa Sejarah",
    content:
      "Jika kita lupa sejarah, kita akan kehilangan arah untuk masa depan.",
  },
  {
    id: 55,
    title: "Bersatu Demi Tanah Air",
    content:
      "Pahlawan berjuang demi persatuan bangsa, bukan hanya untuk diri mereka sendiri.",
  },
  {
    id: 56,
    title: "Kekuatan Pahlawan",
    content:
      "Kekuatan pahlawan tidak terletak pada senjata, tetapi pada hati yang penuh keberanian.",
  },
  {
    id: 57,
    title: "Jangan Pernah Lengah",
    content:
      "Perjuangan para pahlawan mengajarkan kita untuk selalu waspada dan menjaga kemerdekaan.",
  },
  {
    id: 58,
    title: "Berani untuk Merdeka",
    content:
      "Kemerdekaan tidak datang dengan mudah, tetapi melalui keberanian untuk berjuang.",
  },
  {
    id: 59,
    title: "Pahlawan Tanpa Tanda Jasa",
    content:
      "Pahlawan sejati adalah mereka yang berjuang tanpa mengharapkan imbalan atau tanda jasa.",
  },
  {
    id: 60,
    title: "Kemerdekaan untuk Semua",
    content:
      "Pahlawan berjuang bukan hanya untuk kelompoknya, tetapi untuk semua rakyat.",
  },
  {
    id: 61,
    title: "Perjuangan Sejati",
    content:
      "Perjuangan sejati adalah perjuangan yang mengutamakan kepentingan bersama daripada kepentingan pribadi.",
  },
  {
    id: 62,
    title: "Berjuang Sampai Akhir",
    content:
      "Pahlawan berjuang sampai akhir, meskipun tahu bahwa pengorbanan mereka tidak akan terbayar.",
  },
  {
    id: 63,
    title: "Pahlawan yang Tidak Terkalahkan",
    content:
      "Pahlawan sejati tidak pernah kalah, meski tubuh mereka bisa saja jatuh.",
  },
  {
    id: 64,
    title: "Bersatu Menjadi Kuat",
    content:
      "Persatuan adalah kekuatan, dan pahlawan mengajarkan kita untuk selalu bersatu dalam setiap langkah.",
  },
  {
    id: 65,
    title: "Membangun Masa Depan",
    content:
      "Para pahlawan berjuang bukan hanya untuk hari ini, tetapi untuk masa depan yang lebih baik.",
  },
  {
    id: 66,
    title: "Kekuatan Semangat",
    content:
      "Semangat yang tidak pernah padam adalah senjata terkuat seorang pahlawan.",
  },
  {
    id: 67,
    title: "Jasa yang Tak Terhitung",
    content:
      "Jasa para pahlawan tak terhitung, karena perjuangan mereka adalah fondasi dari kemerdekaan kita.",
  },
  {
    id: 68,
    title: "Perjuangan yang Menginspirasi",
    content:
      "Perjuangan para pahlawan menginspirasi kita untuk terus berjuang demi kebaikan bersama.",
  },
  {
    id: 69,
    title: "Pahlawan untuk Bangsa",
    content:
      "Pahlawan sejati berjuang demi bangsa, bukan demi keuntungan pribadi.",
  },
  {
    id: 70,
    title: "Melayani Tanah Air",
    content:
      "Pahlawan yang sejati adalah mereka yang mengabdikan hidup mereka untuk tanah air.",
  },
  {
    id: 71,
    title: "Perjuangan yang Mewarnai Sejarah",
    content:
      "Perjuangan pahlawan adalah warna yang memberi hidup pada setiap halaman sejarah bangsa.",
  },
  {
    id: 72,
    title: "Mewujudkan Mimpi",
    content:
      "Para pahlawan berjuang untuk mewujudkan mimpi bangsa ini, yaitu kemerdekaan dan keadilan untuk semua.",
  },
  {
    id: 73,
    title: "Semangat Berapi-Api",
    content:
      "Semangat pahlawan terus menyala seperti api, memberi terang di tengah kegelapan.",
  },
  {
    id: 74,
    title: "Harapan di Setiap Langkah",
    content:
      "Setiap langkah para pahlawan adalah langkah penuh harapan untuk kemerdekaan yang abadi.",
  },
  {
    id: 75,
    title: "Membela Kebenaran",
    content:
      "Pahlawan tidak berjuang untuk kemenangan pribadi, tetapi untuk membela kebenaran dan keadilan.",
  },
  {
    id: 76,
    title: "Pahlawan dan Rakyat",
    content:
      "Pahlawan sejati selalu berdiri di samping rakyat, bersama-sama berjuang untuk kemerdekaan.",
  },
  {
    id: 77,
    title: "Keteguhan Hati",
    content:
      "Keteguhan hati pahlawan adalah pelajaran berharga bagi kita untuk tidak pernah menyerah.",
  },
  {
    id: 78,
    title: "Perjuangan Tanpa Batas Waktu",
    content:
      "Perjuangan para pahlawan tidak terikat oleh waktu, tetapi abadi dalam sejarah bangsa.",
  },
  {
    id: 79,
    title: "Pahlawan Tanpa Pamrih",
    content:
      "Pahlawan sejati berjuang tanpa pamrih, hanya demi cita-cita mulia yang lebih besar.",
  },
  {
    id: 80,
    title: "Cinta Tanah Air",
    content:
      "Cinta terhadap tanah air adalah bahan bakar yang menggerakkan langkah pahlawan.",
  },
  {
    id: 81,
    title: "Kebebasan yang Terjaga",
    content:
      "Kebebasan yang kita nikmati hari ini adalah hasil dari perjuangan yang tidak pernah berhenti.",
  },
  {
    id: 82,
    title: "Menjaga Apa yang Diperjuangkan",
    content:
      "Tugas kita adalah menjaga apa yang telah diperjuangkan oleh para pahlawan.",
  },
  {
    id: 83,
    title: "Menghadapi Takdir",
    content:
      "Pahlawan tidak takut menghadapi takdir, karena mereka tahu apa yang mereka perjuangkan adalah kebaikan.",
  },
  {
    id: 84,
    title: "Membangun Harapan",
    content:
      "Dengan setiap tetes darah, pahlawan membangun harapan bagi generasi yang akan datang.",
  },
  {
    id: 85,
    title: "Mengukir Sejarah",
    content:
      "Pahlawan mengukir sejarah dengan perjuangan mereka yang penuh semangat dan pengorbanan.",
  },
  {
    id: 86,
    title: "Tidak Ada yang Lebih Berharga",
    content:
      "Tidak ada yang lebih berharga daripada kemerdekaan yang diperoleh dengan pengorbanan pahlawan.",
  },
  {
    id: 87,
    title: "Bersama dalam Perjuangan",
    content:
      "Pahlawan tahu bahwa mereka tidak berjuang sendirian, karena perjuangan adalah milik semua.",
  },
  {
    id: 88,
    title: "Semangat Abadi",
    content:
      "Semangat perjuangan para pahlawan tidak akan pernah pudar, meski waktu berlalu.",
  },
  {
    id: 89,
    title: "Berkorban untuk Masa Depan",
    content:
      "Para pahlawan rela berkorban demi masa depan yang lebih baik bagi bangsa.",
  },
  {
    id: 90,
    title: "Perjuangan Tanpa Kenal Henti",
    content:
      "Perjuangan tidak mengenal kata berhenti, karena setiap langkah adalah bagian dari sebuah tujuan besar.",
  },
  {
    id: 91,
    title: "Memahami Nilai Kemerdekaan",
    content:
      "Kemerdekaan adalah anugerah yang harus dijaga, karena harga yang dibayar sangatlah mahal.",
  },
  {
    id: 92,
    title: "Keberanian yang Menginspirasi",
    content:
      "Keberanian pahlawan menginspirasi kita untuk tidak takut menghadapi tantangan apapun.",
  },
  {
    id: 93,
    title: "Pahlawan yang Tak Pernah Lelah",
    content:
      "Pahlawan sejati tidak mengenal lelah, mereka terus berjuang demi tujuan mulia.",
  },
  {
    id: 94,
    title: "Perjuangan yang Membebaskan",
    content:
      "Perjuangan para pahlawan membebaskan kita dari belenggu penjajahan, memberi kita kemerdekaan.",
  },
  {
    id: 95,
    title: "Jalan yang Tidak Mudah",
    content:
      "Jalan menuju kebebasan tidak pernah mudah, tetapi pahlawan selalu melangkah dengan penuh tekad.",
  },
  {
    id: 96,
    title: "Membawa Perubahan",
    content:
      "Pahlawan membawa perubahan dengan tindakan mereka yang berani dan penuh pengorbanan.",
  },
  {
    id: 97,
    title: "Keberanian Tanpa Batas",
    content:
      "Keberanian pahlawan tidak mengenal batas, mereka berjuang untuk kebebasan tanpa ragu.",
  },
  {
    id: 98,
    title: "Semangat Tak Terkalahkan",
    content:
      "Semangat para pahlawan tidak akan terkalahkan, meski badai kehidupan datang menghadang.",
  },
  {
    id: 99,
    title: "Kemerdekaan yang Diperjuangkan",
    content:
      "Kemerdekaan yang kita nikmati hari ini adalah hasil dari pengorbanan dan perjuangan tanpa kenal lelah.",
  },
  {
    id: 100,
    title: "Perjuangan Tanpa Akhir",
    content:
      "Perjuangan pahlawan tidak berakhir dengan kemerdekaan, tetapi dengan menjaga dan mempertahankannya.",
  },
];

export default quotes;
