package ch.bbw.itshirts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/findById/{id}")
    public Customer findCustomerById(@PathVariable("id") long id) {
        return customerRepository.findById(id);
    }
}
