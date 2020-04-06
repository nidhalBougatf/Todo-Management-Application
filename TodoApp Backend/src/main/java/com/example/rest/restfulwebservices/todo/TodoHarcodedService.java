package com.example.rest.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHarcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter=0;
    static {
        todos.add(new Todo(++idCounter,"nidhal","learn angular",new Date(),false));
                todos.add(new Todo(++idCounter,"nidhal","learn spring",new Date(),false));
                todos.add(new Todo(++idCounter,"nidhal","learn docker",new Date(),false));

    }

    public List<Todo> findAll()
    {
        return todos;
    }

    public Todo deleteById(long id)
    {
        Todo todo = findById(id);
        if( todo==null) return null;
        todos.remove(todo);
        return todo;
    }

    public Todo findById(long id) {
        for (Todo t: todos)
        {
            if (t.getId()==id)
                return t;
        }
        return null;
    }
    
    
    public Todo save ( Todo todo)
    {
        if (todo.getId()==-1)
        {
            todo.setId(++idCounter);
            todos.add(todo);
        }else
        {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }


}
