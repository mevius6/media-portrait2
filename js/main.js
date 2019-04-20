const animateHeader = function(Header, ratio) {
    if (ratio > 0) {
        if (false && Header.tagName === "H2") {
            Header.classList.add("in-view");
        } else {
            Header.classList.add("in-view");
        }
    } else {
        Header.classList.remove("in-view");
    }
};

const Headers = document.querySelectorAll("h2");
const HeadersObserver = new IntersectionObserver(
    entries => {
        return entries.forEach(e => {
            animateHeader(e.target, e.intersectionRatio);
        });
    },
    { threshold: 1.0 }
);
for (const Header of Headers) {
    HeadersObserver.observe(Header);
    HeadersObserver.observe(Header.closest("article"));
}

