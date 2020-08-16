package com.work.spbreact.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello(){
        return "안녕하세요. HI 현재 서버시간은 "+new Date() +"일까요????. \n";
    }


}