import React from 'react';
import {view as Todos} from '../components/todos/index';
import {view as Filter} from '../components/filter/index';
import {view as AsyncHttp} from '../components/asyncHttp/index'
function TodoApp(props) {
    return (
        <div>
            <Todos/>
            <Filter/>
            <AsyncHttp/>
        </div>
    );
}

export default TodoApp;
