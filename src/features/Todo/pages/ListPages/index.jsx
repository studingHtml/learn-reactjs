import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {
    
};

function ListPage(props) {
    const initTodoList =[
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const location = useLocation();
    const history = useHistory();

    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);

    const [filteredStatus, setFilteredStatus] = useState(() => {
        const param = queryString.parse(location.search);
        return param.status || 'all';
    });

    useEffect(()=>{
        const param = queryString.parse(location.search);
        setFilteredStatus(param.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        setTodoList(newTodoList);

    }

    const handleShowAllClick = () => {
        // setFilteredStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowCompleteClick = () => {
        // setFilteredStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowNewClick = () => {
        // setFilteredStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    },[todoList, filteredStatus]);

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values)
    }

    return (
        <div>
            <h3>What todo</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompleteClick}>Show All</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;