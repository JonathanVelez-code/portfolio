'use strict';

// Color theme switcher. Themes live in assets/css/themes.css and are picked by
// <html data-theme="...">. The choice is remembered per browser so it carries
// across pages; an inline script in <head> applies it before the page paints.
(function () {
    var KEY = 'jv-theme';
    var THEMES = ['violet', 'ocean', 'sunset', 'emerald', 'berry', 'aurora'];
    var root = document.documentElement;

    function currentTheme() {
        var t = root.getAttribute('data-theme');
        return THEMES.indexOf(t) === -1 ? 'violet' : t;
    }

    function markActive() {
        var active = currentTheme();
        $('.style-switcher__link').each(function () {
            var on = this.getAttribute('data-theme') === active;
            this.classList.toggle('is-active', on);
            this.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
    }

    function applyTheme(theme) {
        if (THEMES.indexOf(theme) === -1) theme = 'violet';
        root.setAttribute('data-theme', theme);
        try { localStorage.setItem(KEY, theme); } catch (e) { /* storage blocked: theme just won't persist */ }
        markActive();
    }

    // Open / close the switcher panel
    $('.style-switcher__control')
        .on('click', function () {
            $('.style-switcher').toggleClass('style-switcher--active');
        })
        .on('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                $(this).trigger('click');
            }
        });

    $('.style-switcher__link').on('click', function () {
        applyTheme(this.getAttribute('data-theme'));
    });

    markActive();
})();
