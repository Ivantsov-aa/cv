export class Application {
    constructor(selector) {
        this.$content = document.querySelector(selector);
    }

    render(sections) {
        let mobileNavigation = document.createElement('i');
        mobileNavigation.className = 'bi bi-list mobile-nav-toggle';

        const onMobileNavigationClick = () => {
            document.body.classList.toggle('mobile-nav-active');    
            mobileNavigation.classList.toggle('bi-list');
            mobileNavigation.classList.toggle('bi-x');
        }

        mobileNavigation.addEventListener('click',onMobileNavigationClick);
        this.$content.prepend(mobileNavigation);

        sections.forEach(section => {
            this.$content.insertAdjacentHTML('beforeend', section.toHTML())
        })
    }
    initializeScrollToTop() {
        let mobileNavigationBtnScroll = document.createElement('i');
        mobileNavigationBtnScroll.className = 'back-to-top d-flex align-items-center justify-content-center bi bi-arrow-up-short';

        mobileNavigationBtnScroll.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        })

        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 100) {
                mobileNavigationBtnScroll.classList.add('active');
            } else {
                mobileNavigationBtnScroll.classList.remove('active');
            }
        })

        this.$content.append(mobileNavigationBtnScroll);
}
}
