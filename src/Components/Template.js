import React from 'react';
import { inject , observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'

@withRouter
@inject('store')
@observer
class TemplateComponent extends React.Component{

    render(){
        return (
            <Layout>
                
            </Layout>
        )
    }
}

export default TemplateComponent;