var GimmeButton = {

    onLoad: function() {
        this.initialized = true;
    },

    onToolbarButtonCommand: function() {
        var d = window.content.document;
        var s = d.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', 'https://gimmebar.com/bookmarklet/2');
        d.body.appendChild(s);

        var x = new XMLHttpRequest();
        x.onreadystatechange = this.appendBookmarkletStub;
        x.open('GET', 'https://gimmebar.com/bookmarklet/stub', true);
        x.send('');
    },

    appendBookmarkletStub: function() {
        var d = window.content.document;
        var s;
        if (this.readyState === 4) {
            s = d.createElement('script');
            s.setAttribute('type', 'text/javascript');
            s.appendChild(d.createTextNode(this.responseText));
            d.body.appendChild(s);
        }
    }
};