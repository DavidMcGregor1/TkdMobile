package com.example.demo.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

@Controller
public class MainController {

    @GetMapping(path = "/getEvents")
    @ResponseBody
    public ResponseEntity<String> getEvents() {
        System.out.println("hit get events");
        // Define the URL of the external API
        String apiUrl = "http://mdtkd.net/api/articles";

        System.out.println("apiUrl: " + apiUrl);

        // Create a RestTemplate instance
        RestTemplate restTemplate = new RestTemplate();
        System.out.println("restTemplate: " + restTemplate);

        // Make a GET request to the external API and retrieve the response
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);
        System.out.println("response: " + response.getBody().toString());
        System.out.println("response: " + response.getBody());

        System.out.println("response: " + response.getHeaders());
        System.out.println("response: " + response);
        System.out.println("response: " + response.getStatusCode());




        // Return the JSON response to the client
        return response;
    }
}
