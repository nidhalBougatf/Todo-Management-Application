package com.example.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    @GetMapping(path="/basicauth")
    public AuthenticationBean helloWorldBean2()
    {
        return new AuthenticationBean("You are authenticated ! ");
    }
}
