package com.example.rest.restfulwebservices.helloworld;

import com.example.rest.restfulwebservices.helloworld.HelloWorldBean;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping(path="/helloworld")
    public String helloWorld()
    {
        return "hello world !";
    }

/*
    @GetMapping(path="/helloworld-bean")
    public HelloWorldBean helloWorldBean()
    {
        //throw new RuntimeException(" error happened");
        return new HelloWorldBean("hello world !!");
    }
*/
    @GetMapping(path="/helloworld/{name}")
    public HelloWorldBean helloWorldBean2(@PathVariable String name)
    {

        return new HelloWorldBean("hello "+name);
    }
}
