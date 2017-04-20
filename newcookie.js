var Cookies = require('cookies-js');

Cookies.set('name', 'value', { expires: 7, path: '' });

Cookies.get('name');