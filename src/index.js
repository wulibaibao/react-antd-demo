import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.css';
import * as serviceWorker from '@/serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import stores from '@/Store'
import App from '@/Router'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ stores }>
            <LocaleProvider locale={zh_CN}>
                <App />
            </LocaleProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
