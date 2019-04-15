import React from 'react';
import loadable from 'react-loadable'
import { Layout , Empty } from 'antd'

const { Content } = Layout 

function asyncImport( loader ){
    function Loading(props) {
        if (props.error) 
            return <div>Error!</div>;
        else if (props.pastDelay) 
            return (
                <Content 
                    style={{ textAlign:'center' , position:'relative' ,height:'100%', }}
                >
                    <Empty 
                        style={{ position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',}}
                    />
                </Content>
            );
        else 
            return null;
    }

    return loadable({
        loader,
        loading: Loading,
    })
}

export {
    asyncImport
}