package com.example.rest.restfulwebservices.helloworld;

public class HelloWorldBean {
    private String message;
    public HelloWorldBean(String s) {
        this.message=s;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
