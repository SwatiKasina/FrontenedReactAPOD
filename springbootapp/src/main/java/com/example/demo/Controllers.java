package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controllers{

    @GetMapping(value = {"/", "/bycountdate", "/bydate"})
    public String index() {
        return "index"; // This will serve index.html located in src/main/resources/templates/
    }
}
