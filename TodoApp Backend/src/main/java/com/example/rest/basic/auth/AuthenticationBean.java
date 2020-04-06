package com.example.rest.basic.auth;

public class AuthenticationBean {
    private String message;
    public AuthenticationBean(String s) {
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
