import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd';
import stores from '@/Store'
import Router from '@/Router'

import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import * as serviceWorker from '@/serviceWorker';

import '@/Mock/dynamic_table';

import 'moment/locale/zh-cn';
import '@/index.css';
import 'antd/dist/antd.min.css';

moment.locale('zh-cn');

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ stores }>
            <LocaleProvider locale={zhCN}>
                <Router />
            </LocaleProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
