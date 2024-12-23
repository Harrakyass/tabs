const maoMao = document.querySelector('.mao-mao');
const frieren = document.querySelector('.freiren');
const kana = document.querySelector('.kana');
const megumin = document.querySelector('.megumin');
const maoMaoNav = document.querySelector('.mao-mao-nav');
const frierenNav = document.querySelector('.freiren-nav');
const kanaNav = document.querySelector('.kana-nav');
const meguminNav = document.querySelector('.megumin-nav');
const turnVisible = (section) => {
    return () => {
        section.style.display = 'block';
        maoMao.style.display = section === maoMao ? 'block' : 'none';
        frieren.style.display = section === frieren ? 'block' : 'none';
        kana.style.display = section === kana ? 'block' : 'none';
        megumin.style.display = section === megumin ? 'block' : 'none';
    };
}
maoMaoNav.addEventListener('click', turnVisible(maoMao));
frierenNav.addEventListener('click', turnVisible(frieren));
kanaNav.addEventListener('click', turnVisible(kana));
meguminNav.addEventListener('click', turnVisible(megumin));
