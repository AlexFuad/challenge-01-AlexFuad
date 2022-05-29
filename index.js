// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: ("Yellow","Pink","White","Purple"),
    isHavePet: true,
    var education= new object();
    education.name= ("SD 01", "SMP 02", "SMA 03");
    education.city= ("Jakarta", "Jakarta", "Tangerang");
    education.graduate= ("2016","2019");
    function education(education.name, education.city, education.graduate) {
    this.name = education.name,
    this.city = education.city,
    this.graduate = education.graduate
    };
    favoriteRestaurant: ("Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"),
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: "23",
    email: "wendy@dingdong.com",
    favoriteColor: ("Blue","Black","Grey"),
    isHavePet: false,
    var education= new object();
    education.name= ("SD 02", "SMP 03", "SMA 01", "Universitas Maju");
    education.city= ("Jakarta", "Bogor", "Surabaya", "Tangerang");
    education.graduate= ("2010","2013", "2016");
    function education(education.name, education.city, education.graduate) {
    this.name = education.name,
    this.city = education.city,
    this.graduate = education.graduate
    };
    favoriteRestaurant: ("Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"),
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
console.log(firstUser(name, gender, age, email, favoriteColor, isHavePet, education, favoriteRestaurant));
console.log(secondUser(name, gender, age, email, favoriteColor, isHavePet, education, favoriteRestaurant));


// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};