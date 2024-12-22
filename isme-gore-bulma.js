function kisiBul(dizi, isim) {
    return dizi.find((obj) => obj.name === isim);
  }
  const insanlar = [
    { name: "Onurhan", age: 25 },
    { name: "Whiskey", age: 6 },
    { name: "Ayşe", age: 30 }
  ];
  
  const sonuc = kisiBul(insanlar, "Whiskey");
  console.log(sonuc); 
  