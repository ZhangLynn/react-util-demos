import React from 'react';
import Todos from '../components/todoApp/components/todos/todos';
import Filter from '../components/todoApp/components/filter/filters';
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
