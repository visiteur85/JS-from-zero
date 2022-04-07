let slider = {
    imagesUrls: [],
    showPrevBtn: document.getElementById("showPrev"),
    showNextBtn: document.getElementById("showNext"),
    sliderImage: document.getElementById("sliderImage"),
    currentImage: 0,
    start: function () {

        const that = this;

        //подписка на событие
        this.showPrevBtn.addEventListener("click", function (e) {
            that.onShowPrevClick(e)
        });

        this.showNextBtn.addEventListener("click", function (e) {
            that.onNextPrevClick(e)
        });

        // создаем массив картинок
        this.imagesUrls.push("https://htstatic.imgsmail.ru/pic_image/45ad9a435cc6bf88035d161dcc7f5679/840/473/1670326/");
        this.imagesUrls.push("https://news.liga.net/images/general/2021/11/17/thumbnail-tw-20211117200528-6313.jpg?v=1637174346");
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwjYA7SCo-huKmFUfqQ7qn_pZaVLXTlk5TJKGtqSKk-Zg7qv3lQjLpQzfguat1zlXpMY&usqp=CAU");
        this.imagesUrls.push("https://rossaprimavera.ru/static/files/6f9705ebd098.jpg");

        this.sliderImage.src = this.imagesUrls[this.currentImage];
        this.showPrevBtn.disabled = true

    },

    onShowPrevClick: function (event) {
        this.currentImage--
        this.sliderImage.src = this.imagesUrls[this.currentImage];
        if (this.currentImage === 0) {
            this.showPrevBtn.disabled = true
        }
        this.showNextBtn.disabled = false
    },

    onNextPrevClick: function (event) {
        this.currentImage++;
        this.sliderImage.src = this.imagesUrls[this.currentImage];
        this.showPrevBtn.disabled = false
        if (this.currentImage === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true
        }

    }
};

// slider.start();